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

@name("PropertyNamingConventions")
@category("codestyle")
@context("scan")
@message("The {0} name ''{1}'' doesn''t match ''{2}''")
@suggestion("")
@priority(1)
@query(
  '(class_declaration name:(identifier) @classname (#not-match? @classname "[a-zA-Z0-9]*"))',
)
@regex("")
export class ClassNamingConventions extends ScanRule {
  validateNode(node: Parser.SyntaxNode): ScanResult[] {
    const results: ScanResult[] = [];
    console.log(node.startPosition);
    results.push(new ScanResult(this, ResultType.VIOLATION));
    return results;
  }
}
