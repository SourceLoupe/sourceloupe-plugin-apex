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


@name('EmptyStatementBlock')
@category('errorprone')
@context('scan')
@message('Avoid empty block statements.')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(block) @block')
export class EmptyStatementBlock extends ScanRule {}