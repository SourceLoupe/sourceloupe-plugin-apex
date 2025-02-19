import { ScanRule, SourceLoupePlugin } from 'sourceloupe-types';
import { ApexAssertionsShouldIncludeMessage } from './rules/ApexAssertionsShouldIncludeMessage';
import { ApexBadCrypto } from './rules/ApexBadCrypto';
import { ApexCRUDViolation } from './rules/ApexCRUDViolation';
import { ApexCSRF } from './rules/ApexCSRF';
import { ApexDangerousMethods } from './rules/ApexDangerousMethods';
import { ApexInsecureEndpoint } from './rules/ApexInsecureEndpoint';
import { ApexSharingViolations } from './rules/ApexSharingViolations';
import { ApexSOQLInjection } from './rules/ApexSOQLInjection';
import { ApexSuggestUsingNamedCred } from './rules/ApexSuggestUsingNamedCred';
import { ApexUnitTestClassShouldHaveAsserts } from './rules/ApexUnitTestClassShouldHaveAsserts';
import { ApexUnitTestClassShouldHaveRunAs } from './rules/ApexUnitTestClassShouldHaveRunAs';
import { ApexUnitTestMethodShouldHaveIsTestAnnotation } from './rules/ApexUnitTestMethodShouldHaveIsTestAnnotation';
import { ApexUnitTestShouldNotUseSeeAllDataTrue } from './rules/ApexUnitTestShouldNotUseSeeAllDataTrue';
import { ApexXSSFromEscapeFalse } from './rules/ApexXSSFromEscapeFalse';
import { ApexXSSFromURLParam } from './rules/ApexXSSFromURLParam';
import { AvoidDebugStatements } from './rules/AvoidDebugStatements';
import { AvoidDeeplyNestedIfStmts } from './rules/AvoidDeeplyNestedIfStmts';
import { AvoidGlobalModifier } from './rules/AvoidGlobalModifier';
import { AvoidHardcodingId } from './rules/AvoidHardcodingId';
import { AvoidNonRestrictiveQueries } from './rules/AvoidNonRestrictiveQueries';
import { ClassHeaderComment } from './rules/ClassHeaderComment';
import { ClassNamingConventions } from './rules/ClassNamingConventions';
import { CognitiveComplexity } from './rules/CognitiveComplexity';
import { CyclomaticComplexity } from './rules/CyclomaticComplexity';
import { EagerlyLoadedDescribeSObjectResult } from './rules/EagerlyLoadedDescribeSObjectResult';
import { EmptyCatchBlock } from './rules/EmptyCatchBlock';
import { EmptyIfStmt } from './rules/EmptyIfStmt';
import { EmptyStatementBlock } from './rules/EmptyStatementBlock';
import { EmptyTryOrFinallyBlock } from './rules/EmptyTryOrFinallyBlock';
import { EmptyWhileStmt } from './rules/EmptyWhileStmt';
import { ExcessiveClassLength } from './rules/ExcessiveClassLength';
import { ExcessiveParameterList } from './rules/ExcessiveParameterList';
import { ExcessivePublicCount } from './rules/ExcessivePublicCount';
import { FieldDeclarationsShouldBeAtStart } from './rules/FieldDeclarationsShouldBeAtStart';
import { FieldNamingConventions } from './rules/FieldNamingConventions';
import { ForLoopsMustUseBraces } from './rules/ForLoopsMustUseBraces';
import { FormalParameterNamingConventions } from './rules/FormalParameterNamingConventions';
import { IfElseStmtsMustUseBraces } from './rules/IfElseStmtsMustUseBraces';
import { IfStmtsMustUseBraces } from './rules/IfStmtsMustUseBraces';
import { InaccessibleAuraEnabledGetter } from './rules/InaccessibleAuraEnabledGetter';
import { LocalVariableNamingConventions } from './rules/LocalVariableNamingConventions';
import { MethodHeaderComment } from './rules/MethodHeaderComment';
import { MethodNamingConventions } from './rules/MethodNamingConventions';
import { MethodWithSameNameAsEnclosingClass } from './rules/MethodWithSameNameAsEnclosingClass';
import { NamingRule } from './rules/NamingRule';
import { NcssConstructorCount } from './rules/NcssConstructorCount';
import { NcssMethodCount } from './rules/NcssMethodCount';
import { NcssTypeCount } from './rules/NcssTypeCount';
import { OneDeclarationPerLine } from './rules/OneDeclarationPerLine';
import { OperationWithHighCostInLoop } from './rules/OperationWithHighCostInLoop';
import { OperationWithLimitsInLoop } from './rules/OperationWithLimitsInLoop';
import { OverrideBothEqualsAndHashcode } from './rules/OverrideBothEqualsAndHashcode';
import { PropertyNamingConventions } from './rules/PropertyNamingConventions';
import { QueueableWithoutFinalizer } from './rules/QueueableWithoutFinalizer';
import { StdCyclomaticComplexity } from './rules/StdCyclomaticComplexity';
import { TestMethodsMustBeInTestClasses } from './rules/TestMethodsMustBeInTestClasses';
import { TooManyFields } from './rules/TooManyFields';
import { UnusedLocalVariable } from './rules/UnusedLocalVariable';
import { UnusedMethod } from './rules/UnusedMethod';
import { WhileLoopsMustUseBraces } from './rules/WhileLoopsMustUseBraces';

