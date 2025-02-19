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
// TODO: Progress
@name("ExcessiveClassLength")
@category("design")
@context("scan")
@suggestion("")
@message("Avoid really long classes.")
@priority(3)
@query("(parser_output)@p")
@regex("")
export class ExcessiveClassLength extends ScanRule {
  validateNode(rootNode: Parser.SyntaxNode): ScanResult[] {
    if (rootNode.endPosition.row > 2000) {
      return [new ScanResult(this, ResultType.VIOLATION)];
    }
    return [];
  }
}
