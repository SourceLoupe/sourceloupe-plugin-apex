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
//TODO: Log Completed

@name("ApexUnitTestClassShouldHaveRunAs")
@category("bestpractices")
@context("scan")
@message("Apex unit test classes should have at least one System.runAs() call")
@suggestion("Wrap your test code in a System.runAd(user) statement with an appropriate user (avoid admin users.)")
@priority(3)
@query("(method_declaration(modifiers(annotation(identifier)@d)))")
@regex("")
export class ApexUnitTestClassShouldHaveRunAs extends ScanRule {
    visitNode(node: Parser.SyntaxNode): ScanResult[] {
        const results: ScanResult[] = [];
        if(node.descendantsOfType("run_as_statement").length === 0){
            const result: ScanResult = new ScanResult(this, ResultType.VIOLATION);
            results.push(result);
        }
        return results;
    }
}