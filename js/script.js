$(document).ready(function(){
  $('#formOne').submit(function(event){
    var person1Input = $('input#person1').val();
    var animal1Input = $('input#animal1').val();
    var naturalDesasterInput =$('input#naturalDesaster').val();
    var exclimationInput = $('input#exclimation').val();
    var verbInput = $('input#verb').val();
    var nounInput = $('input#noun').val();

    $('.person1').text(person1Input);
    $('.animal1').text(animal1Input);
    $('.naturalDesaster').text(naturalDesasterInput);
    $('.exclimation').text(exclimationInput);
    $('.verb').text(verbInput);
    $('.noun').text(nounInput);

    $('#story').show();

    event.preventDefaut(); 
  });

});
