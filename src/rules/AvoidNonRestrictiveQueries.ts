import {
    category,
    context,
    message,
    name,
    ruleSeverity,
treeQuery,
    // 
    // ScanResult,
    ScanRule,
    suggestion,
} from 'cayce-types';
// import Parser from "tree-sitter";
// import * as TreeSitter from "tree-sitter";
@name('AvoidNonRestrictiveQueries')
@category('performance')
@context('scan')
@message('Avoid {0} queries without a where or limit statement')
@suggestion('')
@ruleSeverity(3)
@treeQuery('((soql_query_body) @soql (#match? @soql "WHERE|LIMIT"))')
export class AvoidNonRestrictiveQueries extends ScanRule {}
