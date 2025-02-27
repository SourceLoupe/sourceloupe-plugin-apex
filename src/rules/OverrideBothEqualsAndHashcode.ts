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

@name('OverrideBothEqualsAndHashcode')
@category('errorprone')
@context('scan')
@message('Ensure you override both equals() and hashCode()')
@suggestion('')
@priority(3)
@query('(parser_output)@p')
@regex('')
export class OverrideBothEqualsAndHashcode extends ScanRule {}
