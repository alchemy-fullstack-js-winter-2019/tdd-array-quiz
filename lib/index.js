
var words = ['sky', 'hot', 'Yeti', 'green'];

function filterAndReplace() {
  for(var i = 0; i < words.length; i++) { 
    if(words[i].includes('y' || 'Y')) {
      words.splice(words[i]);
      words.insert(words[i], ('Is it ' + words[i + 1] + '?'));
      words.splice(words[i + 1]);
    } 
  }
}

filterAndReplace(words);

// it felt like I was pretty close here, but I couldn't quite figure it out
