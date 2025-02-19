
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
import * as TreeSitter from "tree-sitter";
@name("EagerlyLoadedDescribeSObjectResult")
@category("performance")
@context("scan")
@message("DescribeSObjectResult could be being loaded eagerly with all child relationships.")
@suggestion("")
@priority(3)
@query('(method_invocation object:(identifier) @object (#match? @object "DescribeSObjectResult")')
@regex("")
export class EagerlyLoadedDescribeSObjectResult extends ScanRule {
    validateNode(node: Parser.SyntaxNode): ScanResult[] {
        return [new ScanResult(this,ResultType.VIOLATION)];
    }
}