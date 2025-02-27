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

@name('ApexUnitTestMethodShouldHaveIsTestAnnotation')
@category('bestpractices')
@context('scan')
@message('Apex test methods should have @isTest annotation.')
@suggestion('')
@priority(3)
@query('(modifiers(modifier(testMethod)@mod))')
@regex('')
//TODO: Log Completed
export class ApexUnitTestMethodShouldHaveIsTestAnnotation extends ScanRule {
    validateNode(_node: Parser.SyntaxNode): ScanResult[] {
        return [new ScanResult(this, ResultType.VIOLATION)];
    }
}
