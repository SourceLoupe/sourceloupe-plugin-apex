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


@name('FieldDeclarationsShouldBeAtStart')
@category('codestyle')
@context('scan')
@message("Field declaration for ''{0}'' should be before method declarations in its class")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(field_declaration) @field')
export class FieldDeclarationsShouldBeAtStart extends ScanRule {}