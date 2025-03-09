import {
ScanRule,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,
    suggestion,
    category,
} from 'cayce-types';
@name('ApexCRUDViolation')
@category('security')
@context('scan')
@message('Validate CRUD permission before SOQL/DML operation or enforce user mode')
@suggestion('SOQL/DML statements that do not specify "USER_MODE" are not secure by default, so unless there is some reasonable justification consider using WITH USER_MODE in your statements.')
@ruleSeverity(3)
@treeQuery('((soql_query_body) @soql (#not-match? @soql "USER_MODE")) @target')
export class ApexCRUDViolation extends ScanRule {}
