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
@name('QueueableWithoutFinalizer')
@category('bestpractices')
@context('scan')
@message("This Queueable doesn't attach a Finalizer")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(interfaces(type_list)@list)@interface')
export class QueueableWithoutFinalizer extends  ScanRule {}
