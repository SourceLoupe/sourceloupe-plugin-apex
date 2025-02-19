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

@name("ApexXSSFromEscapeFalse")
@category("security")
@context("scan")
@message("Apex classes should escape Strings in error messages")
@suggestion("")
@priority(3)
@query("(parser_output)@p")
@regex("")
export class ApexXSSFromEscapeFalse extends ScanRule {}
