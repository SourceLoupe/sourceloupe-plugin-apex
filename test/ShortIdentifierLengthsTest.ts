import { ShortIdentifierLengths } from '../src/rules/ShortIdentifierLengths';

const ShortIdentifierLengthsTest: ScanRuleTest = {
    ruleUnderTest: new ShortIdentifierLengths(),
    expectedResults:[
        'formal_parameter',
        'variable_declarator',
        'variable_declarator',
        'variable_declarator',
        'variable_declarator',
    ],
    testSample: `
    public class Foo{
        // Some code here that would shoot back the above 
        // nodes (in that exact order) when the rule this points to is executed
    }`
}
