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

@name("ForLoopsMustUseBraces")
@category("codestyle")
@context("scan")
@suggestion("")
@message("Avoid using 'for' statements without curly braces")
@priority(3)
@query("(for_statement)@for")
@regex("")
export class ForLoopsMustUseBraces extends ScanRule {
    validateNode(node: Parser.SyntaxNode): ScanResult[] {
        const results: ScanResult[] = [];
        let foundBlock:boolean = false;
        node.namedChildren.forEach(childIteration=>{
            if(childIteration.grammarType === "block"){
                foundBlock = true;
            }
        });
        if(!foundBlock){
            results.push(new ScanResult(this,ResultType.VIOLATION));
        }
        return results;
    }
}