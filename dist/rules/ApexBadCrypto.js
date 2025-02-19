"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApexBadCrypto = void 0;
const sourceloupe_types_1 = require("sourceloupe-types");
const RulePolyfills_1 = require("./RulePolyfills");
let ApexBadCrypto = (() => {
    let _classDecorators = [(0, sourceloupe_types_1.name)("ApexBadCrypto"), (0, sourceloupe_types_1.category)("security"), (0, sourceloupe_types_1.context)("scan"), (0, sourceloupe_types_1.message)("Apex classes should use random IV/key"), (0, sourceloupe_types_1.suggestion)(""), (0, sourceloupe_types_1.priority)(3), (0, sourceloupe_types_1.query)('(method_invocation object:(identifier) @object (#match? @object "Crypto") name: (identifier) @method (#match? @method "encrypt|decrypt") (argument_list)@args)'), (0, sourceloupe_types_1.regex)("")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sourceloupe_types_1.ScanRule;
    var ApexBadCrypto = _classThis = class extends _classSuper {
        validateNode(node) {
            const results = [];
            // Get all variables that use managed IV and generateAES
            const varNames = [];
            const allGoodCryptoCalls = '(variable_declarator name:(identifier) @varname value: (method_invocation object:(identifier) @object (#match? @object "Crypto") name: (identifier) @method (#match? @method "generateAesKey|encryptWithManagedIV")))';
            const allEncryptDecryptCalls = '(method_invocation object:(identifier) @object (#match? @object "Crypto") name: (identifier) @method (#match? @method "encrypt|decrypt") (argument_list) @args)';
            const goodCryptoGenList = (0, RulePolyfills_1.adHocQuery)(allGoodCryptoCalls, node, true);
            const encryptDecryptCallList = (0, RulePolyfills_1.adHocQuery)(allEncryptDecryptCalls, node, true);
            goodCryptoGenList.forEach(goodCryptIteration => {
                if (goodCryptIteration.name == "varname") {
                    varNames.push(goodCryptIteration.node.text);
                }
            });
            encryptDecryptCallList.forEach(encryptDecryptIteration => {
                const keyNode = encryptDecryptIteration.node.namedChildren[1];
                const ivNode = encryptDecryptIteration.node.namedChildren[2];
                if (keyNode.grammarType == "string_literal" ||
                    (keyNode.grammarType == "identifier" &&
                        !varNames.includes(keyNode.text))) {
                    results.push(new sourceloupe_types_1.ScanResult(this, sourceloupe_types_1.ResultType.VIOLATION));
                }
            });
            return results;
        }
    };
    __setFunctionName(_classThis, "ApexBadCrypto");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ApexBadCrypto = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ApexBadCrypto = _classThis;
})();
exports.ApexBadCrypto = ApexBadCrypto;
