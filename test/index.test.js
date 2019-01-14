const { removeY } = require('../lib/index');

describe('array method tests', () => {
    it('removes any words that contain Y or y', () => {
        const arr = ['sky', 'hot', 'Yeti', 'green'];
        const results = removeY(arr);

        expect(results).toEqual([ 'hot', 'green' ]);
    });
})

