import {
    ScanResult,
    ScanRule,
    context,
    message,
    name,
    priority,
    query,
    regex,
    suggestion,
    category,
} from 'sourceloupe-types';
import Parser from 'tree-sitter';
import { ResultType } from 'sourceloupe-types';

@name('ApexCRUDViolation')
@category('security')
@context('scan')
@message('Validate CRUD permission before SOQL/DML operation or enforce user mode')
@suggestion('')
@priority(3)
@query('(soql_query_body) @body (#not-match @body "WITH USER_MODE")')
@regex('')
export class ApexCRUDViolation extends ScanRule {
    validateNode(_node: Parser.SyntaxNode): ScanResult[] {
        return [new ScanResult(this, ResultType.VIOLATION)];
    }
}
