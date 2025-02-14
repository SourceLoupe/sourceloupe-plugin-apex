
import {ScanRule, context, message, name, priority, query, regex, suggestion, category, ScanResult} from 'sourceloupe'
import Parser from "tree-sitter";

@name("ApexDoc")
@category("../../documentation")
@context("scan")
@message("ApexDoc comment is missing or incorrect. It should have at minimum @description")
@suggestion("")
@priority(2)
@query('(parser_output(block_comment)@description)')
@regex("")
export class ApexDoc extends ScanRule {
    validateNodes(nodes:Parser.SyntaxNode[]):ScanResult[]{
        results: ScanResult[] = [];
        nodes.forEach(node => {
            if(node.text.includes("@description")){
                const scanResult:ScanResult = new ScanResult(this,ResultTupe.VIOLATION);
                results.push(scanResult);
            }
        });
        return scanResult
    }
}
