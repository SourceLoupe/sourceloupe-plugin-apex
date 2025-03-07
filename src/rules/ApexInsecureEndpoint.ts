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


@name('ApexInsecureEndpoint')
@category('security')
@context('scan')
@message('Apex callouts should use encrypted communication channels')
@suggestion('As with any connection to a resource that is not managed by your organization, prudence and caution are the best approach when accessing the outside world. Following best-practices, use HTTPS instead of HTTP.')
@ruleSeverity(3)
@treeQuery(
    '(method_invocation name: (identifier) @methodname (#match? @methodname "setEndpoint") (argument_list (string_literal) @literal (#match? @literal "http:")))@target'
)
export class ApexInsecureEndpoint extends ScanRule {}
