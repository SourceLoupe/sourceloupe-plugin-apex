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
@name('AvoidGlobalModifier')
@category('bestpractices')
@context('scan')
@message('Avoid using global modifier')
@suggestion('')
@priority(3)
@query('(global)@mod')
@regex('')
export class AvoidGlobalModifier extends ScanRule {
    validateNode(_node: Parser.SyntaxNode): ScanResult[] {
        return [new ScanResult(this, ResultType.VIOLATION)];
    }
    //TODO: Log Completed
}
