import { ScanRule, SourceLoupeBasePlugin, SourceLoupePlugin } from 'sourceloupe-types';
import { ApexAssertionsShouldIncludeMessage } from './rules/ApexAssertionsShouldIncludeMessage.js';
import { ApexBadCrypto } from './rules/ApexBadCrypto.js';
import { ApexCRUDViolation } from './rules/ApexCRUDViolation.js';
import { ApexCSRF } from './rules/ApexCSRF.js';
import { ApexDangerousMethods } from './rules/ApexDangerousMethods.js';
import { ApexInsecureEndpoint } from './rules/ApexInsecureEndpoint.js';
import { ApexSharingViolations } from './rules/ApexSharingViolations.js';
import { ApexSOQLInjection } from './rules/ApexSOQLInjection.js';
import { ApexSuggestUsingNamedCred } from './rules/ApexSuggestUsingNamedCred.js';
import { ApexUnitTestClassShouldHaveAsserts } from './rules/ApexUnitTestClassShouldHaveAsserts.js';
import { ApexUnitTestClassShouldHaveRunAs } from './rules/ApexUnitTestClassShouldHaveRunAs.js';
import { ApexUnitTestMethodShouldHaveIsTestAnnotation } from './rules/ApexUnitTestMethodShouldHaveIsTestAnnotation.js';
import { ApexUnitTestShouldNotUseSeeAllDataTrue } from './rules/ApexUnitTestShouldNotUseSeeAllDataTrue.js';
import { ApexXSSFromEscapeFalse } from './rules/ApexXSSFromEscapeFalse.js';
import { ApexXSSFromURLParam } from './rules/ApexXSSFromURLParam.js';
import { AvoidDebugStatements } from './rules/AvoidDebugStatements.js';
import { AvoidDeeplyNestedIfStmts } from './rules/AvoidDeeplyNestedIfStmts.js';
import { AvoidGlobalModifier } from './rules/AvoidGlobalModifier.js';
import { AvoidHardcodingId } from './rules/AvoidHardcodingId.js';
import { AvoidNonRestrictiveQueries } from './rules/AvoidNonRestrictiveQueries.js';
import { ClassHeaderComment } from './rules/ClassHeaderComment.js';
import { ClassNamingConventions } from './rules/ClassNamingConventions.js';
import { CognitiveComplexity } from './rules/CognitiveComplexity.js';
import { CyclomaticComplexity } from './rules/CyclomaticComplexity.js';
import { EagerlyLoadedDescribeSObjectResult } from './rules/EagerlyLoadedDescribeSObjectResult.js';
import { EmptyCatchBlock } from './rules/EmptyCatchBlock.js';
import { EmptyIfStmt } from './rules/EmptyIfStmt.js';
import { EmptyStatementBlock } from './rules/EmptyStatementBlock.js';
import { EmptyTryOrFinallyBlock } from './rules/EmptyTryOrFinallyBlock.js';
import { EmptyWhileStmt } from './rules/EmptyWhileStmt.js';
import { ExcessiveClassLength } from './rules/ExcessiveClassLength.js';
import { ExcessiveParameterList } from './rules/ExcessiveParameterList.js';
import { ExcessivePublicCount } from './rules/ExcessivePublicCount.js';
import { FieldDeclarationsShouldBeAtStart } from './rules/FieldDeclarationsShouldBeAtStart.js';
import { FieldNamingConventions } from './rules/FieldNamingConventions.js';
import { ForLoopsMustUseBraces } from './rules/ForLoopsMustUseBraces.js';
import { FormalParameterNamingConventions } from './rules/FormalParameterNamingConventions.js';
import { IfElseStmtsMustUseBraces } from './rules/IfElseStmtsMustUseBraces.js';
import { IfStmtsMustUseBraces } from './rules/IfStmtsMustUseBraces.js';
import { InaccessibleAuraEnabledGetter } from './rules/InaccessibleAuraEnabledGetter.js';
import { LocalVariableNamingConventions } from './rules/LocalVariableNamingConventions.js';
import { MethodHeaderComment } from './rules/MethodHeaderComment.js';
import { MethodNamingConventions } from './rules/MethodNamingConventions.js';
import { MethodWithSameNameAsEnclosingClass } from './rules/MethodWithSameNameAsEnclosingClass.js';
import { NamingRule } from './rules/NamingRule.js';
import { NcssConstructorCount } from './rules/NcssConstructorCount.js';
import { NcssMethodCount } from './rules/NcssMethodCount.js';
import { NcssTypeCount } from './rules/NcssTypeCount.js';
import { OneDeclarationPerLine } from './rules/OneDeclarationPerLine.js';
import { OperationWithHighCostInLoop } from './rules/OperationWithHighCostInLoop.js';
import { OperationWithLimitsInLoop } from './rules/OperationWithLimitsInLoop.js';
import { OverrideBothEqualsAndHashcode } from './rules/OverrideBothEqualsAndHashcode.js';
import { PropertyNamingConventions } from './rules/PropertyNamingConventions.js';
import { QueueableWithoutFinalizer } from './rules/QueueableWithoutFinalizer.js';
import { StdCyclomaticComplexity } from './rules/StdCyclomaticComplexity.js';
import { TestMethodsMustBeInTestClasses } from './rules/TestMethodsMustBeInTestClasses.js';
import { TooManyFields } from './rules/TooManyFields.js';
import { UnusedLocalVariable } from './rules/UnusedLocalVariable.js';
import { UnusedMethod } from './rules/UnusedMethod.js';
import { WhileLoopsMustUseBraces } from './rules/WhileLoopsMustUseBraces.js';

export default class ApexPlugin extends SourceLoupeBasePlugin implements SourceLoupePlugin {
    constructor() {
        super();
        console.log('ApexPlugin constructor');
    }

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
