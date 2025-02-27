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
    suggestion,
} from 'cayce-types';
import Parser from 'tree-sitter';
//TODO: Log Completed

@name('EmptyIfStmt')
@category('errorprone')
@context('scan')
@message("Avoid empty 'if' statements")
@suggestion('')
@priority(3)
@query('(if_statement consequence: (block)@block)')
@regex('')
export class EmptyIfStmt extends ScanRule {
    validateNode(node: Parser.SyntaxNode): ScanResult[] {
        if (node.namedChildCount == 0) {
            return [new ScanResult(this, ResultType.VIOLATION)];
        }
        return [];
    }
}