export default class ApexPlugin extends SourceLoupePlugin {
    getRules(): ScanRule[] {
        return [
            new ApexAssertionsShouldIncludeMessage(),
            new ApexBadCrypto(),
            new ApexCRUDViolation(),
            new ApexCSRF(),
            new ApexDangerousMethods(),
            new ApexInsecureEndpoint(),
            new ApexSharingViolations(),
            new ApexSOQLInjection(),
            new ApexSuggestUsingNamedCred(),
            new ApexUnitTestClassShouldHaveAsserts(),
            new ApexUnitTestClassShouldHaveRunAs(),
            new ApexUnitTestMethodShouldHaveIsTestAnnotation(),
            new ApexUnitTestShouldNotUseSeeAllDataTrue(),
            new ApexXSSFromEscapeFalse(),
            new ApexXSSFromURLParam(),
            new AvoidDebugStatements(),
            new AvoidDeeplyNestedIfStmts(),
            new AvoidGlobalModifier(),
            new AvoidHardcodingId(),
            new AvoidNonRestrictiveQueries(),
            new ClassHeaderComment(),
            new ClassNamingConventions(),
            new CognitiveComplexity(),
            new CyclomaticComplexity(),
            new EagerlyLoadedDescribeSObjectResult(),
            new EmptyCatchBlock(),
            new EmptyIfStmt(),
            new EmptyStatementBlock(),
            new EmptyTryOrFinallyBlock(),
            new EmptyWhileStmt(),
            new ExcessiveClassLength(),
            new ExcessiveParameterList(),
            new ExcessivePublicCount(),
            new FieldDeclarationsShouldBeAtStart(),
            new FieldNamingConventions(),
            new ForLoopsMustUseBraces(),
            new FormalParameterNamingConventions(),
            new IfElseStmtsMustUseBraces(),
            new IfStmtsMustUseBraces(),
            new InaccessibleAuraEnabledGetter(),
            new LocalVariableNamingConventions(),
            new MethodHeaderComment(),
            new MethodNamingConventions(),
            new MethodWithSameNameAsEnclosingClass(),
            new NamingRule(),
            new NcssConstructorCount(),
            new NcssMethodCount(),
            new NcssTypeCount(),
            new OneDeclarationPerLine(),
            new OperationWithHighCostInLoop(),
            new OperationWithLimitsInLoop(),
            new OverrideBothEqualsAndHashcode(),
            new PropertyNamingConventions(),
            new QueueableWithoutFinalizer(),
            new StdCyclomaticComplexity(),
            new TestMethodsMustBeInTestClasses(),
            new TooManyFields(),
            new UnusedLocalVariable(),
            new UnusedMethod(),
            new WhileLoopsMustUseBraces(),
        ];
    }
}
