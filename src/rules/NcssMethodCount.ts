import {
    category,
    context,
    message,
    name,
    ruleSeverity,
treeQuery,
    // 
    // ScanResult,
    ScanRule,
    suggestion,
} from 'cayce-types';


// import { NamingRule } from "./NamingRule";
@name('NcssMethodCount')
@category('design')
@context('scan')
@message("The method ''{0}()'' has an NCSS method count of {1} (limit: {2})")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class NcssMethodCount extends ScanRule {}
