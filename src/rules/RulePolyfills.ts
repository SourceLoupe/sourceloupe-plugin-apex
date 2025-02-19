import Parser from 'tree-sitter';
import TreeSitter from 'tree-sitter';
import TsSfApex from 'tree-sitter-sfapex';

export function getFieldValuesForQuery(
    treeSitterQuery: string,
    _fieldName: string,
    startFromNode: Parser.SyntaxNode
): Map<string, Parser.SyntaxNode[]> {
    const resultMap = new Map<string, Parser.SyntaxNode[]>();

    const query = new TreeSitter.Query(TsSfApex.apex, treeSitterQuery);
    const globalCaptures = query.captures(startFromNode);
    globalCaptures.forEach((captureInstance) => {
        const newArray: Parser.SyntaxNode[] = resultMap.get(captureInstance.name) ?? [];
        newArray.push(captureInstance.node);
        resultMap.set(captureInstance.name, newArray);
    });
    return resultMap;
}

export function adHocQuery(
    treeSitterQuery: string,
    startFromNode: Parser.SyntaxNode,
    fromRootParent: boolean
): TreeSitter.QueryCapture[] {
    const _workingNode = fromRootParent ? getParentNode(startFromNode) : startFromNode;
    const query = new TreeSitter.Query(TsSfApex.apex, treeSitterQuery);
    return query.captures(startFromNode);
}

export function getParentNode(node: Parser.SyntaxNode): Parser.SyntaxNode {
    while (node.parent != null) {
        node = node.parent;
    }
    return node;
}
