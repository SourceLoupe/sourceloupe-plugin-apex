import {
    ScanResult,
    ScanRule,
    context,
    message,
    name,
    ruleSeverity,
treeQuery,
    suggestion,
    category,
} from 'cayce-types';

@name('ApexSharingViolations')
@category('security')
@context('scan')
@message('Apex classes should declare a sharing model if DML or SOQL/SOSL is used')
@suggestion(
    'If a class is not marked "with sharing" it could present an access control risk. If the class truly needs this kind of acces, use a @justification tag in the header to alert any reviewers/troubleshooters.'
)
@ruleSeverity(3)
@treeQuery('(class_declaration(modifiers)@mod (#not-match? @mod "with sharing"))@target')
export class ApexSharingViolations extends ScanRule {}
