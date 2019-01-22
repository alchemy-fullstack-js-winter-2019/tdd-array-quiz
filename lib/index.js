
function test(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        return arr.filter(x => /^y/i.test(x)).map(x => {
            return `is it ${x}`;
        });
    }
}

module.exports = { test };

console.log(test['hot', 'sky', 'Yeti', 'green']);