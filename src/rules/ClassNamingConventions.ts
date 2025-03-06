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

@name('PropertyNamingConventions')
@category('codestyle')
@context('scan')
@message("The {0} name ''{1}'' doesn''t match ''{2}''")
@suggestion('')
@ruleSeverity(1)
@treeQuery('(class_declaration name:(identifier) @classname (#not-match? @classname "[a-zA-Z0-9]*"))')
export class ClassNamingConventions extends ScanRule {}
