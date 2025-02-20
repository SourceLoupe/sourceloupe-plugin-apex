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

@name("OperationWithLimitsInLoop")
@category("performance")
@context("scan")
@suggestion("")
@message("Avoid operations in loops that may hit governor limits")
@priority(3)
@query("(parser_output)@p")
@regex("")
export class OperationWithLimitsInLoop extends ScanRule {}
