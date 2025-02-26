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

@name('OneDeclarationPerLine')
@category('codestyle')
@context('scan')
@message('Use one statement for each line, it enhances code readability.')
@suggestion('')
@priority(1)
@query('((variable_declarator) @one (variable_declarator) @two)')
@regex('')
export class OneDeclarationPerLine extends ScanRule {
    validateNodes(_nodes: Parser.SyntaxNode[]): ScanResult[] {
        return [new ScanResult(this, ResultType.VIOLATION)];
    }
}
