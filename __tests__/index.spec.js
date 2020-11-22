(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.kebabCase', function () {
      var str1 = 'radius changed';
      var str2 = 'radiusChanged';
      var str3 = 'radius_changed';
      var str3 = 'radius++changed';
      var str4 = 'raDiuScHan_ge d';

      expect(nx.kebabCase(str1)).toBe('radius-changed');
      expect(nx.kebabCase(str2)).toBe('radius-changed');
      expect(nx.kebabCase(str3)).toBe('radius-changed');
      expect(nx.kebabCase(str4)).toBe('ra-diu-sc-han-ge-d');
    });
  });
})();
