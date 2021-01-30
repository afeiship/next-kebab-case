/*!
 * name: @jswork/next-kebab-case
 * description: Kebab case for next.
 * homepage: https://github.com/afeiship/next-kebab-case
 * version: 1.0.1
 * date: 2021-01-30 20:49:36
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
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
