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
import { NamingRule } from './NamingRule';

@name('PropertyNamingConventions')
@category('codestyle')
@context('scan')
@message("The {0} name ''{1}'' doesn''t match ''{2}''")
@suggestion('')
@priority(1)
@query('(field_declaration declarator: (variable_declarator)@declare)')
@regex('')
export class PropertyNamingConventions extends NamingRule {}
// TODO: Progress
