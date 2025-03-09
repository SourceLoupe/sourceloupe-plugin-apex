import {
    category,
    context,
    message,
    name,
    RuleSeverity,
    ruleSeverity,
    treeQuery,
    ScanRule,
    suggestion,
} from 'cayce-types';
@name('AvoidHardcodingId')
@category('errorprone')
@context('scan')
@message("Hardcoding Id's is bound to break when changing environments.")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(string_literal) @literal (#match? @literal "\\b[a-z0-9]\\w{4}0\\w{12}|[a-z0-9]\\w{4}0\\w{9}\\b")')
export class AvoidHardcodingId extends ScanRule {}