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
@name('ApexXSSFromURLParam')
@category('security')
@context('scan')
@message('Apex classes should escape/sanitize Strings obtained from URL parameters')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class ApexXSSFromURLParam extends ScanRule {}
