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
@name('IfElseStmtsMustUseBraces')
@category('codestyle')
@context('scan')
@message("Avoid using 'if...else' statements without curly braces")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class IfElseStmtsMustUseBraces extends ScanRule {}
