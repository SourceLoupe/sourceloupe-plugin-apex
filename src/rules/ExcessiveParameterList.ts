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

@name("ExcessiveParameterList")
@category("design")
@context("scan")
@message("Avoid long parameter lists.")
@suggestion("")
@priority(3)
@query("(formal_parameters) @param")
@regex("")
export class ExcessiveParameterList extends ScanRule {
  validateNode(node: Parser.SyntaxNode): ScanResult[] {
    if (node.namedChildCount == 0) {
      return [new ScanResult(this, ResultType.VIOLATION)];
    }
    return [];
  }
}
