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

@name("StdCyclomaticComplexity")
@category("design")
@context("scan")
@message("The {0} ''{1}'' has a Standard Cyclomatic Complexity of {2}.")
@suggestion("")
@priority(3)
@query("(parser_output)@p")
@regex("")
export class StdCyclomaticComplexity extends ScanRule {}
