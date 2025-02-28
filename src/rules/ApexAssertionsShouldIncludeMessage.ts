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
} from 'cayce-types';
import Parser from 'tree-sitter';
import { QueryCapture, QueryMatch } from 'tree-sitter';
import TreeSitter from 'tree-sitter';

@name('ApexAssertionsShouldIncludeMessage')
@category('bestpractices')
@context('scan')
@message('Apex test assert statement should make use of the message parameter.')
@suggestion('')
@priority(3)
@query(
    '(method_invocation  object: (identifier) @objectname (#match? @objectname "Assert") name: (identifier) @methodname (argument_list) @args)'
)
@regex('')
export class ApexAssertionsShouldIncludeMessage extends ScanRule {
    //TODO: Log Completed
    public validateQuery(
        query: TreeSitter.Query,
        rootNode: Parser.SyntaxNode,
        _targetCaptureName?: string,
        _targetMatchIndex?: number
    ): Parser.SyntaxNode[] {
        console.log(rootNode.text);
        const results: Parser.SyntaxNode[] = [];
        const matches: QueryMatch[] = query.matches(rootNode);

        if (matches.length == 0) {
            return results;
        }

        const captures: QueryCapture[] = matches[0].captures;
        console.log(captures.length);
        captures.forEach((capture) => {
            if (capture.name == 'methodname') {
                const assertMethodMap: Map<string, number> = new Map([
                    ['areEqual', 3],
                    ['areNotEqual', 3],
                    ['fail', 1],
                    ['isFalse', 2],
                    ['isInstanceOfType', 3],
                    ['isNotInstanceOfType', 3],
                    ['isNotNull', 2],
                    ['isNull', 2],
                    ['isTrue', 2],
                ]);
                if (assertMethodMap.has(capture.node.text)) {
                    const expected = assertMethodMap.get(capture.node.text) ?? 0;
                    const actual: number = capture.node.nextNamedSibling?.namedChildCount ?? 0;
                    if (expected != actual) {
                        results.push(capture.node);
                    }
                }
            }
        });

        return results;
    }
}
