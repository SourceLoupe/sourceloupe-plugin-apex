import { ScanRule, context, message, name, priority, query, regex, suggestion, category } from 'cayce-types';

@name('ApexCRUDViolation')
@category('security')
@context('scan')
@message('Validate CRUD permission before SOQL/DML operation or enforce user mode')
@suggestion('')
@priority(3)
@query('((soql_query_body) @soql (#not-match? @soql "USER_MODE")) @target')
@regex('')
export class ApexCRUDViolation extends ScanRule {}
