import TsSfApex from 'tree-sitter-sfapex';
import { ShortIdentifierLengths } from './rules/ShortIdentifierLengths.js';
import ScanManager from './ScanManager.js';
import { sourceCodeToScan } from './ScanManager.js';
import Parser, { Language } from 'tree-sitter';
import { Scanner, ScannerOptions } from 'cayce-core';
import { AllIdentifierLengths } from './rules/AllIdentifierLengths.js';

const parser: Parser = new Parser();
const language: Language = TsSfApex.apex;

const opt: ScannerOptions = {
    overrideQuery: '',
    sourcePath: './apex/Test.cls',
    language: language,
    rules: [new ShortIdentifierLengths(), new AllIdentifierLengths()],
};

Scanner.create(opt)
    .then((s) => s.run().then((res) => console.log(res)))
    .catch(() => console.log('ERROR'));

// const mgr: ScanManager = new ScanManager(parser, language, sourceCodeToScan, [new ShortIdentifierLengths()]);
//
// void mgr.scan().then((results) => {
//     console.log(results);
// });
