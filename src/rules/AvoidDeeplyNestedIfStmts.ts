import {    ScanRule,
    context,
    message,
    name,
    RuleSeverity,
    ruleSeverity,
    treeQuery,
    suggestion,
    category,
} from 'cayce-types';
@name('AvoidDeeplyNestedIfStmts')
@category('design')
@context('scan')
@message('An if statement that has a depth (child if-statements) that is greater than three has been detected')
@suggestion('If statements that have too much "depth" can be confusing to follow for a maintainer. In most cases, these statements can be consolidated or refactored to have a flatter layout.')
@ruleSeverity(3)
@treeQuery('(if_statement consequence: (if_statement consequence:(if_statement)))@outer')
export class AvoidDeeplyNestedIfStmts extends ScanRule {}