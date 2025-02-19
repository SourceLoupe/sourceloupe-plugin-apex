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

@name("EmptyCatchBlock")
@category("errorprone")
@context("scan")
@suggestion("")
@message("Avoid empty catch blocks")
@priority(3)
@query("(catch_clause (block) @catch)")
@regex("")
export class EmptyCatchBlock extends ScanRule {
    validateNode(node: Parser.SyntaxNode): ScanResult[] {
        const result: ScanResult[] = [];
        if(node.namedChildCount == 0){
            const scanResult: ScanResult = new ScanResult(this,ResultType.VIOLATION);
            result.push(scanResult);
        }
        return result;
    }
}
// TODO: Add to progress