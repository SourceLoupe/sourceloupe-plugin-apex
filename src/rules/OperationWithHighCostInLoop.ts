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
// import { NamingRule } from "./NamingRule";
@name('OperationWithHighCostInLoop')
@category('performance')
@context('scan')
@suggestion('')
@message('Avoid operations in loops that may impact performances')
@priority(3)
@query('(parser_output)@p')
@regex('')
export class OperationWithHighCostInLoop extends ScanRule {}
