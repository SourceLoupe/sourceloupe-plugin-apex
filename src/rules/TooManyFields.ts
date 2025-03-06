import {
    category,
    context,
    message,
    name,
    treeQuery,
    ruleSeverity,
    ScanResult,
    ScanRule,
    suggestion
} from 'cayce-types';
// import SyntaxNode from "tree-sitter";
import Parser, { QueryCapture } from 'tree-sitter';
import TreeSitter from 'tree-sitter';
// TODO: Progress
@name('TooManyFields')
@category('design')
@context('scan')
@message('Too many fields')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(class_body(field_declaration) @1)')
export class TooManyFields extends ScanRule {}