function removeY(arr) {
  return arr.filter(word => {
    for(let i = 0; i < word.length; i++) {
      if(word[i] === 'Y' || word[i] === 'y') {
        return false;
      }
    }
    return true;
  });
}

function makePhrase(arr) {
  return arr.map(word => {
    return 'Is it ' + word + '?';
  });
}

function makeFinal(arr) {
  const filtered = removeY(arr);

  const final = makePhrase(filtered);

  return final;
}


module.exports = {
  removeY,
  makePhrase,
  makeFinal
};

