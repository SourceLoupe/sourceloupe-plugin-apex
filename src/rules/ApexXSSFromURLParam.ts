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

@name("ApexXSSFromURLParam")
@category("security")
@context("scan")
@message("Apex classes should escape/sanitize Strings obtained from URL parameters")
@suggestion("")
@priority(3)
@query("(method_invocation) @nethod")
@regex("")
export class ApexXSSFromURLParam extends ScanRule {
    validateNode(node: Parser.SyntaxNode): ScanResult[] {
        if (node.text.startsWith('ApexPage.getCurrentPage().ApexPage.get')) {
            node.namedChildren.forEach(childIteration => {
                if (childIteration.namedChildren.length == 1 &&
                    childIteration.text == 'get' &&
                    childIteration.namedChildren[0].grammarType == 'string_literal') {
                        return [new ScanResult(this,ResultType.VIOLATION];

                }
            })
        }
        return [];
    }
}