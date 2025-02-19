
import {
    category,
    context,
    message,
    name,
    priority,
    query,
    regex,
    ResultType,
    ScanResult,
    ScanRule,
    suggestion
} from 'sourceloupe-types'
import Parser from "tree-sitter";
import * as TreeSitter from "tree-sitter";
import {NamingRule} from "./NamingRule";

@name("IfStmtsMustUseBraces")
@category("codestyle")
@context("scan")
@message("Avoid using if statements without curly braces")
@suggestion("")
@priority(3)
@query('(if_statement consequence:(block) @block (#match? @block "\\{*\\}"))')
@regex("")
export class IfStmtsMustUseBraces extends ScanRule {
// No parsable methods found
}