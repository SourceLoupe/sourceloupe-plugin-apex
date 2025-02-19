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
import SyntaxNode from "tree-sitter";
import Parser from "tree-sitter";
// TODO: Progress
@name("TooManyFields")
@category("design")
@context("scan")
@message("Too many fields")
@suggestion("")
@priority(3)
@query("(class_body(field_declaration) @1)")
@regex("")
export class TooManyFields extends ScanRule {
    validateNodes(_nodes: Parser.SyntaxNode[]):ScanResult[] {
        const result:ScanResult[] = [];
        if(_nodes.length > 20){
            result.push(new ScanResult(this,ResultType.VIOLATION));
        }
        return result;
    }
}