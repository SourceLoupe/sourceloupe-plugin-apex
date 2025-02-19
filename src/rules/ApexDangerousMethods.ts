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
import { NamingRule } from "./NamingRule";

@name("ApexDangerousMethods")
@category("security")
@context("scan")
@message("Calling potentially dangerous method")
@suggestion("")
@priority(3)
@query(
  '(method_invocation object:(identifier) @object (#match? @object "Configuration") name:(identifier) @name (#match? @name "disableTriggerCRUDSecurity"))',
)
@regex("")
export class ApexDangerousMethods extends ScanRule {
  validateNode(node: Parser.SyntaxNode): ScanResult[] {
    return [new ScanResult(this, ResultType.VIOLATION)];
  }
}
