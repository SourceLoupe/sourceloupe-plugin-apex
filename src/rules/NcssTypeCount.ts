
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
    suggestion
} from 'sourceloupe-types'
import Parser from "tree-sitter";
import * as TreeSitter from "tree-sitter";
import {NamingRule} from "./NamingRule";
@name("NcssTypeCount")
@category("design")
@context("scan")
@message("The type has an NCSS line count of {0}")
@suggestion("")
@priority(3)
@query("(parser_output)@p")
@regex("")
export class NcssTypeCount extends ScanRule {

}