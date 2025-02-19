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

@name('CyclomaticComplexity')
@category('design')
@context('scan')
@message("The {0} ''{1}'' has a{2} cyclomatic complexity of {3}.")
@suggestion('')
@priority(3)
@query('(parser_output)@p')
@regex('')
export class CyclomaticComplexity extends ScanRule {
    validateNode(node: Parser.SyntaxNode): ScanResult[] {
        const rating: number = this.calculateCyclomaticComplexity(node);
        if (rating > 20) {
            return [new ScanResult(this, ResultType.VIOLATION)];
        }
        return [];
    }

    calculateCyclomaticComplexity(node: Parser.SyntaxNode): number {
        let complexity = 1; // Start with one for the entry point of the function

        function traverse(node: Parser.SyntaxNode) {
            if (node.type === 'if_statement') {
                complexity += 1;
            } else if (node.type === 'for_statement' || node.type === 'while_statement') {
                complexity += 1;
            } else if (node.type === 'try_statement') {
                complexity += 2; // One for the try block, one for each catch block
            }

            node.children.forEach(traverse);
        }

        traverse(node);

        return complexity;
    }
}
