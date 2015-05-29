var findReplace = function(string, wordToChange, newWord){

  if (typeof wordToChange === 'string'){

    string = string.toLowerCase();
    wordToChange = wordToChange.toLowerCase();
    var result = string.replace(wordToChange, newWord);
    return result.charAt(0).toUpperCase() + result.slice(1);

  }else{
    wordToChange = wordToChange.toString();
    newWord = newWord.toString();
    var result = string.replace(wordToChange, newWord);
    return result.charAt(0).toUpperCase() + result.slice(1);s

  }


}
