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
@name('AvoidNonRestrictiveQueries')
@category('performance')
@context('scan')
@message('Avoid {0} queries without a where or limit statement')
@suggestion('')
@priority(3)
@query('((soql_query_body) @soql (#match? @soql "WHERE|LIMIT"))')
@regex('')
export class AvoidNonRestrictiveQueries extends ScanRule {}
