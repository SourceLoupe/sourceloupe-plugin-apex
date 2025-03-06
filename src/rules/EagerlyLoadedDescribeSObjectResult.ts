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
// import * as TreeSitter from "tree-sitter";
@name('EagerlyLoadedDescribeSObjectResult')
@category('performance')
@context('scan')
@message('DescribeSObjectResult could be being loaded eagerly with all child relationships.')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(method_invocation object:(identifier) @object (#match? @object "DescribeSObjectResult"))@all')
export class EagerlyLoadedDescribeSObjectResult extends ScanRule {}