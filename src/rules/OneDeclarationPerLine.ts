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

@name('One Variable Declaration Per Line')
@category('codestyle')
@context('scan')
@message('Multiple variables should not be declared on the same line.')
@suggestion('Although this is valid syntax, it can be unclear to the reader at first glance. Consider declaring each variable on a discreet line.')
@ruleSeverity(1)
@treeQuery('((variable_declarator) @one (variable_declarator) @two)')
export class OneDeclarationPerLine extends ScanRule {}
