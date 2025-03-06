import {    ScanRule,
    context,
    message,
    name,
    ruleSeverity,
treeQuery,
    suggestion,
    category,
} from 'cayce-types';
@name('AvoidDeeplyNestedIfStmts')
@category('design')
@context('scan')
@message('Deeply nested if..then statements are hard to read')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(if_statement consequence: (if_statement consequence:(if_statement)))@outer')
export class AvoidDeeplyNestedIfStmts extends ScanRule {}