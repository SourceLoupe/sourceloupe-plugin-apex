
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
import * as TreeSitter from "tree-sitter";

@name("FieldDeclarationsShouldBeAtStart")
@category("codestyle")
@context("scan")
@message("Field declaration for ''{0}'' should be before method declarations in its class")
@suggestion("")
@priority(3)
@query("(field_declaration) @field")
@regex("")
export class FieldDeclarationsShouldBeAtStart extends ScanRule {
        validateNode(node: Parser.SyntaxNode): ScanResult[] {
                while (node.previousNamedSibling != null) {
                        if (node.previousNamedSibling.grammarType == "method_declaration") {
                                return [new ScanResult(this, ResultType.VIOLATION)];
                        }
                }
                return [];
        }
}