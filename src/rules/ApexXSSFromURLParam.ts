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

@name("ApexXSSFromURLParam")
@category("security")
@context("scan")
@message(
  "Apex classes should escape/sanitize Strings obtained from URL parameters",
)
@suggestion("")
@priority(3)
@query("(parser_output)@p")
@regex("")
export class ApexXSSFromURLParam extends ScanRule {}
