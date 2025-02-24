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
} from 'sourceloupe-types';
import Parser from 'tree-sitter';
// import * as TreeSitter from "tree-sitter";

@name('UnusedMethod')
@category('design')
@context('scan')
@message('Unused methods make understanding code harder')
@suggestion('')
@priority(3)
@query('(method_declaration name: (identifier) @methodName)@target')
@regex('')
export class UnusedMethod extends ScanRule {
    validateNode(_node: Parser.SyntaxNode): ScanResult[] {
        const results: ScanResult[] = [];
        const methodNames: string[] = [];
        const invokedMethods: string[] = [];
        if (_node.parent?.grammarType == 'method_invocation') {
            invokedMethods.push(_node.text);
        } else {
            methodNames.push(_node.text);
        }
        methodNames.forEach((methodName) => {
            if (!invokedMethods.includes(methodName)) {
                results.push(new ScanResult(this, ResultType.VIOLATION));
            }
        });
        return results;
    }
}
