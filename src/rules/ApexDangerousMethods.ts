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
@name('ApexDangerousMethods')
@category('security')
@context('scan')
@message('Calling potentially dangerous method')
@suggestion('While it might solve a short-term problem, disabling CRUD security on a trigger can create serious long-term issues. Consider investigating the reason for this exception and find a solution that satisfied your use case and follows secrurity best-practices.')
@ruleSeverity(3)
@treeQuery(
    '(method_invocation object:(identifier) @object (#match? @object "Configuration") name:(identifier) @name (#match? @name "disableTriggerCRUDSecurity"))@target'
)
export class ApexDangerousMethods extends ScanRule {}
