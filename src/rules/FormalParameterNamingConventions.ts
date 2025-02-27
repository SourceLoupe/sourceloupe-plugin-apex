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
} from 'cayce-types';
// import Parser from "tree-sitter";
// import * as TreeSitter from "tree-sitter";
import { NamingRule } from './NamingRule.js';

@name('FormalParameterNamingConventions')
@category('codestyle')
@context('scan')
@suggestion('')
@message("The {0} name ''{1}'' doesn''t match ''{2}''")
@priority(1)
@query('(formal_parameter name:(identifier) @param (#not-match? @param "[a-zA-Z0-9]*"))')
@regex('')
export class FormalParameterNamingConventions extends NamingRule {}
