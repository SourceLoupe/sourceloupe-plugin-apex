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
import Parser from 'tree-sitter';

@name('ApexUnitTestShouldNotUseSeeAllDataTrue')
@category('bestpractices')
@context('scan')
@message('Apex unit tests should not use @isTest(seeAllData = true)')
@suggestion('')
@ruleSeverity(3)
@treeQuery('((annotation) @anno (#match? @anno "seeAllData"))')
export class ApexUnitTestShouldNotUseSeeAllDataTrue extends ScanRule {}
