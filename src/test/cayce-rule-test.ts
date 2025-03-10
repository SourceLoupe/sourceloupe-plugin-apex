import { ScanRule } from 'cayce-types';
import Parser from 'tree-sitter';
import TsSfApex from 'tree-sitter-sfapex';

/**
 * @description Simple unit test container for Cayce SCA rules. The interface is deliberately simple, as the unit tests are asserts based on what nodes are expected to be returned from a given rule if supplied with the sample source code. Both order, count and type name must match
 * @example
 * ```
 * {
 *      name: 'VariableNamesTooShortPositiveUnitTest',
 *      enabled: true,
 *      ruleInstance: new ShortVariableNames(),
 *      expectedResults: [
 *          'variable_declarator',
 *          'variable_declarator',
 *          'formal_parameter',
 *          'variable_declarator'],
 *      sourceToTest: `
 *      public class TestClass{
 *          public TestClass(){
 *              Integer a = 0;
 *              String b = '';
 *          }
 *
 *          public boolean validate(String s){
 *              String n = s.reverse();
 *
 *              return (n == 'foo');
 *          }
 *      }
 *      `
 * }
 * ```
 */
export interface CayceRuleTestData{
    name: string;
    enabled: boolean;
    ruleInstance: ScanRule;
    expectedResults: string[];
    sourceToTest: string;
}

export class CayceBaseRuleTest{
    configuration: CayceRuleTestData;

    getConfiguration(configuration: CayceRuleTestData){
        return this.configuration;
    }

    constructor(configuration: CayceRuleTestData){
        this.configuration = configuration;
    }

    assertTest(): string[]{
        const ruleUnderTest: ScanRule = this.configuration.ruleInstance;
        const parserInstance: Parser = new Parser();
        parserInstance.setLanguage(TsSfApex.apex);
        const ruleResults: Parser.SyntaxNode[] = ruleUnderTest.validate(this.configuration.sourceToTest, parserInstance);
        const unitTestErrors: string[] = [];
        for(let actualIndex = 0; actualIndex < ruleResults.length; ++actualIndex){
            const actual: string = ruleResults[actualIndex].grammarType;
            const expected: string = this.configuration.expectedResults[actualIndex];
            if(actual === expected){
                continue;
            }
            unitTestErrors.push(`The value at position ${actualIndex} is ${actual}, but the test expected ${expected}. Check the rule to ensure that the results are coming back in the proper order.`);
        }
        return unitTestErrors;

    }
}

