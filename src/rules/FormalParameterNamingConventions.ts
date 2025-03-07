import {
    category,
    context,
    message,
    name,
    ruleSeverity,
    treeQuery,
    suggestion,
} from 'cayce-types';


import { NamingRule } from './NamingRule.js';
@name('FormalParameterNamingConventions')
@category('codestyle')
@context('scan')
@suggestion('')
@message("The {0} name ''{1}'' doesn''t match ''{2}''")
@ruleSeverity(1)
@treeQuery('(formal_parameter name:(identifier) @param (#not-match? @param "[a-zA-Z0-9]*"))')
export class FormalParameterNamingConventions extends NamingRule {}
