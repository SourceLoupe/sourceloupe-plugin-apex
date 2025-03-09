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
@name('ApexXSSFromEscapeFalse')
@category('security')
@context('scan')
@message('Apex classes should escape Strings in error messages')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class ApexXSSFromEscapeFalse extends ScanRule {}
