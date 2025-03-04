import { ScanRule } from 'cayce-types';
import Parser from 'tree-sitter';
import TsSfApex from 'tree-sitter-sfapex';

export interface CayceRuleTestConfig{
    RuleToTest: ScanRule;
    TargetSource: string;
    ExpectedResults: Parser.SyntaxNode[];
}


export default class CayceRuleTest{
    expectedResuls: Parser.SyntaxNode[];
    rule: ScanRule;
    targetSource: string;

    constructor(testConfig: CayceRuleTestConfig){
        this.expectedResuls = testConfig.ExpectedResults;
        this.rule = testConfig.RuleToTest;
        this.targetSource = testConfig.TargetSource;
    }

    public executeTest(): CayceTestResult{
        const parser: Parser = new Parser();
        parser.setLanguage(TsSfApex.apex);
        const rootTree = parser.parse(this.targetSource);
        return {
            ActualNodes: [],
            ExpectedNodes: [],
            Pass: true
        };

    }
}

export interface CayceTestResult{
    ActualNodes: Parser.SyntaxNode[];
    ExpectedNodes: Parser.SyntaxNode[];
    Pass: boolean;
}