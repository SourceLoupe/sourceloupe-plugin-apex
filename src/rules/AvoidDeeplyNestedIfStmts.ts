import {
  ScanResult,
  ResultType,
  ScanRule,
  context,
  message,
  name,
  priority,
  query,
  regex,
  suggestion,
  category,
} from "sourceloupe-types";
import Parser from "tree-sitter";

@name("AvoidDeeplyNestedIfStmts")
@category("design")
@context("scan")
@message("Deeply nested if..then statements are hard to read")
@suggestion("")
@priority(3)
@query(
  "(if_statement consequence: (if_statement consequence:(if_statement)))@outer",
)
@regex("")
export class AvoidDeeplyNestedIfStmts extends ScanRule {
  validateNode(node: Parser.SyntaxNode): ScanResult[] {
    return [new ScanResult(this, ResultType.VIOLATION)];
  }
}
//TODO: Log Completed
