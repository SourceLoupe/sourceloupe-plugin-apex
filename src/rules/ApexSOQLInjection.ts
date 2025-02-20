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
import { ResultType, ScanResult } from "sourceloupe-types";
import Parser from "tree-sitter";

@name("ApexSOQLInjection")
@category("security")
@context("scan")
@message("Avoid untrusted/unescaped variables in DML query")
@suggestion("")
@priority(3)
@query(
  '(method_invocation(identifier)@one(identifier)@two (#match? @one "Database") (#match? @two "query"))',
)
@regex("")
export class ApexSOQLInjection extends ScanRule {
  visitNodes(nodes: Parser.SyntaxNode[]): ScanResult[] {
    const results: ScanResult[] = [];
    const result: ScanResult = new ScanResult(this, ResultType.VIOLATION);
    results.push(result);
    return results;
  }
}
