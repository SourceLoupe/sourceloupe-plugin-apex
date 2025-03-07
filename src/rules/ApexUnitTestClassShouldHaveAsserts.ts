import { ScanRule, context, message, name, ruleSeverity, treeQuery,  suggestion, category } from 'cayce-types';

@name('ApexUnitTestClassShouldHaveAsserts')
@category('bestpractices')
@context('scan')
@message('Apex unit tests should System.assert() or assertEquals() or assertNotEquals()')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(method_invocation object:(identifier)@id)')
export class ApexUnitTestClassShouldHaveAsserts extends ScanRule {}
