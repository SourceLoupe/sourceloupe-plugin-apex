
import { ScanResult, ScanRule, context, message, name, priority, query, regex, suggestion, category } from'sourceloupe-types'
import Parser from "tree-sitter";
import {ResultType} from "sourceloupe-types";

@name("ApexSharingViolations")
@category("security")
@context("scan")
@message("Apex classes should declare a sharing model if DML or SOQL/SOSL is used")
@suggestion("")
@priority(3)
@query("(class_declaration(modifiers)@mod)")
@regex("")
//TODO: Log Completed
export class ApexSharingViolations extends ScanRule {
    validateNode(node: Parser.SyntaxNode): ScanResult[]{
        const results: ScanResult[] = [];
        if(node.descendantsOfType('with_sharing').length === 0){
            this.Node = node;
            const result: ScanResult = new ScanResult(this,ResultType.VIOLATION);
            results.push(result);
        }

        return results;
    }

}