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
    ScanRule,
    suggestion,
} from 'sourceloupe-types';
// import Parser from "tree-sitter";
// import * as TreeSitter from "tree-sitter";
// import { NamingRule } from "./NamingRule";

@name('InaccessibleAuraEnabledGetter')
@category('errorprone')
@context('scan')
@message('AuraEnabled getter must be public or global if is referenced in Lightning components')
@suggestion('')
@priority(3)
@query('(parser_output)@p')
@regex('')
export class InaccessibleAuraEnabledGetter extends ScanRule {}
