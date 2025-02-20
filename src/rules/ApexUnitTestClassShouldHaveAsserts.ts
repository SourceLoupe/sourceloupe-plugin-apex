import {
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
import { ScanResult } from "sourceloupe-types";
// @ts-ignore
import { ResultType } from "sourceloupe";

@name("ApexUnitTestClassShouldHaveAsserts")
@category("bestpractices")
@context("scan")
@message(
  "Apex unit tests should System.assert() or assertEquals() or assertNotEquals()",
)
@suggestion("")
@priority(3)
@query("(method_invocation object:(identifier)@id)")
@regex("")
export class ApexUnitTestClassShouldHaveAsserts extends ScanRule {
  visitNode(node: Parser.SyntaxNode): ScanResult[] {
    if (node.text == "Assert") {
      return [];
    }
    const result: ScanResult = new ScanResult(this, ResultType.VIOLATION);
    return [result];
  }
}
