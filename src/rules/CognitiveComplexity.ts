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

@name('CognitiveComplexity')
@category('design')
@context('scan')
@message("The {0} ''{1}'' has a{2} cognitive complexity of {3}.")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class CognitiveComplexity extends ScanRule {}