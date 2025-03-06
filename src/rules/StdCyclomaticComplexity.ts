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
@name('StdCyclomaticComplexity')
@category('design')
@context('scan')
@message("The {0} ''{1}'' has a Standard Cyclomatic Complexity of {2}.")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class StdCyclomaticComplexity extends ScanRule {}
