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

@name('ApexXSSFromURLParam')
@category('security')
@context('scan')
@message('Apex classes should escape/sanitize Strings obtained from URL parameters')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class ApexXSSFromURLParam extends ScanRule {}
