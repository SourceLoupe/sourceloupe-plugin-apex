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

@name("ApexAssertionsShouldIncludeMessage")
@category("bestpractices")
@context("scan")
@message("Apex test assert statement should make use of the message parameter.")
@suggestion("")
@priority(3)
@query("(parser_output)@p")
@regex("")
export class ApexAssertionsShouldIncludeMessage extends ScanRule {
  validateNode(node: Parser.SyntaxNode): ScanResult[] {
    const results: ScanResult[] = [];
    const assertMethodMap: Map<string, number> = new Map([
      ["areEqual", 3],
      ["areNotEqual", 3],
      ["fail", 1],
      ["isFalse", 2],
      ["isInstanceOfType", 3],
      ["isNotInstanceOfType", 3],
      ["isNotNull", 2],
      ["isNull", 2],
      ["isTrue", 2],
    ]);

    if (assertMethodMap.has(node.text)) {
      if (node.nextNamedSibling !== null) {
        const expected: number = assertMethodMap.get(node.text) ?? 0;
        const actual: number = node.nextNamedSibling.namedChildCount;

        if (expected !== actual) {
          const result: ScanResult = new ScanResult(this, ResultType.VIOLATION);
          results.push(result);
        }
      }
    }
    return results;
  }
}
