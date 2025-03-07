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
@name('ApexBadCrypto')
@category('security')
@context('scan')
@message('Apex classes should use random IV/key')
@suggestion('In order to ensure that an encrypted value is secure, it is considered essential to use values unknown and hard to predict for both the key and initialization vector (IV). Consider generating using the built-in functions or another, equally secure random initialization method.')
@ruleSeverity(3)
@treeQuery(
    '(method_invocation object:(identifier) @object (#match? @object "Crypto") name: (identifier) @method (#match? @method "encrypt|decrypt") (argument_list)@args)'
)
export class ApexBadCrypto extends  ScanRule {}
