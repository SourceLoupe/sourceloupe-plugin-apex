import {    ScanRule,
    context,
    message,
    name,
    RuleSeverity,
    ruleSeverity,
    treeQuery,
    suggestion,
    category,
} from 'cayce-types';
@name('AvoidDebugStatements')
@category('performance')
@context('scan')
@message('Avoid debug statements since they impact on performance')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(method_invocation) @method')
export class AvoidDebugStatements extends  ScanRule {}