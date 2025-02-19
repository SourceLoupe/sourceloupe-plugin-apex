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
} from 'sourceloupe-types';
// import Parser from "tree-sitter";
// import * as TreeSitter from "tree-sitter";

@name('WhileLoopsMustUseBraces')
@category('codestyle')
@context('scan')
@message("Avoid using 'while' statements without curly braces")
@suggestion('')
@priority(3)
@query('(parser_output)@p')
@regex('')
export class WhileLoopsMustUseBraces extends ScanRule {}
