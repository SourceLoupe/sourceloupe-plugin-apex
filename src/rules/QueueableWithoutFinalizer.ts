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

@name('QueueableWithoutFinalizer')
@category('bestpractices')
@context('scan')
@message("This Queueable doesn't attach a Finalizer")
@suggestion('')
@ruleSeverity(3)
@treeQuery('(interfaces(type_list)@list)@interface')
export class QueueableWithoutFinalizer extends  ScanRule {}
