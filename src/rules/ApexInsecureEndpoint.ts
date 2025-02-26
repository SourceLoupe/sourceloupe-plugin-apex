import {
    category,
    context,
    message,
    name,
    priority,
    query,
    regex,
    ScanRule,
    suggestion,
} from 'cayce-types';

@name('ApexInsecureEndpoint')
@category('security')
@context('scan')
@message('Apex callouts should use encrypted communication channels')
@suggestion('')
@priority(3)
@query(
    '(method_invocation name: (identifier) @methodname (#match? @methodname "setEndpoint") (argument_list (string_literal) @literal (#match? @literal "http:")))@target'
)
@regex('')
export class ApexInsecureEndpoint extends ScanRule {}
