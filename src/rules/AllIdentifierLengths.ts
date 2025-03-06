import { ruleSeverity, category, context, message, name, treeQuery, suggestion , ScanRule} from 'cayce-types';


@name('Variable/Parameter/Constant appropriate in length')
@category('codestyle')
@context('measure')
@message('All proper-length identifiers')
@suggestion('')
@ruleSeverity(3)
@treeQuery('(variable_declarator name: (identifier)@var (#match? @var "^.{3,2000}$"))' +
    '(formal_parameter name: (identifier)@param (#match? @param "^.{3,2000}$"))')
export class AllIdentifierLengths extends ScanRule {}
