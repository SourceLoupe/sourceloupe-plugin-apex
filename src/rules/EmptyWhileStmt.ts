import {
    category,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,
    ScanRule,
    suggestion,
} from 'cayce-types';
@name('EmptyWhileStmt')
@category('errorprone')
@context('scan')
@message("Avoid empty 'while' statements")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(while_statement (block) @block (#not-match? @block "\S"))')
export class EmptyWhileStmt extends ScanRule {}