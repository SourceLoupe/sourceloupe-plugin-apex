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
@name('WhileLoopsMustUseBraces')
@category('codestyle')
@context('scan')
@message("Avoid using 'while' statements without curly braces")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class WhileLoopsMustUseBraces extends ScanRule {}
