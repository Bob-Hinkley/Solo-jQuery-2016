var red = 0;
var yellow = 0;
var green = 0;
var blue = 0;

$(document).ready(function() {

  //click event tracking which button was clicked
  $('.color-button').on('click', function() {
    var color = $(this).data('color');
    console.log($(this).data('color'));
    $('.container').append('<div class="color-cube ' + color + '"></div>')

    //If else statement adding colors to counter at the top
    // function tracker () {
    if ($(this).data('color')=='red') {
      red++;
      $('#red').text(red)
    } else if ($(this).data('color')=='yellow') {
      yellow++;
      $('#yellow').text(yellow)
    } else if ($(this).data('color')=='green') {
      green++;
      $('#green').text(green)
    } else { ($(this).data('color')=='blue')
    blue++;
    $('#blue').text(blue)
  }; //If Else color adder (is that even a word??)
}); //Click event
}); //Doc ready function
