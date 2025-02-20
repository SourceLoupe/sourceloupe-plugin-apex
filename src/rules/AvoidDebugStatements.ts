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

@name("AvoidDebugStatements")
@category("performance")
@context("scan")
@message("Avoid debug statements since they have an impact on performance")
@suggestion("If you require output, consider using NebulaLogger")
@priority(3)
@query("(method_invocation) @method")
@regex("")
export class AvoidDebugStatements extends ScanRule {
  validateNode(node: Parser.SyntaxNode): ScanResult[] {
    if (node.text.includes("System.debug")) {
      return [new ScanResult(this, ResultType.VIOLATION)];
    }
    return [];
  }
}
