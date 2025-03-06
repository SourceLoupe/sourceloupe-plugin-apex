import {
    category,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,ScanRule,
    suggestion
} from 'cayce-types';
@name('MethodHeaderComment')
@category('bestpractices')
@context('scan')
@message('Methods must have a header comment with a @description tag')
@suggestion('')
@ruleSeverity(1)
@treeQuery('(method_declaration) @method')
export class MethodHeaderComment extends  ScanRule {}
