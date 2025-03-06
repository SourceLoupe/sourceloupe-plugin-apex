import {
    category,
    context,
    message,
    name,
    ruleSeverity,
treeQuery,
    // 
    // ScanResult,
    // ScanRule,
    suggestion,
} from 'cayce-types';
// import Parser from "tree-sitter";
// import * as TreeSitter from "tree-sitter";
import { NamingRule } from './NamingRule.js';

@name('PropertyNamingConventions')
@category('codestyle')
@context('scan')
@message("The {0} name ''{1}'' doesn''t match ''{2}''")
@suggestion('')
@ruleSeverity(1)
@treeQuery('(field_declaration declarator: (variable_declarator name:(identifier) @name (#match? @name "[a-zA-Z0-9]")))')
export class PropertyNamingConventions extends NamingRule {}
// TODO: Progress
