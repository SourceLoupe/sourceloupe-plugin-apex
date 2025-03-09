import {
    category,
    context,
    message,
    name,
    RuleSeverity,
    ruleSeverity,
    treeQuery,
    ScanRule,
    suggestion,
} from 'cayce-types';
@name('EmptyCatchBlock')
@category('errorprone')
@context('scan')
@suggestion('')
@message('Avoid empty catch blocks')
@ruleSeverity(3)
@treeQuery('(catch_clause (block) @catch)')
export class EmptyCatchBlock extends ScanRule {}