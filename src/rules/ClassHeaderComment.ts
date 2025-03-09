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
@name('ClassHeaderComment')
@category('bestpractices')
@context('scan')
@message('Classes must have a header comment with a @description tag')
@suggestion('')
@ruleSeverity(1)
@treeQuery('(class_declaration) @class')
export class ClassHeaderComment extends ScanRule {}