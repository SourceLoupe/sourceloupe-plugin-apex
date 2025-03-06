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
@name('EmptyWhileStmt')
@category('errorprone')
@context('scan')
@message("Avoid empty 'while' statements")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(while_statement (block) @block (#not-match? @block "\S"))')
export class EmptyWhileStmt extends ScanRule {}