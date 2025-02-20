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

@name("ApexUnitTestShouldNotUseSeeAllDataTrue")
@category("bestpractices")
@context("scan")
@message("Apex unit tests should not use @isTest(seeAllData = true)")
@suggestion("")
@priority(3)
@query('((annotation) @anno (#match? @anno "seeAllData"))')
@regex("")
export class ApexUnitTestShouldNotUseSeeAllDataTrue extends ScanRule {
  visitNode(node: Parser.SyntaxNode): ScanResult[] {
    return [new ScanResult(this, ResultType.VIOLATION)];
  }
}
