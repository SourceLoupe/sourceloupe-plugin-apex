"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFieldValuesForQuery = getFieldValuesForQuery;
exports.adHocQuery = adHocQuery;
exports.getParentNode = getParentNode;
const tree_sitter_1 = __importDefault(require("tree-sitter"));
const tree_sitter_sfapex_1 = __importDefault(require("tree-sitter-sfapex"));
function getFieldValuesForQuery(treeSitterQuery, fieldName, startFromNode) {
  const resultMap = new Map();
  let query;
  let globalCaptures;
  query = new tree_sitter_1.default.Query(
    tree_sitter_sfapex_1.default.apex,
    treeSitterQuery,
  );
  globalCaptures = query.captures(startFromNode);
  globalCaptures.forEach((captureInstance) => {
    var _a;
    const newArray =
      (_a = resultMap.get(captureInstance.name)) !== null && _a !== void 0
        ? _a
        : [];
    newArray.push(captureInstance.node);
    resultMap.set(captureInstance.name, newArray);
  });
  return resultMap;
}
function adHocQuery(treeSitterQuery, startFromNode, fromRootParent) {
  const workingNode = fromRootParent
    ? getParentNode(startFromNode)
    : startFromNode;
  let query;
  let globalCaptures;
  query = new tree_sitter_1.default.Query(
    tree_sitter_sfapex_1.default.apex,
    treeSitterQuery,
  );
  globalCaptures = query.captures(startFromNode);
  return globalCaptures;
}
function getParentNode(node) {
  while (node.parent != null) {
    node = node.parent;
  }
  return node;
}
