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

@name("CognitiveComplexity")
@category("design")
@context("scan")
@message("The {0} ''{1}'' has a{2} cognitive complexity of {3}.")
@suggestion("")
@priority(3)
@query("(parser_output)@p")
@regex("")
export class CognitiveComplexity extends ScanRule {

    validateNode(node: Parser.SyntaxNode): ScanResult[] {
        const rating: number = this.calculateCognitiveComplexity(node);
        if(rating > 20){
            return [new ScanResult(this,ResultType.VIOLATION)];
        }
        return [];
    }

    calculateCognitiveComplexity(startFromNode: Parser.SyntaxNode): number {
        let complexity = 0;

        function traverse(node: any) {
            if (node.type === 'if_statement') {
                complexity += 1;
            } else if (node.type === 'for_statement' || node.type === 'while_statement') {
                complexity += 1;
            } else if (node.type === 'try_statement') {
                complexity += 2; // One for the try block, one for each catch block
            } else if (node.type === 'switch_statement') {
                complexity += 1;
            } else if (node.type === 'case_clause' || node.type === 'default_clause') {
                complexity += 1;
            }

            node.children.forEach(traverse);
        }

        traverse(startFromNode);

        return complexity;
    }
}