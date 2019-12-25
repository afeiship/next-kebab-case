/*!
 * name: @feizheng/next-kebab-case
 * description: Kebab case for next.
 * url: https://github.com/afeiship/next-kebab-case
 * version: 1.0.0
 * date: 2019-12-25 10:31:05
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var REDUCE_RE = /([a-z])([A-Z])/g;
  var REPLACE_RE = /[-\s_+]+/g;

  nx.kebabCase = function(inString) {
    if (!inString) return;
    return (inString + '')
      .replace(REDUCE_RE, '$1-$2')
      .replace(REPLACE_RE, '-')
      .toLowerCase();
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.kebabCase;
  }
})();

//# sourceMappingURL=next-kebab-case.js.map
