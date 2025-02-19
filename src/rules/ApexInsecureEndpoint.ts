import {
    category,
    context,
    message,
    name,
    priority,
    query,
    regex,
    ResultType,
    ScanResult,
    ScanRule,
    suggestion,
} from 'sourceloupe-types';
import Parser from 'tree-sitter';
// import * as TreeSitter from "tree-sitter";

@name('ApexInsecureEndpoint')
@category('security')
@context('scan')
@message('Apex callouts should use encrypted communication channels')
@suggestion('')
@priority(3)
@query(
    '(method_invocation name: (identifier) @methodname (#match? @methodname "setEndpoint") (argument_list (string_literal) @literal (#match @literal "http:")))'
)
@regex('')
export class ApexInsecureEndpoint extends ScanRule {
    validateNode(_node: Parser.SyntaxNode): ScanResult[] {
        return [new ScanResult(this, ResultType.VIOLATION)];
    }
}
