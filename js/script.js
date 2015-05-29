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



$("document").ready(function(){

  $(window).load(function(){
    $(".form-div").fadeIn("slow");

  })



  $("#word-form").submit(function(event){



    var stringInput = $("#string").val();
    var wordToChangeInput = $("#word-to-change").val();
    var newWordInput = $("#new-word").val();

    var outputResult = findReplace(stringInput, wordToChangeInput, newWordInput);

    $("#results").text(outputResult);
    $("#results-div").slideDown(500);

    event.preventDefault();
  })
});
