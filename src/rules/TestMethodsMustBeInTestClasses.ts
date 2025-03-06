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

@name('TestMethodsMustBeInTestClasses')
@category('errorprone')
@context('scan')
@message('Test methods must be in test classes')
@suggestion('')
@ruleSeverity(3)
@treeQuery(
    '(class_declaration (modifiers) @mods (#not-match? @mods "isTest")) (method_declaration(modifiers (annotation) @target (#match? @target "isTest")))'
)
export class TestMethodsMustBeInTestClasses extends ScanRule {}

