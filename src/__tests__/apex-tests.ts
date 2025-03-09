import { CayceRuleTestData } from './cayce-rule-test.js';
import { AllIdentifierLengths } from '../rules/AllIdentifierLengths.js';
import { ShortIdentifierLengths } from '../rules/ShortIdentifierLengths.js';

export const AllGoodVariablesPositiveTestData: CayceRuleTestData = {
    name: 'All variables that have a name length greater than two.',
    ruleInstance: new AllIdentifierLengths(),
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
    }`
};

