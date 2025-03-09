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
@name('ForLoopsMustUseBraces')
@category('codestyle')
@context('scan')
@suggestion('')
@message("Avoid using 'for' statements without curly braces")
@ruleSeverity(3)
@treeQuery('(for_statement)@for')
export class ForLoopsMustUseBraces extends ScanRule {}