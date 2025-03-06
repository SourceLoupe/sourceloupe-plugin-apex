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
//TODO: Log Completed

@name('ApexUnitTestClassShouldHaveRunAs')
@category('bestpractices')
@context('scan')
@message('Apex unit test classes should have at least one System.runAs() call')
@suggestion('Wrap your test code in a System.runAd(user) statement with an appropriate user (avoid admin users.)')
@ruleSeverity(3)
@treeQuery('(method_declaration(modifiers(annotation(identifier)@d)))')
export class ApexUnitTestClassShouldHaveRunAs extends ScanRule {}