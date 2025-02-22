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
} from 'sourceloupe-types';
import Parser from 'tree-sitter';
import TreeSitter from 'tree-sitter';
import { adHocQuery } from './RulePolyfills.js';

@name('ApexBadCrypto')
@category('security')
@context('scan')
@message('Apex classes should use random IV/key')
@suggestion('')
@priority(3)
@query(
    '(method_invocation object:(identifier) @object (#match? @object "Crypto") name: (identifier) @method (#match? @method "encrypt|decrypt") (argument_list)@args)'
)
@regex('')
export class ApexBadCrypto extends ScanRule {
    validateNode(node: Parser.SyntaxNode): ScanResult[] {
        const results: ScanResult[] = [];

        // Get all variables that use managed IV and generateAES
        const varNames: string[] = [];

        const allGoodCryptoCalls: string =
            '(variable_declarator name:(identifier) @varname value: (method_invocation object:(identifier) @object (#match? @object "Crypto") name: (identifier) @method (#match? @method "generateAesKey|encryptWithManagedIV")))';
        const allEncryptDecryptCalls: string =
            '(method_invocation object:(identifier) @object (#match? @object "Crypto") name: (identifier) @method (#match? @method "encrypt|decrypt") (argument_list) @args)';
        const goodCryptoGenList: TreeSitter.QueryCapture[] = adHocQuery(allGoodCryptoCalls, node, true);
        const encryptDecryptCallList: TreeSitter.QueryCapture[] = adHocQuery(allEncryptDecryptCalls, node, true);
        goodCryptoGenList.forEach((goodCryptIteration) => {
            if (goodCryptIteration.name == 'varname') {
                varNames.push(goodCryptIteration.node.text);
            }
        });

        encryptDecryptCallList.forEach((encryptDecryptIteration) => {
            const keyNode: Parser.SyntaxNode = encryptDecryptIteration.node.namedChildren[1];
            const _ivNode: Parser.SyntaxNode = encryptDecryptIteration.node.namedChildren[2];

            if (
                keyNode.grammarType == 'string_literal' ||
                (keyNode.grammarType == 'identifier' && !varNames.includes(keyNode.text))
            ) {
                results.push(new ScanResult(this, ResultType.VIOLATION));
            }
        });

        return results;
    }
}
