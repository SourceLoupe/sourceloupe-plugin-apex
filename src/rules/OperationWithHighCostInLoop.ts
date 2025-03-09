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



@name('OperationWithHighCostInLoop')
@category('performance')
@context('scan')
@suggestion('')
@message('Avoid operations in loops that may impact performances')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class OperationWithHighCostInLoop extends ScanRule {}
