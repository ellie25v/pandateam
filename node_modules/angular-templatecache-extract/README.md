# angular-templatecache-extract

>Extract html from [Angular's templateCache statements](https://docs.angularjs.org/api/ng/service/$templateCache).

## Installation

This package is avalable from npm

    npm i angular-templatecache-extract --save

## Usage

```js
// your angular code
var myApp = angular.module('myApp', []);
myApp.run(function ($templateCache) {
  $templateCache.put('template1.html', '<div>Test1</div>');
  $templateCache.put('template2.html', '<div>Test2' + '</div>');
});
```

```js
import angularTemplatecacheExtract from 'angular-templatecache-extract';
import fs from 'fs';

fs.readFile(`${__dirname}/angularapp.js`, file => {
  angularTemplatecacheExtract(file.toString()).then(result => {
    console.log(result);
    // ['<div>Test1</div>', '<div>Test2</div>']
  });
});
```
