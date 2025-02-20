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
import { adHocQuery } from "./RulePolyfills";

@name("ApexXSSFromEscapeFalse")
@category("security")
@context("scan")
@message("Apex classes should escape Strings in error messages")
@suggestion("")
@priority(3)
@query(
  '(method_invocation name:(identifier)@method (#match? @method "addError") arguments:(argument_list)@arglist)',
)
@regex("")
export class ApexXSSFromEscapeFalse extends ScanRule {
  validateNode(node: Parser.SyntaxNode): ScanResult[] {
    if (node.childForFieldName("method") == null) {
      return [];
    }
    const argListNode: Parser.SyntaxNode =
      node.childForFieldName("args") ?? node;
    if (argListNode.namedChildCount == 1) {
      if (argListNode.namedChildren[0].grammarType == "string_literal") {
        return [new ScanResult(this, ResultType.VIOLATION)];
      }
    }
    return [];
  }
}
