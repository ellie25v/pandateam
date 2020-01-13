/* eslint-disable */
var myApp = angular.module('myApp', []);

myApp.run(function ($templateCache) {
  var test = 'test';
  $templateCache.put('template1.html', '<div>Test1</div>');
  $templateCache.put('template2.html', '<div>Test2' + '</div>');
  $templateCache.put('template3.html', test);
});
/* eslint-enable */
