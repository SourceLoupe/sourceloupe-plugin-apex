"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sourceloupe_types_1 = require("sourceloupe-types");
const ApexAssertionsShouldIncludeMessage_1 = require("./rules/ApexAssertionsShouldIncludeMessage");
const ApexBadCrypto_1 = require("./rules/ApexBadCrypto");
const ApexCRUDViolation_1 = require("./rules/ApexCRUDViolation");
const ApexCSRF_1 = require("./rules/ApexCSRF");
const ApexDangerousMethods_1 = require("./rules/ApexDangerousMethods");
const ApexInsecureEndpoint_1 = require("./rules/ApexInsecureEndpoint");
const ApexSharingViolations_1 = require("./rules/ApexSharingViolations");
const ApexSOQLInjection_1 = require("./rules/ApexSOQLInjection");
const ApexSuggestUsingNamedCred_1 = require("./rules/ApexSuggestUsingNamedCred");
const ApexUnitTestClassShouldHaveAsserts_1 = require("./rules/ApexUnitTestClassShouldHaveAsserts");
const ApexUnitTestClassShouldHaveRunAs_1 = require("./rules/ApexUnitTestClassShouldHaveRunAs");
const ApexUnitTestMethodShouldHaveIsTestAnnotation_1 = require("./rules/ApexUnitTestMethodShouldHaveIsTestAnnotation");
const ApexUnitTestShouldNotUseSeeAllDataTrue_1 = require("./rules/ApexUnitTestShouldNotUseSeeAllDataTrue");
const ApexXSSFromEscapeFalse_1 = require("./rules/ApexXSSFromEscapeFalse");
const ApexXSSFromURLParam_1 = require("./rules/ApexXSSFromURLParam");
const AvoidDebugStatements_1 = require("./rules/AvoidDebugStatements");
const AvoidDeeplyNestedIfStmts_1 = require("./rules/AvoidDeeplyNestedIfStmts");
const AvoidGlobalModifier_1 = require("./rules/AvoidGlobalModifier");
const AvoidHardcodingId_1 = require("./rules/AvoidHardcodingId");
const AvoidNonRestrictiveQueries_1 = require("./rules/AvoidNonRestrictiveQueries");
const ClassHeaderComment_1 = require("./rules/ClassHeaderComment");
const ClassNamingConventions_1 = require("./rules/ClassNamingConventions");
const CognitiveComplexity_1 = require("./rules/CognitiveComplexity");
const CyclomaticComplexity_1 = require("./rules/CyclomaticComplexity");
const EagerlyLoadedDescribeSObjectResult_1 = require("./rules/EagerlyLoadedDescribeSObjectResult");
const EmptyCatchBlock_1 = require("./rules/EmptyCatchBlock");
const EmptyIfStmt_1 = require("./rules/EmptyIfStmt");
const EmptyStatementBlock_1 = require("./rules/EmptyStatementBlock");
const EmptyTryOrFinallyBlock_1 = require("./rules/EmptyTryOrFinallyBlock");
const EmptyWhileStmt_1 = require("./rules/EmptyWhileStmt");
const ExcessiveClassLength_1 = require("./rules/ExcessiveClassLength");
const ExcessiveParameterList_1 = require("./rules/ExcessiveParameterList");
const ExcessivePublicCount_1 = require("./rules/ExcessivePublicCount");
const FieldDeclarationsShouldBeAtStart_1 = require("./rules/FieldDeclarationsShouldBeAtStart");
const FieldNamingConventions_1 = require("./rules/FieldNamingConventions");
const ForLoopsMustUseBraces_1 = require("./rules/ForLoopsMustUseBraces");
const FormalParameterNamingConventions_1 = require("./rules/FormalParameterNamingConventions");
const IfElseStmtsMustUseBraces_1 = require("./rules/IfElseStmtsMustUseBraces");
const IfStmtsMustUseBraces_1 = require("./rules/IfStmtsMustUseBraces");
const InaccessibleAuraEnabledGetter_1 = require("./rules/InaccessibleAuraEnabledGetter");
const LocalVariableNamingConventions_1 = require("./rules/LocalVariableNamingConventions");
const MethodHeaderComment_1 = require("./rules/MethodHeaderComment");
const MethodNamingConventions_1 = require("./rules/MethodNamingConventions");
const MethodWithSameNameAsEnclosingClass_1 = require("./rules/MethodWithSameNameAsEnclosingClass");
const NamingRule_1 = require("./rules/NamingRule");
const NcssConstructorCount_1 = require("./rules/NcssConstructorCount");
const NcssMethodCount_1 = require("./rules/NcssMethodCount");
const NcssTypeCount_1 = require("./rules/NcssTypeCount");
const OneDeclarationPerLine_1 = require("./rules/OneDeclarationPerLine");
const OperationWithHighCostInLoop_1 = require("./rules/OperationWithHighCostInLoop");
const OperationWithLimitsInLoop_1 = require("./rules/OperationWithLimitsInLoop");
const OverrideBothEqualsAndHashcode_1 = require("./rules/OverrideBothEqualsAndHashcode");
const PropertyNamingConventions_1 = require("./rules/PropertyNamingConventions");
const QueueableWithoutFinalizer_1 = require("./rules/QueueableWithoutFinalizer");
const StdCyclomaticComplexity_1 = require("./rules/StdCyclomaticComplexity");
const TestMethodsMustBeInTestClasses_1 = require("./rules/TestMethodsMustBeInTestClasses");
const TooManyFields_1 = require("./rules/TooManyFields");
const UnusedLocalVariable_1 = require("./rules/UnusedLocalVariable");
const UnusedMethod_1 = require("./rules/UnusedMethod");
const WhileLoopsMustUseBraces_1 = require("./rules/WhileLoopsMustUseBraces");
class ApexPlugin extends sourceloupe_types_1.SourceLoupePlugin {
  getRules() {
    return [
      new ApexAssertionsShouldIncludeMessage_1.ApexAssertionsShouldIncludeMessage(),
      new ApexBadCrypto_1.ApexBadCrypto(),
      new ApexCRUDViolation_1.ApexCRUDViolation(),
      new ApexCSRF_1.ApexCSRF(),
      new ApexDangerousMethods_1.ApexDangerousMethods(),
      new ApexInsecureEndpoint_1.ApexInsecureEndpoint(),
      new ApexSharingViolations_1.ApexSharingViolations(),
      new ApexSOQLInjection_1.ApexSOQLInjection(),
      new ApexSuggestUsingNamedCred_1.ApexSuggestUsingNamedCred(),
      new ApexUnitTestClassShouldHaveAsserts_1.ApexUnitTestClassShouldHaveAsserts(),
      new ApexUnitTestClassShouldHaveRunAs_1.ApexUnitTestClassShouldHaveRunAs(),
      new ApexUnitTestMethodShouldHaveIsTestAnnotation_1.ApexUnitTestMethodShouldHaveIsTestAnnotation(),
      new ApexUnitTestShouldNotUseSeeAllDataTrue_1.ApexUnitTestShouldNotUseSeeAllDataTrue(),
      new ApexXSSFromEscapeFalse_1.ApexXSSFromEscapeFalse(),
      new ApexXSSFromURLParam_1.ApexXSSFromURLParam(),
      new AvoidDebugStatements_1.AvoidDebugStatements(),
      new AvoidDeeplyNestedIfStmts_1.AvoidDeeplyNestedIfStmts(),
      new AvoidGlobalModifier_1.AvoidGlobalModifier(),
      new AvoidHardcodingId_1.AvoidHardcodingId(),
      new AvoidNonRestrictiveQueries_1.AvoidNonRestrictiveQueries(),
      new ClassHeaderComment_1.ClassHeaderComment(),
      new ClassNamingConventions_1.ClassNamingConventions(),
      new CognitiveComplexity_1.CognitiveComplexity(),
      new CyclomaticComplexity_1.CyclomaticComplexity(),
      new EagerlyLoadedDescribeSObjectResult_1.EagerlyLoadedDescribeSObjectResult(),
      new EmptyCatchBlock_1.EmptyCatchBlock(),
      new EmptyIfStmt_1.EmptyIfStmt(),
      new EmptyStatementBlock_1.EmptyStatementBlock(),
      new EmptyTryOrFinallyBlock_1.EmptyTryOrFinallyBlock(),
      new EmptyWhileStmt_1.EmptyWhileStmt(),
      new ExcessiveClassLength_1.ExcessiveClassLength(),
      new ExcessiveParameterList_1.ExcessiveParameterList(),
      new ExcessivePublicCount_1.ExcessivePublicCount(),
      new FieldDeclarationsShouldBeAtStart_1.FieldDeclarationsShouldBeAtStart(),
      new FieldNamingConventions_1.FieldNamingConventions(),
      new ForLoopsMustUseBraces_1.ForLoopsMustUseBraces(),
      new FormalParameterNamingConventions_1.FormalParameterNamingConventions(),
      new IfElseStmtsMustUseBraces_1.IfElseStmtsMustUseBraces(),
      new IfStmtsMustUseBraces_1.IfStmtsMustUseBraces(),
      new InaccessibleAuraEnabledGetter_1.InaccessibleAuraEnabledGetter(),
      new LocalVariableNamingConventions_1.LocalVariableNamingConventions(),
      new MethodHeaderComment_1.MethodHeaderComment(),
      new MethodNamingConventions_1.MethodNamingConventions(),
      new MethodWithSameNameAsEnclosingClass_1.MethodWithSameNameAsEnclosingClass(),
      new NamingRule_1.NamingRule(),
      new NcssConstructorCount_1.NcssConstructorCount(),
      new NcssMethodCount_1.NcssMethodCount(),
      new NcssTypeCount_1.NcssTypeCount(),
      new OneDeclarationPerLine_1.OneDeclarationPerLine(),
      new OperationWithHighCostInLoop_1.OperationWithHighCostInLoop(),
      new OperationWithLimitsInLoop_1.OperationWithLimitsInLoop(),
      new OverrideBothEqualsAndHashcode_1.OverrideBothEqualsAndHashcode(),
      new PropertyNamingConventions_1.PropertyNamingConventions(),
      new QueueableWithoutFinalizer_1.QueueableWithoutFinalizer(),
      new StdCyclomaticComplexity_1.StdCyclomaticComplexity(),
      new TestMethodsMustBeInTestClasses_1.TestMethodsMustBeInTestClasses(),
      new TooManyFields_1.TooManyFields(),
      new UnusedLocalVariable_1.UnusedLocalVariable(),
      new UnusedMethod_1.UnusedMethod(),
      new WhileLoopsMustUseBraces_1.WhileLoopsMustUseBraces(),
    ];
  }
}
exports.default = ApexPlugin;
