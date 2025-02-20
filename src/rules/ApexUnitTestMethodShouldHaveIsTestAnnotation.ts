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

@name("ApexUnitTestMethodShouldHaveIsTestAnnotation")
@category("bestpractices")
@context("scan")
@message("Apex test methods should have @isTest annotation.")
@suggestion("")
@priority(3)
@query("(modifiers(modifier(testMethod)@mod))")
@regex("")
export class ApexUnitTestMethodShouldHaveIsTestAnnotation extends ScanRule {
  validateNode(node: Parser.SyntaxNode): ScanResult[] {
    return [new ScanResult(this, ResultType.VIOLATION)];
  }
}
