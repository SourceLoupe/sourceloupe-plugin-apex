import {
    category,
    context,
    message,
    name,
    priority,
    query,
    regex,
    // ResultType,
    // ScanResult,
    ScanRule,
    suggestion,
} from 'cayce-types';
// import Parser from "tree-sitter";
// import * as TreeSitter from "tree-sitter";
// import { NamingRule } from "./NamingRule";

@name('NcssConstructorCount')
@category('design')
@context('scan')
@message('The constructor has an NCSS line count of {0}')
@suggestion('')
@priority(3)
@query('(parser_output)@p')
@regex('')
export class NcssConstructorCount extends ScanRule {}
