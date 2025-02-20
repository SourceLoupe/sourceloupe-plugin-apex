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

@name("EmptyStatementBlock")
@category("errorprone")
@context("scan")
@message("Avoid empty block statements.")
@suggestion("")
@priority(3)
@query("(block) @block")
@regex("")
export class EmptyStatementBlock extends ScanRule {
  validateNode(node: Parser.SyntaxNode): ScanResult[] {
    if (node.namedChildCount == 0) {
      return [new ScanResult(this, ResultType.VIOLATION)];
    }
    return [];
  }
}
