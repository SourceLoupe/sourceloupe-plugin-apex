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
//TODO: Log Completed

@name('EmptyIfStmt')
@category('errorprone')
@context('scan')
@message("Avoid empty 'if' statements")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(if_statement consequence: (block)@block)')
export class EmptyIfStmt extends ScanRule {}