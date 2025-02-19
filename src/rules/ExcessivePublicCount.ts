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

@name("ExcessivePublicCount")
@category("design")
@context("scan")
@message(
  "The class {0} has {1} public methods, attributes, and properties (limit: {2})",
)
@suggestion("")
@priority(3)
@query("(modifier(public)@pub)")
@regex("")
export class ExcessivePublicCount extends ScanRule {
  validateNodes(nodes: Parser.SyntaxNode[]): ScanResult[] {
    if (nodes.length >= 10) {
      return [new ScanResult(this, ResultType.VIOLATION)];
    }
    return [];
  }
}
// TODO: Progress
