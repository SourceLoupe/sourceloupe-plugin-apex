import {
    category,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,
    // 
    // ScanResult,
    ScanRule,
    suggestion,
} from 'cayce-types';


// import { NamingRule } from "./NamingRule";
@name('InaccessibleAuraEnabledGetter')
@category('errorprone')
@context('scan')
@message('AuraEnabled getter must be public or global if is referenced in Lightning components')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class InaccessibleAuraEnabledGetter extends ScanRule {}
