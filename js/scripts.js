$(document).ready(function(){
  $("#blanks form").submit(function(){
    var person1input = $("input#person1").val();
    var person2input = $("input#person2").val();
    var animalinput = $("input#animal").val();
    var exclamationinput = $("input#Exclamation").val();
    var verbinput = $("input#verb").val();
    var nouninput = $("input#noun").val();

    $(".person1").text(person1input);
    $(".person2").text(person2input);
    $(".animal").text(animalinput);
    $(".Exclamation").text(exclamationinput);
    $(".verb").text(verbinput);
    $(".noun").text(nouninput);

    $("#story").show();

    event.preventDefault();
  });

});
