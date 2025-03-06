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

@name('ForLoopsMustUseBraces')
@category('codestyle')
@context('scan')
@suggestion('')
@message("Avoid using 'for' statements without curly braces")
@ruleSeverity(3)
@treeQuery('(for_statement)@for')
export class ForLoopsMustUseBraces extends ScanRule {}