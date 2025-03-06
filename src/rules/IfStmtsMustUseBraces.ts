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


// import { NamingRule } from "./NamingRule";
@name('IfStmtsMustUseBraces')
@category('codestyle')
@context('scan')
@message('Avoid using if statements without curly braces')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(if_statement consequence:(block) @block (#match? @block "\\{*\\}"))')
export class IfStmtsMustUseBraces extends ScanRule {}
