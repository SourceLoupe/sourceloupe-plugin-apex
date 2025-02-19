"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QueueableWithoutFinalizer_1 = require("./rules/QueueableWithoutFinalizer");
const ApexSharingViolations_1 = require("./rules/ApexSharingViolations");
const tree_sitter_1 = __importDefault(require("tree-sitter"));
const tree_sitter_2 = __importDefault(require("tree-sitter"));
const tree_sitter_sfapex_1 = __importDefault(require("tree-sitter-sfapex"));
const ApexSOQLInjection_1 = require("./rules/ApexSOQLInjection");
const ApexSuggestUsingNamedCred_1 = require("./rules/ApexSuggestUsingNamedCred");
const ApexUnitTestClassShouldHaveRunAs_1 = require("./rules/ApexUnitTestClassShouldHaveRunAs");
const ApexUnitTestMethodShouldHaveIsTestAnnotation_1 = require("./rules/ApexUnitTestMethodShouldHaveIsTestAnnotation");
const ApexUnitTestShouldNotUseSeeAllDataTrue_1 = require("./rules/ApexUnitTestShouldNotUseSeeAllDataTrue");
const AvoidDeeplyNestedIfStmts_1 = require("./rules/AvoidDeeplyNestedIfStmts");
const AvoidGlobalModifier_1 = require("./rules/AvoidGlobalModifier");
const ClassNamingConventions_1 = require("./rules/ClassNamingConventions");
const EmptyTryOrFinallyBlock_1 = require("./rules/EmptyTryOrFinallyBlock");
const ExcessiveClassLength_1 = require("./rules/ExcessiveClassLength");
const ExcessivePublicCount_1 = require("./rules/ExcessivePublicCount");
const LocalVariableNamingConventions_1 = require("./rules/LocalVariableNamingConventions");
const MethodNamingConventions_1 = require("./rules/MethodNamingConventions");
const PropertyNamingConventions_1 = require("./rules/PropertyNamingConventions");
const TooManyFields_1 = require("./rules/TooManyFields");
const testString = `
/**
 * @description
 */

@isTest
public class Test implements Queueable, Finalizer{

public Integer x = 0;


/**
     * @de
     */
@isTest
    public static void run(){
    System.runAs(foo){
        Integer i = 0;
        }
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
        }
        catch(Exception  someDbError){
            System.debug('It all broke');
        }
        finally{
        }
        String message = '';
        Integer a, b, c;
        Integer d, e, f;
        if( a == b){
        }
        if( b == c )
            c = b;
        Integer g;
        if( a == b){
            System.debug('It all broke');
        }
        Assert.areEqual(false,false,message + foo);
        Assert.areEqual(false,false,message);
        Assert.areEqual(false,false,'ddd');
        Assert.areEqual(false,false);
    }
    public void ohe(Integer a, Integer b, Integer c, Integer d){
    }
    public void fooBar(){}
    
    public String r = '';
}
`;
// const parser = new Parser();
// parser.setLanguage(TsSfApex.apex);
// const tree = parser.parse(testString);
// const query: TreeSitter.Query = new TreeSitter.Query(TsSfApex.apex, ruleReuse.Query);
// const globalCaptures: Query.QueryCapture[] = query.captures(tree.rootNode);
//
// const queryString = `(try_statement (block)@block)`;
// const tree = parser.parse(testString);
// const query: TreeSitter.Query = new TreeSitter.Query(TsSfApex.apex, queryString);
// const globalCaptures: Query.QueryCapture[] = query.captures(tree.rootNode);
// const matches: Query.QueryMatch[] = query.matches(tree.rootNode);
//
// for(let match of matches){
//
// }
//
// for(let capture of globalCaptures){
//     console.log(`${capture.node.grammarType}${capture.node.namedChildCount}`);
//     if(capture.node.namedChildCount == 0){
//         console.log("helo");
//     }
// }
//     cap.node.descendantsOfType("argument_list").forEach((argument) => {
//         console.log(argument.parent?);
//     })
//     }
// }
function runRule(reuse) {
    const parser = new tree_sitter_2.default();
    parser.setLanguage(tree_sitter_sfapex_1.default.apex);
    const tree = parser.parse(testString);
    let query;
    let globalCaptures;
    query = new tree_sitter_1.default.Query(tree_sitter_sfapex_1.default.apex, reuse.Query);
    globalCaptures = query.captures(tree.rootNode);
    console.log(globalCaptures);
    const nodes = globalCaptures.map((captureInstance) => {
        return captureInstance.node;
    });
    console.log(nodes);
    nodes.forEach(node => {
        reuse.validateNode(node).forEach(node => {
            console.log(node.Fragment);
        });
    });
}
//
// let ruleReuse: ScanRule = new ApexAssertionsShouldIncludeMessage(testString);
// runRule(ruleReuse);
let r = new ApexSharingViolations_1.ApexSharingViolations(testString);
runRule(r);
r = new ApexSOQLInjection_1.ApexSOQLInjection(testString);
runRule(r);
r = new ApexSuggestUsingNamedCred_1.ApexSuggestUsingNamedCred(testString);
runRule(r);
r = new ApexUnitTestClassShouldHaveRunAs_1.ApexUnitTestClassShouldHaveRunAs(testString);
runRule(r);
r = new ApexUnitTestMethodShouldHaveIsTestAnnotation_1.ApexUnitTestMethodShouldHaveIsTestAnnotation(testString);
runRule(r);
r = new ApexUnitTestShouldNotUseSeeAllDataTrue_1.ApexUnitTestShouldNotUseSeeAllDataTrue(testString);
runRule(r);
// r = new AvoidDebugStatements(testString);
// runRule(r);
r = new AvoidDeeplyNestedIfStmts_1.AvoidDeeplyNestedIfStmts(testString);
runRule(r);
r = new AvoidGlobalModifier_1.AvoidGlobalModifier(testString);
runRule(r);
r = new ClassNamingConventions_1.ClassNamingConventions(testString);
runRule(r);
r = new EmptyTryOrFinallyBlock_1.EmptyTryOrFinallyBlock(testString);
runRule(r);
r = new ExcessiveClassLength_1.ExcessiveClassLength(testString);
runRule(r);
r = new ExcessivePublicCount_1.ExcessivePublicCount(testString);
runRule(r);
r = new LocalVariableNamingConventions_1.LocalVariableNamingConventions(testString);
runRule(r);
r = new MethodNamingConventions_1.MethodNamingConventions(testString);
runRule(r);
r = new PropertyNamingConventions_1.PropertyNamingConventions(testString);
runRule(r);
r = new QueueableWithoutFinalizer_1.QueueableWithoutFinalizer(testString);
runRule(r);
r = new TooManyFields_1.TooManyFields(testString);
runRule(r);
