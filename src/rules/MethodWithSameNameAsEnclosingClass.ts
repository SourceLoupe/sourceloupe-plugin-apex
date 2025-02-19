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

@name('MethodWithSameNameAsEnclosingClass')
@category('errorprone')
@context('scan')
@message('Classes should not have non-constructor methods with the same name as the class')
@suggestion('')
@priority(3)
@query('(identifier)@name')
@regex('')
export class MethodWithSameNameAsEnclosingClass extends ScanRule {
    validateNodes(nodes: Parser.SyntaxNode[]): ScanResult[] {
        const results: ScanResult[] = [];
        const classNames: string[] = [];
        const methodNodes: Parser.SyntaxNode[] = [];
        nodes.forEach((nodeIteration) => {
            if (nodeIteration.parent?.grammarType === 'class_declaration') {
                classNames.push(nodeIteration.text);
            }
            if (nodeIteration.parent?.grammarType === 'method_declaration') {
                methodNodes.push(nodeIteration);
            }
        });

        methodNodes.forEach((nodeIteration) => {
            if (classNames.indexOf(nodeIteration.text) < 0) {
                results.push(new ScanResult(this, ResultType.VIOLATION));
            }
        });
        return results;
    }
}
