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
// import * as TreeSitter from "tree-sitter";

@name('MethodWithSameNameAsEnclosingClass')
@category('errorprone')
@context('scan')
@message('Classes should not have non-constructor methods with the same name as the class')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(identifier)@name')
export class MethodWithSameNameAsEnclosingClass extends ScanRule {}