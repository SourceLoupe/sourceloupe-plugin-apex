import { category, context, message, name, priority, query, regex, ScanRule, suggestion } from 'cayce-types';
import TreeSitter, { QueryCapture } from 'tree-sitter';
import Parser from 'tree-sitter';

@name('Short')
@category('codestyle')
@context('measure')
@message('All short identifiers')
@suggestion('Increase the length of the identifier')
@priority(3)
@query(
    `(formal_parameter name: (identifier)@short 
        (#match? @short "^[A-Za-z0-9_]{1,2}$"))
     (variable_declarator name: (identifier)@short 
        (#match? @short "^[A-Za-z0-9_]{1,2}$"))`
)
@regex('')
export class ShortIdentifierLengths extends ScanRule {
    public validateQuery(
        query: TreeSitter.Query,
        rootNode: Parser.SyntaxNode,
        _targetCaptureName?: string,
        _targetMatchIndex?: number
    ): Parser.SyntaxNode[] {
        const results: Parser.SyntaxNode[] = [];
        const captures: QueryCapture[] = query.captures(rootNode);
        captures.forEach((capture) => {
            results.push(capture.node);
        });
        return results;
    }
}
