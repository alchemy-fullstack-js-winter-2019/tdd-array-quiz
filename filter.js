const filteredArray = function(array) {
  array.filter(word => {
    for(let i = 0; i < array.length; i++) {
      if(word.includes('y' || 'Y')) {
        array[i].splice(i, 1);
      }
    }
  });
};