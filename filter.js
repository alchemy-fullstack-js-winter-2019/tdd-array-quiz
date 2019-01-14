const filteredArray = function(array) {
  array.filter(word => {
    for(let i = 0; i < array.length; i++) {
      if(word.includes('y' || 'Y')) {
        array.splice(i, 1);
      }
    }
    for(let i = 0; i < array.length; i++) {
      array.map(word => {
        'Is that ' + word + '?';
      });
    }
    return array;
  });
};

module.exports = {
  filteredArray
};