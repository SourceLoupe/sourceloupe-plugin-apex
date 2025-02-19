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

@name("MethodHeaderComment")
@category("bestpractices")
@context("scan")
@message("Methods must have a header comment with a @description tag")
@suggestion("")
@priority(1)
@query('(method_declaration) @method')
@regex("")
export class MethodHeaderComment extends ScanRule {
    validateNode(node: Parser.SyntaxNode): ScanResult[] {
        const beforeMethodNode: Parser.SyntaxNode = node.previousNamedSibling ?? node;
        if(beforeMethodNode.grammarType == 'block_comment' &&
            beforeMethodNode.text.includes('description')){
            return [];
        }
        return [new ScanResult(this,ResultType.VIOLATION)];
    }
}