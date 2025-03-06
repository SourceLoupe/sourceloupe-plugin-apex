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
@name('EmptyTryOrFinallyBlock')
@category('errorprone')
@context('scan')
@suggestion('')
@message('Avoid empty try or finally blocks')
@ruleSeverity(3)
@treeQuery('(try_statement (block)) (finally_clause (block)@target (#not-match? @target "\S"))')
export class EmptyTryOrFinallyBlock extends ScanRule {}