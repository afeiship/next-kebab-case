import nx from '@jswork/next';

const REDUCE_RE = /([a-z])([A-Z])/g;
const REPLACE_RE = /[-\s_+]+/g;

nx.kebabCase = function (inString) {
  if (!inString) return;
  return (inString + '').replace(REDUCE_RE, '$1-$2').replace(REPLACE_RE, '-').toLowerCase();
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.kebabCase;
}

export default nx.kebabCase;
