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



@name('IfStmtsMustUseBraces')
@category('codestyle')
@context('scan')
@message('Avoid using if statements without curly braces')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(if_statement consequence:(block) @block (#match? @block "\\{*\\}"))')
export class IfStmtsMustUseBraces extends ScanRule {}
