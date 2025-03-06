import {
    category,
    context,
    message,
    name,
    ruleSeverity,
treeQuery,
    
    ScanResult,
    ScanRule,
    suggestion,
} from 'cayce-types';
import Parser from 'tree-sitter';
// import * as TreeSitter from "tree-sitter";

@name('ApexInsecureEndpoint')
@category('security')
@context('scan')
@message('Apex callouts should use encrypted communication channels')
@suggestion('')
@ruleSeverity(3)
@treeQuery(
    '(method_invocation name: (identifier) @methodname (#match? @methodname "setEndpoint") (argument_list (string_literal) @literal (#match? @literal "http:")))@target'
)
export class ApexInsecureEndpoint extends ScanRule {}
