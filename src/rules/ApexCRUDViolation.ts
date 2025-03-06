import {
    ScanResult,
    ScanRule,
    context,
    message,
    name,
    ruleSeverity,
treeQuery,
    suggestion,
    category,
} from 'cayce-types';
import Parser from 'tree-sitter';
import { RuleSeverity} from 'cayce-types';
import TreeSitter from 'tree-sitter';

@name('ApexCRUDViolation')
@category('security')
@context('scan')
@message('Validate CRUD permission before SOQL/DML operation or enforce user mode')
@suggestion('')
@ruleSeverity(3)
@treeQuery('((soql_query_body) @soql (#not-match? @soql "USER_MODE")) @target')
export class ApexCRUDViolation extends ScanRule {}
