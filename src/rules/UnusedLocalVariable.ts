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
@name('UnusedLocalVariable')
@category('bestpractices')
@context('scan')
@message("Variable ''{0}'' defined but not used")
@suggestion('')
@ruleSeverity(1)
@treeQuery('(parser_output)@p')
export class UnusedLocalVariable extends ScanRule {
}
