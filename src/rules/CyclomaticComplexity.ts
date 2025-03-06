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

@name('CyclomaticComplexity')
@category('design')
@context('scan')
@message("The {0} ''{1}'' has a{2} cyclomatic complexity of {3}.")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class CyclomaticComplexity extends ScanRule {}