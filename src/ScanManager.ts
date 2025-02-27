import Parser, { type Language, QueryCapture, SyntaxNode } from 'tree-sitter';
import { ScanRule, ScanResult, ResultType } from 'cayce-types';
import TreeSitter from 'tree-sitter';

export default class ScanManager {
    private treeSitterNodeTree: Parser.Tree;
    private treeSitterParser: Parser;
    private readonly treeSitterLanguage: Language;
    private readonly scannerRules: ScanRule[];
    private readonly sourceCodeToScan: string;

    /**
     * The ScanManager is the main class for scanning code. It is responsible for scanning code for violations. This
     * class requires construction via this constructor which dictates the rules to be used, the language to be scanned,
     * and the source code to be scanned.
     * @param parser A tree-sitter parser instance
     * @param language A tree-sitter language instance
     * @param sourceCode The source code to be scanned
     * @param rules An array of ScanRule objects that dictate what to scan for
     */
    constructor(parser: Parser, language: Language, sourceCode: string, rules: Array<ScanRule>) {
        this.sourceCodeToScan = sourceCode;
        this.scannerRules = rules;
        this.treeSitterLanguage = language;
        this.treeSitterParser = parser;
        this.treeSitterParser.setLanguage(language);
        this.treeSitterNodeTree = parser.parse(this.sourceCodeToScan);
    }

    /**
     * Dump is here as a way to quickly test out new rules without having to create them. It's basically
     * a mini playground.
     * @param queryString A tree sitter query. It can be as simple or as complex as you want.
     * @returns `string` The actual source fragment(s) selected by the query, identified in the matches collection, and stored in the capture collection under that.
     */
    dump(queryString: string): string {
        // Use dump as a mechanism to allow for ad-hoc ts queries?
        const result: Array<string> = [];
        if (queryString === '') {
            queryString = `(parser_output)@target`;
        }
        const query: TreeSitter.Query = new TreeSitter.Query(this.treeSitterLanguage, queryString);
        const globalCaptures: QueryCapture[] = query.captures(this.treeSitterNodeTree.rootNode);
        globalCaptures.forEach((capture) => {
            result.push(`@${capture.name}=${capture.node.text}`);
        });
        return JSON.stringify(result);
    }

    /**
     * Measure is a scanner method for counting things. It's a way to measure the codebase for various metrics.
     * For instance, you could measure the number of variables < three characters long.
     */
    async measure(): Promise<ScanResult[]> {
        return this.commonScan();
    }

    /**
     * Scan is the scanner main method for inspecting code for violations of given rules.
     * Rules are provided to the ScanManager from elsewhere.
     * TODO: Refactor the private commonScan method so that it iterates through a supplied set of rules invoked through a dynamic import
     * @returns A map of categories->list of violations
     */
    async scan(): Promise<ScanResult[]> {
        return await this.commonScan();
    }

    /**
     * Common scan method used by both scan and measure. Both were consolidated here as both essentially
     * did the same thing, just reported the results differently. Realizing that how the report is formatted
     * should be the purview of something other than the scanner, I moved that stuff out.
     * Consolidated all rule methods into validateQuery. Only that and preFilter remain, and their usefulness should
     * be evident.
     * @returns `Map<string, Array<ScanResult>>` A map of category->array of violations. Allows for some
     * custom organization
     */
    private async commonScan(): Promise<ScanResult[]> {
        const contextRules = this.scannerRules;

        const scanResultList: ScanResult[] = [];

        for (const ruleIteration of contextRules) {
            // This next line normalizes the priority to the highest level of severity in case someone tries to
            // execute a rule with a priority of 16452 or something. That priority wouldn't be mappable to
            // sarif severity levels.
            ruleIteration.Priority =
                ruleIteration.Priority > ResultType.VIOLATION ? ResultType.VIOLATION : ruleIteration.Priority;
            const queryText = ruleIteration.Query;

            try {
                const filteredRoot: SyntaxNode = ruleIteration.preFilter(this.treeSitterNodeTree.rootNode);
                // Prettier reformats this into a blatant syntax error
                const captureQuery: TreeSitter.Query = new TreeSitter.Query(this.treeSitterLanguage, queryText);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const ruleContext = ruleIteration.Context ?? 'scan';
                ruleIteration.validateQuery(captureQuery, filteredRoot).forEach((capturedNode) => {
                    scanResultList.push(new ScanResult(ruleIteration, ruleIteration.ResultType, capturedNode));
                });
            } catch (treeSitterError: unknown) {
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                console.error(`A tree-sitter query error occurred: ${treeSitterError}`);
            }
        }
        return scanResultList;
    }
}

