import { ScanRule, context, message, name, priority, query, regex, suggestion, category } from 'cayce-types';

@name('ApexSOQLInjection')
@category('security')
@context('scan')
@message('Avoid untrusted/unescaped variables in DML query')
@suggestion('')
@priority(3)
@query('(method_invocation(identifier)@one(identifier)@two (#match? @one "Database") (#eq? @two "query"))@target')
@regex('')
//TODO: Log Completed
export class ApexSOQLInjection extends ScanRule {}
