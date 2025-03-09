import {
    category,
    context,
    message,
    name,
    RuleSeverity,
    ruleSeverity,
    treeQuery,
    ScanRule,
    suggestion,
} from 'cayce-types';
@name('ApexCSRF')
@category('errorprone')
@context('scan')
@suggestion('Constructors are generally best reserved for simple initialization, so heavier logic that accesses a managed resource (such as a data store) are best left to their own discreet methods where their idiosyncrasies can be better managed.')
@message('Avoid making DML operations in Apex class constructor')
@ruleSeverity(3)
@treeQuery(
    '(constructor_body (expression_statement (query_expression) @soql))(constructor_body (expression_statement (dml_expression) @dml))(constructor_body (expression_statement (method_invocation) @method (#match? @method "Database.query|Database.queryWithBinds")))@target'
)
export class ApexCSRF extends ScanRule {}
