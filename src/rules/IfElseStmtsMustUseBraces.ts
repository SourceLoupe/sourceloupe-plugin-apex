import {
    category,
    context,
    message,
    name,
    priority,
    query,
    regex,
    // ResultType,
    // ScanResult,
    ScanRule,
    suggestion,
} from 'cayce-types';
// import Parser from "tree-sitter";
// import * as TreeSitter from "tree-sitter";

@name('IfElseStmtsMustUseBraces')
@category('codestyle')
@context('scan')
@message("Avoid using 'if...else' statements without curly braces")
@suggestion('')
@priority(3)
@query('(parser_output)@p')
@regex('')
export class IfElseStmtsMustUseBraces extends ScanRule {
    // No parsable methods found
}
