import {
    category,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,
    ScanRule,
    suggestion,
} from 'cayce-types';


// import { NamingRule } from "./NamingRule";
@name('OperationWithLimitsInLoop')
@category('performance')
@context('scan')
@suggestion('')
@message('Avoid operations in loops that may hit governor limits')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class OperationWithLimitsInLoop extends ScanRule {}
