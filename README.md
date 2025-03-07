# cayce-plugin-apex
This package contains rules for the cayce static analysis tool that pertain to the Apex programming language. The rules have been gathered from a small group of sources (personal experience and PMD's existing ruleset for starters.)

Please see the cayce-core repository, or take a look at the GitHub org [CayceCodes](https://github.com/caycecodes).

## Rule Format / Custom Rule Authoring
Since this is the first plugin for the Cayce tool, it is a good example for those looking to write their own language plugins or rules for existing languages.

### Custom Rules
Cayce rules all inherit from ScanRule in the cayce-types package. It provides a blueprint/functionality for annotatiuns and tree-sitter query execution.

#### Annotations
Annotations are the primary method used to configure Cayce rules. If implemented well, they can provide most (if not all) the functionality that a rule needs to function. The following is a list of the current set of annotations, their meanings, and any further information that might help you.

(WIP)

#### ScanRule
All rules also share a common superclass, ScanRule. This abstract class provides not only the framework for the annotations listed above, it provides the primary method used to filter through the results of a tree sitter query. The name of this method is `validate` and it is the most important part of a rule. It's also important to note that the plugin is the only component that cares about a specific language. The specific language implementation is irrelevant to the cli, core classes, and types. This means that when creating a new language module, the language's tree-sitter "adapter" package reference needs to live in the language's plugin class.

While building the tool, special attention was paid to the ability to 'analyze outside the box.' The validate method doesn't limit you to using tree-sitter specific (or even language specific) nodes. You can use regular expressions, plain old brute force parsing, even leverage an AST-approach via ANTLR's TypeScript support. The goal was to make sure there is a way to get to the inspections that matter without barriers, and trust you to implement things in a safe and sane manner.

#### Unit Testing
Cayce plugins follow a testing ethod similar to PMD: the tests themselves ccontain little code, and they rely on data to drive any assertions that need to be made in order to call a unit test passed. The following is an example of two unit test definitions:
```TypeScript
 {
       name: 'VariableNamesTooShortPositiveUnitTest',
       enabled: true,
       ruleInstance: new ShortVariableNames(),
       expectedResults: [
           'variable_declarator',
           'variable_declarator',
           'formal_parameter',
           'variable_declarator'],
       sourceToTest: `
       public class TestClass{
           public TestClass(){
               Integer a = 0;
               String b = '';
           }
 
           public boolean validate(String s){
               String n = s.reverse();
 
               return (n == 'foo');
           }
       }
       `
  }
```
