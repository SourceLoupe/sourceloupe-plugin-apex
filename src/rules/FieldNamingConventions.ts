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
@name('FieldNamingConventions')
@category('codestyle')
@context('scan')
@suggestion('')
@message("The {0} name ''{1}'' doesn''t match ''{2}''")
@ruleSeverity(1)
@treeQuery('(variable_declarator name:(identifier) @varname (#not-match? @varname "(VATEST?|[A-Z]{2,4})_[a-zA-Z0-9]*"))')
export class FieldNamingConventions extends NamingRule {}
