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
import Parser from 'tree-sitter';

@name('UnusedLocalVariable')
@category('bestpractices')
@context('scan')
@message("Variable ''{0}'' defined but not used")
@suggestion('')
@ruleSeverity(1)
@treeQuery('(parser_output)@p')
export class UnusedLocalVariable extends ScanRule {

}
