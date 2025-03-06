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

@name('EmptyCatchBlock')
@category('errorprone')
@context('scan')
@suggestion('')
@message('Avoid empty catch blocks')
@ruleSeverity(3)
@treeQuery('(catch_clause (block) @catch)')
export class EmptyCatchBlock extends ScanRule {}