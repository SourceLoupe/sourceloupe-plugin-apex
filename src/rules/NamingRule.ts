import {
    category,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,
    suggestion,
    ScanRule
} from 'cayce-types';
@name('FormalParameterNamingConventions')
@category('codestyle')
@context('scan')
@message("The {0} name ''{1}'' doesn''t match ''{2}''")
@suggestion('')
@ruleSeverity(1)
@treeQuery('(parser_output)@p')
export class NamingRule extends ScanRule {}
