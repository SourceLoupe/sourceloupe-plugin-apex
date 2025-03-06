import {
    category,
    context,
    message,
    name,
    ruleSeverity,
treeQuery,
    
    ScanResult,
    ScanRule,
    suggestion,
} from 'cayce-types';
import Parser from 'tree-sitter';

@name('ApexCSRF')
@category('errorprone')
@context('scan')
@suggestion('')
@message('Avoid making DML operations in Apex class constructor')
@ruleSeverity(3)
@treeQuery(
    '(constructor_body (expression_statement (query_expression) @soql))(constructor_body (expression_statement (dml_expression) @dml))(constructor_body (expression_statement (method_invocation) @method (#match? @method "Database.query|Database.queryWithBinds")))@target'
)
export class ApexCSRF extends ScanRule {}
