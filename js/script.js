var findReplace = function(string, wordToChange, newWord){

  if (typeof wordToChange === 'string'){
    string = string.toLowerCase();
    wordToChange = wordToChange.toLowerCase();

  }else{
    wordToChange = wordToChange.toString();
    newWord = newWord.toString();
    string = string.toString();
  }

  var result = string.replace(wordToChange, newWord);
  return result.charAt(0).toUpperCase() + result.slice(1);

};

$('document').ready(function(){

  $('#word-form').submit(function(event){



    event.preventDefault();
  })








});
