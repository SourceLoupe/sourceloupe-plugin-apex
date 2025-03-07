import { ScanRule, context, message, name, ruleSeverity, treeQuery,  suggestion, category } from 'cayce-types';

@name('ApexUnitTestClassShouldHaveAsserts')
@category('bestpractices')
@context('scan')
@message('Apex unit tests should System.assert() or assertEquals() or assertNotEquals()')
@suggestion('A unit test without asserts is not a functional unit test, because  the goal of a unit test is to execute a unit of code, inspect the result, and compare what actually happened vs. what was expected. At least one assert should exist per unit test.')
@ruleSeverity(3)
@treeQuery('(method_invocation object:(identifier)@id)')
export class ApexUnitTestClassShouldHaveAsserts extends ScanRule {}
