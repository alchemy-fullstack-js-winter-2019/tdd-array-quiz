function removeY(string){
  string.filter(function(ele){
    if(!ele.includes('y' || 'Y')){
      return ele;
    }
  });
}

module.exports = removeY;
