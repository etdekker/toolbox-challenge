/* app.js
* main script file for our little application
* */

"use strict";

var winWidth = $(window).width();
var winHeight = $(window).height();
var tileWidth = (winHeight / 4);

var playing = false;

var gameBoard = $('#game-board');
gameBoard.attr = ('width', tileWidth * 4);

//$('#start').click(function() {
	for (var i = 0; i < 16; i++) {

		var tile = 'img/tile' + (i + 1) + '.jpg';
		var info = 'some other data';

		//create and configure a new <img> element...
		var newTile = $(document.createElement('img'));

		newTile.attr('src', 'img/tile-back.png');
		newTile.attr('alt', 'photo of nature');
		newTile.attr('width', tileWidth);
		newTile.attr('border', '5px solid black');

		//use the .data() method to associate extra data with HTML elements
		newTile.data('assocTile', tile); //first param is a key
		newTile.data('tileInfo', info); //second param is a value

		//add to the board
		gameBoard.append(newTile);
	};
//});

$('#game-board img').click(function() {
	//this refers to DOM element that raised the event
	//wrapped in jQuery $() to get more functionality
	var clickedImage = $(this);
	var tileData1 = clickedImage.data('assocTile');
	var tileData2 = clickedImage.data('tileInfo');
	clickedImage.data('assocTile', clickedImage.attr('src'));
	clickedImage.data('tileInfo', clickedImage.attr('alt'));
	clickedImage.attr('src', tileData1);
	clickedImage.attr('alt', tileData2);

	console.log(tileData1);
	console.log(tileData2);

});
/*
var array = ['a', 'b', 'c', 'd'];

_.forEach(array, function(element, index) {

	console.log(element);
	console.log(index);
});

_.difference(array, ['c', 'd']);
var unionArray = _.union(array, ['e', 'f']);
_.intersection(array, ['b', 'c']);

var numArray = [1,2,3,4,5,6,7,8,9,10];
var evens = _.filter(numArray, function(num) {return 0 == num % 2;});
console.log(evens);

var shuffledArray = _.shuffle(numArray);
console.log(shuffledArray);
console.log(array);
console.log(unionArray);
*/
/*
var startTime = _.now();
console.log(startTime);
var timer;
timer = window.setInterval(onTimer, 100);

function onTimer() {
	//compare _.now() to start time to get elapsed time
	//Math.floor() rounds down to nearest integer

	var elapsedSeconds = Math.floor((_.now() - startTime) / 100);
	console.log(elapsedSeconds);
	$('#game-board h2').css("font-size", elapsedSeconds + 'px');
}

function stopTimer() {
	window.clearInterval(timer);
}

$('.jumbotron').click(stopTimer);

*/
















