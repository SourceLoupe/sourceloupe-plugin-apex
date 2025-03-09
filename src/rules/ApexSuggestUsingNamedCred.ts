import {
    category,
    context,
    message,
    name,
    RuleSeverity,
    ruleSeverity,
    treeQuery,
    ScanRule,
    suggestion,
} from 'cayce-types';
import Parser, * as TreeSitter from 'tree-sitter';
import Query from 'tree-sitter';
import TsSfApex from 'tree-sitter-sfapex';


@name('ApexSuggestUsingNamedCred')
@category('security')
@context('scan')
@message('Suggest named credentials for authentication')
@suggestion('Due to the sensitive nature of (x)Auth access to external systems (and the potentially sensitive data that they provide) use of named/external credentials for access is a must.')
@ruleSeverity(3)
@treeQuery('(class_body)')
export class ApexSuggestUsingNamedCred extends ScanRule {}