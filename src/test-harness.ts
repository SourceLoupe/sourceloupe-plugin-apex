import TsSfApex from 'tree-sitter-sfapex';
import { ShortIdentifierLengths } from './rules/ShortIdentifierLengths.js';
import ScanManager from './ScanManager.js';
import Parser, { Language } from 'tree-sitter';
import { AllIdentifierLengths } from './rules/AllIdentifierLengths.js';
import fs from 'fs';
import { filenames } from './files.js';


const parser: Parser = new Parser();
const language: Language = TsSfApex.apex;

// const opt: ScannerOptions = {
//     overrideQuery: '',
//     sourcePath: './apex/Test.cls',
//     language: language,
//     rules: [new ShortIdentifierLengths(), new AllIdentifierLengths()],
// };
//
// Scanner.create(opt)
//     .then((s) => {
//         void s.run().then((res) => console.log(res));
//     })
//     .catch(() => console.log('ERROR'))
//     .finally(() => console.log('FINALLY'));

// const mgr: ScanManager = new ScanManager(parser, language, data, [
//     new ShortIdentifierLengths(),
//     new AllIdentifierLengths(),
// ]);
//
// mgr.scan()
//     .then((results) => {
//         results.forEach((result) => {
//             console.log(`${result.rule.Name}:${result.sourceNode.text}`);
//         });
//     })
//     .catch(() => console.log('ERROR'));

const myConsole = new console.Console(fs.createWriteStream('./output.txt'));

myConsole.time('Parse');

filenames.forEach(filename => {runTest(filename)});

myConsole.timeEnd('Parse');

function runTest(fname: string){
    let filename = fname;
    let data = fs.readFileSync(filename, { encoding: 'utf8', flag: 'r' });
    let mgr: ScanManager = new ScanManager(parser,
        data,
        [
            new AllIdentifierLengths(),
            new ShortIdentifierLengths(),
        ]);
    mgr.scan()
        .then((results) => {
            myConsole.log(fname);
            results.forEach((result) => {
                myConsole.log(`${result.rule.Name}:${result.sourceNode.text}`);
            });
        })
        .catch(() => myConsole.log('ERROR'));

}