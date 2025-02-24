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
@name('ApexCSRF')
@category('errorprone')
@context('scan')
@suggestion('')
@message('Avoid making DML operations in Apex class constructor')
@priority(3)
@query(
    '(constructor_body (expression_statement (query_expression) @soql))(constructor_body (expression_statement (dml_expression) @dml))(constructor_body (expression_statement (method_invocation) @method (#match? @method "Database.query|Database.queryWithBinds")))@target'
)
@regex('')
export class ApexCSRF extends ScanRule {}
