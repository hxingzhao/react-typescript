(function (graph) {
 function require(module) {
  function localRequire(relativePath) {
   return require(graph[module].dependecies[relativePath]);
  }
  var exports = {};
  (function (require, exports, code) {
   eval(code);
  })(localRequire, exports, graph[module].code);
  return exports;
 }
 require('./src/index.js');
})({
 './src/index.js': {
  dependecies: { './aa.js': './src/aa.js', './hh.js': './src/hh.js' },
  code:
   '"use strict";\n\nvar _aa = require("./aa.js");\nvar _hh = require("./hh.js");\nconsole.log("".concat(_hh.name, "\\u4ECA\\u5E74").concat(_aa.age, "\\u5C81\\u4E86"));',
 },
 './src/aa.js': {
  dependecies: {},
  code:
   '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.specifiers = exports.age = void 0;\nvar age = exports.age = 18;\nvar specifiers = exports.specifiers = \'333\';',
 },
 './src/hh.js': {
  dependecies: {},
  code:
   '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.name = void 0;\nconsole.log(\'我来了\');\nvar name = exports.name = \'林三心\';',
 },
});
