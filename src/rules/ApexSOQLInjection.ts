import { ScanRule, context, message, name, ruleSeverity, treeQuery,  suggestion, category } from 'cayce-types';
import {  ScanResult } from 'cayce-types';
import Parser from 'tree-sitter';

@name('ApexSOQLInjection')
@category('security')
@context('scan')
@message('Avoid untrusted/unescaped variables in DML query')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(method_invocation(identifier)@one(identifier)@two (#match? @one "Database") (#eq? @two "query"))@target')
export class ApexSOQLInjection extends ScanRule {}
