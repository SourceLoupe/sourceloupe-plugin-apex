// foo
import Parser, { QueryCapture } from "tree-sitter";
import Query from 'tree-sitter';
import SyntaxNode from "tree-sitter";
import * as TreeSitter from "tree-sitter";
import TsSfApex from "tree-sitter-sfapex";
const testString = `
/**
 * @description foo
 */
/**
 * @description
 */


public with sharing class Test implements Queueable, Finalizer{

public Integer x = 0;


@isTest(seeAllData = true)
    public static void run(){
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
        \tSystem.debug('Oh noes!');
        }
        catch(Exception ex){
        }
        try{
            Account a = new Account(name = 'Acme1');
            a = null;
            Database.SaveResult[] lsr = Database.insert(
                new Account[]{a, new Account(Name = 'Acme2')},
                false
            );
        }
        catch(Exception  someDbError){
            System.debug('It all broke');
        }
        String message = '';
        Integer a, b, c;
        Integer d, e, f;
        if( a == b){
            b = a;
        }
        if( b == c )
            c = b;
        Integer g;
        Assert.areEqual(false,false,message + foo);
        Assert.areEqual(false,false,message);
        Assert.areEqual(false,false,'ddd');
        Assert.areEqual(false,false);
    }
    public void ohe(Integer a, Integer b, Integer c, Integer d){
    }
    public void fooBar(){}
    
    public String r = '';
}`;

function dump(queryString: string): string {
    // Use dump as a mechanism to allow for ad-hoc ts queries?
    const result: Array<string> = [];
    if (queryString === '') {
        queryString = `(class_declaration @decl)`;
    }
    const parser = new Parser();
    parser.setLanguage(TsSfApex.apex);
    const tree = parser.parse(testString);
    const query: TreeSitter.Query = new TreeSitter.Query(TsSfApex.apex, queryString);
    const globalCaptures: QueryCapture[] = query.captures(tree.rootNode);
    globalCaptures.forEach((capture) => {
        result.push(`@${capture.name}=${capture.node.text}`);
    });
    return JSON.stringify(result);
}

export function getMatches(source: string, expression: string) {
    const parser = new Parser();
    parser.setLanguage(TsSfApex.apex);
    const tree: Parser.Tree = parser.parse(source);
    const query: TreeSitter.Query = new TreeSitter.Query(TsSfApex.apex, expression);
    const resultingMatches: Parser.QueryMatch[] = query.matches(tree.rootNode);
    return resultingMatches;
}


export function getCaptures(source: string, expression: string): Parser.QueryCapture[] {
    const parser = new Parser();
    parser.setLanguage(TsSfApex.apex);
    const tree: Parser.Tree = parser.parse(source);
    const query: TreeSitter.Query = new TreeSitter.Query(TsSfApex.apex, expression);
    const resultingCaptures: QueryCapture[] = query.captures(tree.rootNode);
    return resultingCaptures;
}

export function getNodes(source: string, expression: string): Parser.SyntaxNode[] {
    const captures:Parser.QueryCapture[] = getCaptures(source, expression);
    const resultNodes: Parser.SyntaxNode[] = captures.map(capture=>capture.node as Parser.SyntaxNode);
    return resultNodes;
}


const forNest = `(block(for_statement(block(for_statement(block(for_statement)@for1)@block2)@for3)@for4)@for5)`; //POS
const forNoBlock = `(block(for_statement(expression_statement)@a)@b)`; //POS
const ifNest = `(block(if_statement(block(if_statement(block(if_statement)@for1)@block2)@for3)@for4)@for5)`; //POS
const ifNoBlock = `(block(if_statement(expression_statement)@a)@b)`; //POS
const findAssert = `((expression_statement)@1 (#match? @1 "Assert"))@2`; // POS
const multiDeclare = `(local_variable_declaration(variable_declarator)(variable_declarator)@a)`; // POS
const paramCount = '(formal_parameters(formal_parameter)(formal_parameter)(formal_parameter)(formal_parameter)@found)';
const isTest = `(class_declaration(modifiers(annotation)@a)(#eq? @a "@isTest"))`;
const oldTest = `(method_declaration(modifiers(modifier)@a)(#eq? @a "testMethod"))`;
const seeAllData = `((annotation_key_value key: (identifier) @key (assignment_operator) @operator value: (boolean) @value)(#eq? @key "seeAllData")(#eq? @operator "=") (#eq? @value "true"))@all`;
const isglobal = `(modifier(global))@1`;
const systemDebug = `((method_invocation object:(identifier) @object name: (identifier) @name) (#eq? @object "System") (#eq? @name "debug"))@all`;
const finalizere = `(interfaces(type_list(type_identifier))@e)@a (#eq? @e "Queueable, Finalizer")`;
const variableDeclarations = `((variable_declarator(identifier)@var))`;
const className = `((class_declaration name:(identifier)@i)(#match? @i ".*"))`;
const src: string = testString;
const fields = `((field_declaration)@a)`;
const localName = `(local_variable_declaration(variable_declarator(identifier)@b))`;
const fieldName = `(field_declaration(variable_declarator(identifier)@b))`;
const formalParam = `(formal_parameter(identifier)@b)`;
const methodName = `(method_declaration(identifier)@b)`;
const methodNameFilter = `(method_declaration(identifier)@b)(#match? @b "[a-z]")`;
const fieldCount = `(class_body(field_declaration) @1)`;
for(let m of getNodes(src,fieldCount)){
    console.log(m.text);
}
