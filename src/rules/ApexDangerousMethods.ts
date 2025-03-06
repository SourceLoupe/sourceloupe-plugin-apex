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
// import * as TreeSitter from 'tree-sitter';
// import { NamingRule } from './NamingRule';

@name('ApexDangerousMethods')
@category('security')
@context('scan')
@message('Calling potentially dangerous method')
@suggestion('')
@ruleSeverity(3)
@treeQuery(
    '(method_invocation object:(identifier) @object (#match? @object "Configuration") name:(identifier) @name (#match? @name "disableTriggerCRUDSecurity"))@target'
)
export class ApexDangerousMethods extends ScanRule {}
