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

@name('EmptyStatementBlock')
@category('errorprone')
@context('scan')
@message('Avoid empty block statements.')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(block) @block')
export class EmptyStatementBlock extends ScanRule {}