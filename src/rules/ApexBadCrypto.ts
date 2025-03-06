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
import TreeSitter from 'tree-sitter';
import { adHocQuery } from './RulePolyfills.js';
@name('ApexBadCrypto')
@category('security')
@context('scan')
@message('Apex classes should use random IV/key')
@suggestion('')
@ruleSeverity(3)
@treeQuery(
    '(method_invocation object:(identifier) @object (#match? @object "Crypto") name: (identifier) @method (#match? @method "encrypt|decrypt") (argument_list)@args)'
)
export class ApexBadCrypto extends  ScanRule {}
