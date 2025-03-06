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


// import { NamingRule } from "./NamingRule";
@name('NcssTypeCount')
@category('design')
@context('scan')
@message('The type has an NCSS line count of {0}')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class NcssTypeCount extends ScanRule {}
