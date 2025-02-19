import Parser from "tree-sitter";
import TreeSitter from "tree-sitter";
import Query from "tree-sitter";
import TsSfApex from "tree-sitter-sfapex";

export function getFieldValuesForQuery(treeSitterQuery: string, fieldName: string, startFromNode: Parser.SyntaxNode): Map<string,Parser.SyntaxNode[]>{
    const resultMap = new Map<string, Parser.SyntaxNode[]>();

    let query: TreeSitter.Query;
    let globalCaptures: Query.QueryCapture[];
    query = new TreeSitter.Query(TsSfApex.apex, treeSitterQuery);
    globalCaptures = query.captures(startFromNode);
    globalCaptures.forEach(captureInstance=>{
        const newArray: Parser.SyntaxNode[] = resultMap.get(captureInstance.name) ?? [];
        newArray.push(captureInstance.node);
        resultMap.set(captureInstance.name, newArray);
    });
    return resultMap;
}

export function adHocQuery(treeSitterQuery: string, startFromNode: Parser.SyntaxNode, fromRootParent: boolean): TreeSitter.QueryCapture[]{
    const workingNode = fromRootParent ? getParentNode(startFromNode) : startFromNode;
    let query: TreeSitter.Query;
    let globalCaptures: Query.QueryCapture[];
    query = new TreeSitter.Query(TsSfApex.apex, treeSitterQuery);
    globalCaptures = query.captures(startFromNode);

    return globalCaptures;

}

export function getParentNode(node: Parser.SyntaxNode):Parser.SyntaxNode{
    while(node.parent != null){
        node = node.parent;
    }
    return node;
}