import {
    category,
    context,
    message,
    name,
    priority,
    query,
    regex,
    ResultType,
    ScanResult,
    ScanRule,
    suggestion
} from 'sourceloupe-types'
import Parser from "tree-sitter";

@name("QueueableWithoutFinalizer")
@category("bestpractices")
@context("scan")
@message("This Queueable doesn't attach a Finalizer")
@suggestion("")
@priority(5)
@query("(interfaces(type_list)@list)")
@regex("")
export class QueueableWithoutFinalizer extends ScanRule {
    validateNode(node: Parser.SyntaxNode): ScanResult[] {
        const checkForFinalizer: number = node.namedChildren
            .filter(child=>child.text == 'Queueable')
            .filter(child=>child.text == 'Finalizer')
            .length;
        if(checkForFinalizer === 0){
            return [new ScanResult(this,ResultType.VIOLATION)];
        }
        return [];
    }
}
// TODO: Progress