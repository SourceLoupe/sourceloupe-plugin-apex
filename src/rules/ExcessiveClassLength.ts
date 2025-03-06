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
// TODO: Progress
@name('ExcessiveClassLength')
@category('design')
@context('scan')
@suggestion('')
@message('Avoid really long classes.')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class ExcessiveClassLength extends ScanRule {}