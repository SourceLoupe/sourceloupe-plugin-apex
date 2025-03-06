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
// import * as TreeSitter from "tree-sitter";

@name('FieldDeclarationsShouldBeAtStart')
@category('codestyle')
@context('scan')
@message("Field declaration for ''{0}'' should be before method declarations in its class")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(field_declaration) @field')
export class FieldDeclarationsShouldBeAtStart extends ScanRule {}