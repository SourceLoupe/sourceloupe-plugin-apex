import {
    category,
    context,
    message,
    name,
    priority,
    query,
    regex,
    // ResultType,
    // ScanResult,
    // ScanRule,
    suggestion,
} from 'sourceloupe-types';
// import Parser from "tree-sitter";
// import * as TreeSitter from "tree-sitter";
import { NamingRule } from './NamingRule.js';

@name('LocalVariableNamingConventions')
@category('codestyle')
@context('scan')
@message("The {0} name ''{1}'' doesn''t match ''{2}''")
@suggestion('')
@priority(1)
@query('(variable_declarator name:(identifier) @param (#not-match? @param "[a-zA-Z0-9]*"))')
@regex('')
export class LocalVariableNamingConventions extends NamingRule {}
