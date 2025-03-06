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

@name('ExcessiveParameterList')
@category('design')
@context('scan')
@message('Avoid long parameter lists.')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(formal_parameters) @param')
export class ExcessiveParameterList extends ScanRule {}