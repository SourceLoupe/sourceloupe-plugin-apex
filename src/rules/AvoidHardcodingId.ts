
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
import * as TreeSitter from "tree-sitter";@name("AvoidHardcodingId")
@category("errorprone")
@context("scan")
@message("Hardcoding Id's is bound to break when changing environments.")
@suggestion("")
@priority(3)
@query('(string_literal) @literal (#match? @literal "\\b[a-z0-9]\\w{4}0\\w{12}|[a-z0-9]\\w{4}0\\w{9}\\b")')
@regex("")
export class AvoidHardcodingId extends ScanRule {
    validateNode(node: Parser.SyntaxNode): ScanResult[] {
        return [new ScanResult(this,ResultType.VIOLATION)];
    }
}