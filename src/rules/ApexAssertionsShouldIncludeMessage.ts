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


@name('ApexAssertionsShouldIncludeMessage')
@category('bestpractices')
@context('scan')
@message('Apex test assert statement should make use of the message parameter.')
@suggestion('')
@ruleSeverity(3)
@treeQuery(
    '(method_invocation  object: (identifier) @objectname (#match? @objectname "Assert") name: (identifier) @methodname (argument_list) @args)'
)
export class ApexAssertionsShouldIncludeMessage extends  ScanRule {}
