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
@name('ExcessiveClassLength')
@category('design')
@context('scan')
@suggestion('')
@message('Avoid really long classes.')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class ExcessiveClassLength extends ScanRule {}