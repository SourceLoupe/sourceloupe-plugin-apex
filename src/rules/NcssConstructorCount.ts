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



@name('NcssConstructorCount')
@category('design')
@context('scan')
@message('The constructor has an NCSS line count of {0}')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class NcssConstructorCount extends ScanRule {}
