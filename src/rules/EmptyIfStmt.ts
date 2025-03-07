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


@name('EmptyIfStmt')
@category('errorprone')
@context('scan')
@message("Avoid empty 'if' statements")
@suggestion('If a statement is empty because of functionality that has been removed, remove it as soon as possible. Non-functional code clutters the overall source and can adversely affect clarity.')
@ruleSeverity(3)
@treeQuery('(if_statement condition:(parenthesized_expression) @paren consequence: (block)@block (#not-match? @block "[A-Za-z0-9]"))')
export class EmptyIfStmt extends ScanRule {}