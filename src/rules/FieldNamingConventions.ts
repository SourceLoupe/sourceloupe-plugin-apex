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

@name("FieldNamingConventions")
@category("codestyle")
@context("scan")
@suggestion("")
@message("The {0} name ''{1}'' doesn''t match ''{2}''")
@priority(1)
@query(
  '(variable_declarator name:(identifier) @varname (#not-match? @varname "(VATEST?|[A-Z]{2,4})_[a-zA-Z0-9]*"))',
)
@regex("")
export class FieldNamingConventions extends NamingRule {}
