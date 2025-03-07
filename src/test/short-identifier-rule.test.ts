// my-function.test.ts
import { ShortIdentifierLengths } from '../rules/ShortIdentifierLengths.js';
import { CayceBaseRuleTest, CayceRuleTestData } from './cayce-rule-test.js';


export const ShortIdentifierLengthsPositiveTestData: CayceRuleTestData = {
    name: 'All variables that have a name length less than three.',
    ruleInstance: new ShortIdentifierLengths(),
    enabled: true,
    expectedResults: [
        'variable_declarator'
    ],
    sourceToTest: `
    public class Foo{
        public Foo(){
            Integer goodVariableName = 0;
            Integer bv = 1;
        }
    }`,

};

describe('ShortIdentifierLengths', () => {
    it('Expected and actual values should match', () => {
        const testRule: CayceBaseRuleTest = new CayceBaseRuleTest(ShortIdentifierLengthsPositiveTestData);
        expect(testRule.assertTest().length).toBe(0);
    });
});