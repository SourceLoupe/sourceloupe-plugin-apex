import { category, context, message, name, priority, query, regex, ScanRule, suggestion } from 'cayce-types';
import TreeSitter, { QueryCapture } from 'tree-sitter';
import Parser from 'tree-sitter';

@name('AllIdentifierLengths')
@category('codestyle')
@context('measure')
@message('All proper-length identifiers')
@suggestion('')
@priority(3)
@query(
    '(formal_parameter name: (identifier)@ident (#match? @ident "^[A-Za-z0-9_]{3,}$"))(variable_declarator name: (identifier)@ident (#match? @ident "^[A-Za-z0-9_]{3,}$"))'
)
@regex('')
export class AllIdentifierLengths extends ScanRule {
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
