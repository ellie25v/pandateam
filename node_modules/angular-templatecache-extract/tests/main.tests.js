import test from 'ava';
import { readFile } from 'fs';
import Promise from 'bluebird';
import angularTemplatecacheExtract from '../src/index';

test(
  'Should return html code from angular templateCache',
  t => Promise.promisify(readFile)(`${__dirname}/angularapp.js`)
    .then(file => angularTemplatecacheExtract(file.toString()))
    .then((result) => {
      t.deepEqual(result, ['<div>Test1</div>', '<div>Test2</div>']);
    }),
);
