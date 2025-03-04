import { resultType, category, context, message, name, treeQuery, ScanRule, suggestion } from '../ScanRule.js';
import ScanResult from '../ScanResult.js';

@name('Variable/Parameter/Constant appropriate in length')
@category('codestyle')
@context('measure')
@message('All proper-length identifiers')
@suggestion('')
@resultType(3)
@treeQuery('(variable_declarator name: (identifier)@var (#match? @var "^.{3,2000}$"))' +
    '(formal_parameter name: (identifier)@param (#match? @param "^.{3,2000}$"))')
export class AllIdentifierLengths extends ScanRule {}
