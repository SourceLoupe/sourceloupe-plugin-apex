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


@name('OverrideBothEqualsAndHashcode')
@category('errorprone')
@context('scan')
@message('Ensure you override both equals() and hashCode()')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(parser_output)@p')
export class OverrideBothEqualsAndHashcode extends ScanRule {}
