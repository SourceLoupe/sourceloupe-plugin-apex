import {
    category,
    context,
    message,
    name,
    priority,
    query,
    regex,
    ResultType,
    ScanResult,
    ScanRule,
    suggestion
} from 'sourceloupe-types'
import Parser from "tree-sitter";

@name("UnusedLocalVariable")
@category("bestpractices")
@context("scan")
@message("Variable ''{0}'' defined but not used")
@suggestion("")
@priority(1)
@query("(parser_output)@p")
@regex("")
export class UnusedLocalVariable extends ScanRule {
    validateNodes(nodes: Parser.SyntaxNode[]): ScanResult[] {
        const results: ScanResult[] = [];
        const declareList: Parser.SyntaxNode[] = [];
        const usageList: string[] = [];

        nodes.forEach(nodeIteration=>{
            if(nodeIteration.parent?.grammarType == "variable_declarator"){
                declareList.push(nodeIteration);
            }
            else{
                usageList.push(nodeIteration.text);
            }
        });
        declareList.forEach(nodeIteration=>{

            if(!usageList.includes(nodeIteration.text)){
                results.push(new ScanResult(this,ResultType.VIOLATION));
            }
        })
        return results;
    }
}