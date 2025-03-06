import {
    category,
    context,
    message,
    name,
    ruleSeverity,
treeQuery,
    
    ScanResult,
    ScanRule,
    suggestion,
} from 'cayce-types';
import Parser from 'tree-sitter';
// import * as TreeSitter from "tree-sitter";

@name('UnusedMethod')
@category('design')
@context('scan')
@message('Unused methods make understanding code harder')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(method_declaration name: (identifier) @methodName)@target')
export class UnusedMethod extends ScanRule {}

