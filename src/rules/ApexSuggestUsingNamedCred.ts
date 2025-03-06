import {
    category,
    context,
    message,
    name,
    ruleSeverity,
treeQuery,
    
    ScanResult,
    ScanRule,
    suggestion,
} from 'cayce-types';
import Parser, * as TreeSitter from 'tree-sitter';
import Query from 'tree-sitter';
import TsSfApex from 'tree-sitter-sfapex';
//TODO: Log Completed

@name('ApexSuggestUsingNamedCred')
@category('security')
@context('scan')
@message('Suggest named credentials for authentication')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(class_body)')
export class ApexSuggestUsingNamedCred extends ScanRule {}