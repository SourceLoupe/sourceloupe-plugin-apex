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
import * as TreeSitter from "tree-sitter";
@name("EmptyWhileStmt")
@category("errorprone")
@context("scan")
@message("Avoid empty 'while' statements")
@suggestion("")
@priority(3)
@query("(while_statement (block) @block)")
@regex("")
export class EmptyWhileStmt extends ScanRule {
  validateNode(node: Parser.SyntaxNode): ScanResult[] {
    if (node.namedChildCount == 0) {
      return [new ScanResult(this, ResultType.VIOLATION)];
    }
    return [];
  }
}
