const { removeY } = require('../lib/index');
const { makePhrase } = require('../lib/index');
const { makeFinal } = require('../lib/index');

const arr = ['sky', 'hot', 'Yeti', 'green'];


describe('array method tests', () => {
    it('removes any words that contain Y or y', () => {
        const results = removeY(arr);

        expect(results).toEqual([ 'hot', 'green' ]);
    });
    it('modifies original word to be a phrase "Is it <word>"', () => {
        const results = makePhrase(arr);

        expect(results).toEqual(['Is it sky?', 'Is it hot?', 'Is it Yeti?', 'Is it green?']);
    });
    it('removes words that contain Y and adds it into the phrase', () => {
        const results = makeFinal(arr);

        expect(results).toEqual(['Is it hot?', 'Is it green?'])
    })
})

