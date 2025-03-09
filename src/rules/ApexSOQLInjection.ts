import { ScanRule, context, message, name, RuleSeverity, ruleSeverity, treeQuery,  suggestion, category } from 'cayce-types';
import {  ScanResult } from 'cayce-types';
@name('ApexSOQLInjection')
@category('security')
@context('scan')
@message('Avoid untrusted/unescaped variables in DML query')
@suggestion('Even today, query/script injection is a real threat when exposing any sort of execution to the outside world. Apex has a queryWithBinds method that is a handy tool in mitigating this risk.')
@ruleSeverity(3)
@treeQuery('(method_invocation(identifier)@one(identifier)@two (#match? @one "Database") (#eq? @two "query"))@target')
export class ApexSOQLInjection extends ScanRule {}
