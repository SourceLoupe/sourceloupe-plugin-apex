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

@name('ApexXSSFromEscapeFalse')
@category('security')
@context('scan')
@message('Apex classes should escape Strings in error messages')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class ApexXSSFromEscapeFalse extends ScanRule {}