export const sourceCodeToScan: string = `/**
 * @description
 */

@isTest
global with sharing class Test extends BaseRepo implements Queueable, Finalizer{

	public Integer x = 0;

    Blob hardCodedIV = Blob.valueOf('Hardcoded IV 123');
    Blob hardCodedKey = Blob.valueOf('0000000000000000');
    Blob data = Blob.valueOf('Data to be encrypted');
    Blob encrypted = Crypto.encrypt('AES128', hardCodedKey, hardCodedIV, data);

   public integer prop {
      get { return prop; }
      set { prop = value; }
   }

   /**
    * @description
    */
   public Test(){
   		[SELECT Name FROM Account WHERE Name = 'foo'];
        update a;
        Database.queryWithBinds('something');
   }

	/**
     * @de
     */
	@isTest
    public static void run(Integer arg1, Integer arg2){
    	System.runAs(foo){
        	Integer i = 0;
        }

        Blob hardCodedIV = Blob.valueOf('Hardcoded IV 123');
        Blob hardCodedKey = Blob.valueOf('0000000000000000');
        Blob data = Blob.valueOf('Data to be encrypted');
        Blob encrypted = Crypto.encrypt('AES128', hardCodedKey, hardCodedIV, data);
        System.debug('xdddd');
    	req.setHeader('Authorization', authorizationHeader);
        Integer i = 0;
        This.setEndpoint('https://');
        This.run('http://');
        i = 'https:';
        String x = ApexPage.getCurrentPage().getParameters.get('url_param');
        Database.query('SELECT Id FROM Account' + t1);
        i = 'http:';
        for(Integer a = 0; a < 10; a++){
            for(Integer a = 0; a < 10; a++){
                i++;
                for(Integer a = 0; a < 10; a++)
                    i++;

            }
        }
        try{
        	System.debug('Oh noes!');
        }
        catch(Exception ex){
        }
        try{
        	while(true){
            }
            Account a = new Account(name = 'Acme1');
            Account a = [SELECT Name FROM Account WITH USER_MODE LIMIT 4];
            Database.query('');
            a.addError();
            update a;
            a = null;
            Database.SaveResult[] lsr = Database.insert(
                new Account[]{a, new Account(Name = 'Acme2')},
                false
            );
        }
        catch(Exception  someDbError){
        	x = u;
        }
        finally{
        	y = z;
        }
        if(x == y){

        }
        String message = '';
        Integer a, b, c;
        Integer d, e, f;
        if( a == b){
        }
        if( b == c )
        	c = b;
        Integer g;
        foo.setEndpoint(message);
        foo.setEndpoint('http://dkkdd');
        Assert.areEqual(false,false,message + foo);
        Assert.areEqual(false,false,message);
        Assert.areEqual(false,false,'ddd');
        Assert.areEqual(false,false);
        String unescapedstring = ApexPage.getCurrentPage().ApexPage.get('url_param');
        if(x==y)
        	if(x==y)
            	if(x==y)
    }
    public void ohe(Integer a, Integer b, Integer c, Integer d){
    }
    public void fooBar(){}

    public String r = '';
}`;