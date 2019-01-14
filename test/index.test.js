const { filter } = require('../lib/index.js');

describe('array methods', () => {
  describe('assumptions', () => {
    describe('filter', () => {
      it('returns words with no y', () => {
        const words = ['sky', 'hot', 'Yeti', 'green'].filter(ele => {
          return ele != ('y');
        });
        expect(words).toEqual(['hot', 'green']);
      });
    });
    describe('implementation', () => {
      describe('filter', () => {
        it('can return phrase "Is it <>?"', () => {
          const results = filter(['hot', 'green'], ele => {
            return ele + ('Is it <>?');
          });
          expect(results).toEqual(['Is it hot?, Is it green?']);
        });
      });
    });
  });
});

