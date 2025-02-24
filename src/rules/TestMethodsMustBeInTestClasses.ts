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

@name('TestMethodsMustBeInTestClasses')
@category('errorprone')
@context('scan')
@message('Test methods must be in test classes')
@suggestion('')
@priority(3)
@query(
    '(class_declaration (modifiers) @mods (#not-match? @mods "isTest")) (method_declaration(modifiers (annotation) @target (#match? @target "isTest")))'
)
@regex('')
export class TestMethodsMustBeInTestClasses extends ScanRule {
    validateNode(_node: Parser.SyntaxNode): ScanResult[] {
        return [new ScanResult(this, ResultType.VIOLATION)];
    }
}
