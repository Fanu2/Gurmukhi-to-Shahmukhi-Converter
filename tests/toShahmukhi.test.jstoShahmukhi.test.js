import { toShahmukhi } from 'gurmukhi-utils';

describe('toShahmukhi()', () => {
  const words = [
    ['کہ', 'کِی'],
    // Add more words as needed
  ];

  words.forEach(([unicode, shahmukhi]) => {
    test(`should convert '${unicode}' to '${shahmukhi}'`, () => {
      expect(toShahmukhi(unicode)).toBe(shahmukhi);
    });
  });
});
