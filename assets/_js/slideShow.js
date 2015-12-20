(function(){

var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.plumbing figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

  // remove .show from whichever element currently has it
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });

  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');
};

// add click events to prev & next buttons
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);

  ////////////////////////
 /****** NEW CODE ******/
  window.setInterval(function(){
     counter++;
     showCurrent();
  }, 4000);
  /****** END NEW CODE ****/

})();

(function(){

var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.concrete figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

  // remove .show from whichever element currently has it
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });

  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');
};

// add click events to prev & next buttons
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);

  ////////////////////////
 /****** NEW CODE ******/
  window.setInterval(function(){
     counter++;
     showCurrent();
  }, 4000);
  /****** END NEW CODE ****/

})();


(function(){

var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.flooring figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

  // remove .show from whichever element currently has it
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });

  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');
};

// add click events to prev & next buttons
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);

  ////////////////////////
 /****** NEW CODE ******/
  window.setInterval(function(){
     counter++;
     showCurrent();
  }, 4000);
  /****** END NEW CODE ****/

})();
(function(){

var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.gardening figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

  // remove .show from whichever element currently has it
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });

  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');
};

// add click events to prev & next buttons
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);

  ////////////////////////
 /****** NEW CODE ******/
  window.setInterval(function(){
     counter++;
     showCurrent();
  }, 4000);
  /****** END NEW CODE ****/

})();
(function(){

var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.kitchens figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

  // remove .show from whichever element currently has it
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });

  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');
};

// add click events to prev & next buttons
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);

  ////////////////////////
 /****** NEW CODE ******/
  window.setInterval(function(){
     counter++;
     showCurrent();
  }, 4000);
  /****** END NEW CODE ****/

})();
(function(){

var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.restaurants figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

  // remove .show from whichever element currently has it
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });

  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');
};

// add click events to prev & next buttons
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);

  ////////////////////////
 /****** NEW CODE ******/
  window.setInterval(function(){
     counter++;
     showCurrent();
  }, 4000);
  /****** END NEW CODE ****/

})();


(function(){

var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.roofing figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

  // remove .show from whichever element currently has it
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });

  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');
};

// add click events to prev & next buttons
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);

  ////////////////////////
 /****** NEW CODE ******/
  window.setInterval(function(){
     counter++;
     showCurrent();
  }, 4000);
  /****** END NEW CODE ****/

})();


(function(){

var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.pointing figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

  // remove .show from whichever element currently has it
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });

  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');
};

// add click events to prev & next buttons
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);

  ////////////////////////
 /****** NEW CODE ******/
  window.setInterval(function(){
     counter++;
     showCurrent();
  }, 4000);
  /****** END NEW CODE ****/

})();



(function(){

var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.fireplace figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

  // remove .show from whichever element currently has it
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });

  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');
};

// add click events to prev & next buttons
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);

  ////////////////////////
 /****** NEW CODE ******/
  window.setInterval(function(){
     counter++;
     showCurrent();
  }, 4000);
  /****** END NEW CODE ****/

})();






(function(){

var counter = 0, // to keep track of current slide
    $items = document.querySelectorAll('.granite figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
  var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show

  // remove .show from whichever element currently has it
  // http://stackoverflow.com/a/16053538/2006057
  [].forEach.call( $items, function(el){
    el.classList.remove('show');
  });

  // add .show to the one item that's supposed to have it
  $items[itemToShow].classList.add('show');
};

// add click events to prev & next buttons
document.querySelector('.next').addEventListener('click', function() {
     counter++;
     showCurrent();
  }, false);

document.querySelector('.prev').addEventListener('click', function() {
     counter--;
     showCurrent();
  }, false);

  ////////////////////////
 /****** NEW CODE ******/
  window.setInterval(function(){
     counter++;
     showCurrent();
  }, 4000);
  /****** END NEW CODE ****/

})();
