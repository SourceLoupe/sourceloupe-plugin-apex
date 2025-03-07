# cayce-plugin-apex
This package contains rules for the cayce static analysis tool that pertain to the Apex programming language. The rules have been gathered from a small group of sources (personal experience and PMD's existing ruleset for starters.)

Please see the cayce-core repository, or take a look at the GitHub org [CayceCodes](https://github.com/caycecodes).

## Tree-Sitter Queries
Generally speaking, Cayce relies on tree-sitter queries in order to identify source that may or may not need remediation. Tree-sitter is a concrete syntax tree alternative to the more common abstract syntax tree that is provided by parser generators such as ANTLR4.

Tree-sitter's queries are constructed as s-expressions, similar to languages like Lisp. Identifiers are sourrounded by parenthesis and the heirarchy is defined by the nesting of those containers. The identifiers used to pinpoin specific nodes in the source tree are not specific to tree-sitter. Those node type names (and any tokens used to parse the source) are defined in the grammar that was created to support a specific language, such as Apex.

Consider the following query:
```lisp
(variable_declarator name: (identifier) @variableName (#match? @variableName "[0-9]"))`
```
This query will retrieve all variable names that contain numbers. If you require a rule that flags variable names that contain numbers, this would be your query in the custom ruke you created (or in an existing rule, as the case may be.)
`variable_declarator` is the node type name, or 'grammar type' for the inner declaration of a variable. This excludes the data type of the variable, as that is included in the parent `local_variable_declaration` grammar type.

So, if that query is run against the following source:
```apex
Integer foo1 = 1;
```
It would return the variable name's syntax node, foo1.

That query also highlights some of the features built in to the query language:

* Names (or 'capture names'): These are variables you assign to nodes that you want to capture for further inspection or reporting. In this query, @variableName is a capture name.
* Predecates: `#match?` is an example of a predicate. That particular one is for matching against a regular expression. You can prefix any predicate with `not-` as in `#not-match?` to do a negative test. Another predicate of note is `#eq?` which tests for an exact match (or no match if it's written as `#not-eq?`). Predacates are written as follows:
```lisp
(#predicate-name? @captureName "what_to_test_against")
```
That predicate statement should come directly after the capture name is declared and assigned to a given node...in this case, we assign it to the `identifier` node that contains the name. `name:` is where we distinguish this identifier as being the variable name as opposed to other nodes in our query's heirarchy wuth the same grammar name.

For further reference, check out the tree-sitter [query documentation](https://tree-sitter.github.io/py-tree-sitter/classes/tree_sitter.Query.html), and it is prudent to use a tree-sitter [playground](https://aheber.github.io/tree-sitter-sfapex/playground/) (usually created for every language with a tree sitter module) to validated your queries.


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

