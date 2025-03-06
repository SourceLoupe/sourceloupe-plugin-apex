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
// import Parser from "tree-sitter";
// import * as TreeSitter from "tree-sitter";
// import { NamingRule } from "./NamingRule";
@name('OperationWithHighCostInLoop')
@category('performance')
@context('scan')
@suggestion('')
@message('Avoid operations in loops that may impact performances')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class OperationWithHighCostInLoop extends ScanRule {}
