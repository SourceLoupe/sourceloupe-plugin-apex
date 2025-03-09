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


@name('ExcessiveParameterList')
@category('design')
@context('scan')
@message('Avoid long parameter lists.')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(formal_parameters) @param')
export class ExcessiveParameterList extends ScanRule {}