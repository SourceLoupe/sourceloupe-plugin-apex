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

@name('FormalParameterNamingConventions')
@category('codestyle')
@context('scan')
@message("The {0} name ''{1}'' doesn''t match ''{2}''")
@suggestion('')
@priority(1)
@query('(parser_output)@p')
@regex('')
export class NamingRule extends ScanRule {}
