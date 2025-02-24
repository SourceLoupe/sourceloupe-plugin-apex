import {
    ScanResult,
    ScanRule,
    context,
    message,
    name,
    priority,
    query,
    regex,
    suggestion,
    category,
} from 'sourceloupe-types';
import Parser from 'tree-sitter';
import { ResultType } from 'sourceloupe-types';

@name('ApexSharingViolations')
@category('security')
@context('scan')
@message('Apex classes should declare a sharing model if DML or SOQL/SOSL is used')
@suggestion('If a class is not marked "with sharing" it could present an access control risk. If the class truly needs this kind of acces, use a @justification tag in the header to alert any reviewers/troubleshooters.')
@priority(3)
@query('(class_declaration(modifiers)@mod (#not-match? @mod "with sharing"))@target')
@regex('')
export class ApexSharingViolations extends ScanRule {}
