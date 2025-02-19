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
  suggestion,
} from "sourceloupe-types";
import Parser from "tree-sitter";

@name("ClassHeaderComment")
@category("bestpractices")
@context("scan")
@message("Classes must have a header comment with a @description tag")
@suggestion("")
@priority(1)
@query("(class_declaration) @class")
@regex("")
export class ClassHeaderComment extends ScanRule {
  validateNode(node: Parser.SyntaxNode): ScanResult[] {
    const beforeClassNode: Parser.SyntaxNode =
      node.previousNamedSibling ?? node;
    if (
      beforeClassNode.grammarType == "block_comment" &&
      beforeClassNode.text.includes("description")
    ) {
      return [];
    }
    return [new ScanResult(this, ResultType.VIOLATION)];
  }
}
