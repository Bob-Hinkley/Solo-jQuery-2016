var red = 0;
var yellow = 0;
var green = 0;
var blue = 0;

$(document).ready(function() {

$('.color-button').on('click', function() {
  if($(this).data('color')) {
    console.log($(this));
    $('.container').append('<div class="color-cube" style="background-color: ' +  + ';"></div>')
  }
  // } else if  {
  //   //if 'yellow' button is clicked
  // } else if  {
  //   //if 'green' button is clicked
  // } else {
  //   //if 'blue' button is clicked
  // }
});


// Figure out logic for which button was clicked //Could be added to click event up top
// function tracker () {
//   if ('red click') {
//     red++;
//     $('#red').append('<p>' + red + '</p>')
//   } else if ('yellow click') {
//     yellow++;
//     $('#yellow').append('<p>' + yellow + '</p>')
//   } else if ('green click') {
//     green++;
//     $('#green').append('<p>' + green + '</p>')
//   } else ('blue clicked') {
//     blue++
//     $('#blue').append('<p>' + blue + '</p>')
//   };
// };








}); //Doc ready function
