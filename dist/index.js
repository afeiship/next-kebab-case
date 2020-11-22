/*!
 * name: @jswork/next-kebab-case
 * description: Kebab case for next.
 * homepage: https://github.com/afeiship/next-kebab-case
 * version: 1.0.0
 * date: 2020-11-22 20:23:08
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
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
