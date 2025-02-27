import { Scanner, ScannerOptions } from 'cayce-core';
import TsSfApex from 'tree-sitter-sfapex';
import ApexPlugin from './index.js';
import { ApexAssertionsShouldIncludeMessage } from './rules/ApexAssertionsShouldIncludeMessage.js';

const plugin = new ApexPlugin();

const options: ScannerOptions = {
    language: TsSfApex.apex,
    rules: [new ApexAssertionsShouldIncludeMessage()],
    sourcePath: './apex/Test.cls',
};

void Scanner.create(options).then((sc) =>
    sc.run().then((r) => {
        console.log(r);
    })
);
