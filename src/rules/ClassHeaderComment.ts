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

@name('ClassHeaderComment')
@category('bestpractices')
@context('scan')
@message('Classes must have a header comment with a @description tag')
@suggestion('')
@ruleSeverity(1)
@treeQuery('(class_declaration) @class')
export class ClassHeaderComment extends ScanRule {}