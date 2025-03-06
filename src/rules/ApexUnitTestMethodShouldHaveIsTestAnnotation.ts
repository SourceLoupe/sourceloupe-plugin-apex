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

@name('ApexUnitTestMethodShouldHaveIsTestAnnotation')
@category('bestpractices')
@context('scan')
@message('Apex test methods should have @isTest annotation.')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(modifiers(modifier(testMethod)@mod))')

export class ApexUnitTestMethodShouldHaveIsTestAnnotation extends ScanRule {}
