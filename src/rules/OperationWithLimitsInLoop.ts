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



@name('OperationWithLimitsInLoop')
@category('performance')
@context('scan')
@suggestion('')
@message('Avoid operations in loops that may hit governor limits')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class OperationWithLimitsInLoop extends ScanRule {}
