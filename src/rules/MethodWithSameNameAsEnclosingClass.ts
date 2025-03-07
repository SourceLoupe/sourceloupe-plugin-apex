import {
    category,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,
    ScanRule,
    suggestion,
} from 'cayce-types';


@name('MethodWithSameNameAsEnclosingClass')
@category('errorprone')
@context('scan')
@message('Classes should not have non-constructor methods with the same name as the class')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(identifier)@name')
export class MethodWithSameNameAsEnclosingClass extends ScanRule {}