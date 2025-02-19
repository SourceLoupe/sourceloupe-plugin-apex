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
@query('(method_invocation name: (identifier) @invoke) (method_declaration name: (identifier) @declared)')
@regex('')
export class UnusedMethod extends ScanRule {
    validateNodes(nodes: Parser.SyntaxNode[]): ScanResult[] {
        const results: ScanResult[] = [];
        const methodNames: string[] = [];
        const invokedMethods: string[] = [];
        nodes.forEach((nodeIteration) => {
            if (nodeIteration.parent?.grammarType == 'method_invocation') {
                invokedMethods.push(nodeIteration.text);
            } else {
                methodNames.push(nodeIteration.text);
            }
        });
        methodNames.forEach((methodName) => {
            if (!invokedMethods.includes(methodName)) {
                results.push(new ScanResult(this, ResultType.VIOLATION));
            }
        });
        return results;
    }
}
