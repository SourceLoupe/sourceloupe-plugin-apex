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


@name('ApexUnitTestClassShouldHaveRunAs')
@category('bestpractices')
@context('scan')
@message('Apex unit test classes should have at least one System.runAs() call')
@suggestion('Wrap your test code in a System.runAd(user) statement with an appropriate user (avoid admin users.)')
@ruleSeverity(3)
@treeQuery('(method_declaration(modifiers(annotation(identifier)@d)))')
export class ApexUnitTestClassShouldHaveRunAs extends ScanRule {}