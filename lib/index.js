


const newSent = function(values, callback) {
// take an array and and remove any words that contain y 
  const newValues = [];
  values.forEach(ele => {
    if(ele.includes('y') || ele.includes('Y'));
    else {
      newValues.push(ele);

    }
  });
  const mappedValues = newValues.map(ele => {
    return `Is it ${ele}?`;
  });

  return mappedValues;
};

console.log(newSent(['sky', 'hot', 'Yeti', 'green']));


module.exports = newSent;
