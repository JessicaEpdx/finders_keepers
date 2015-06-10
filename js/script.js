var findReplace = function(string, wordToChange, newWord){

  if (typeof wordToChange === 'string'){
    string = string.toLowerCase();
    wordToChange = wordToChange.toLowerCase();

  }else{
    wordToChange = wordToChange.toString();
    newWord = newWord.toString();
    string = string.toString();
  }

  var stringArray = string.split(" ");
  var result = [ ]
  var arrayLength = stringArray.length;
  for (var i = 0; i < arrayLength; i++) {
    var word = stringArray[i]
    if(word === wordToChange){
      result.push(newWord);
    }else{
      result.push(word);
    }
  }
    return result.join(' ');

};

$("document").ready(function(){

  fadeOnLoad();

  $("#word-form").submit(function(event){

    var stringInput = $("#string").val();
    var wordToChangeInput = $("#word-to-change").val();
    var newWordInput = $("#new-word").val();

    var outputResult = findReplace(stringInput, wordToChangeInput, newWordInput);

    $("#results").text(outputResult);
    $("#results-div").slideDown(500);

    event.preventDefault();
  });
});
