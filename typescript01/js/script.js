$(document).ready(function(){
	//On n'oublie pas de récupérer le canvas et son context.
	var refreshIntervalId;


	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	$('.randomize').click(function(){
		clearInterval(refreshIntervalId);
		refreshIntervalId = 0;
		createRandom();
	});

	$('.clear').click(function(){
		location.reload();
	});

	$('.play').click(function(){
		if(!refreshIntervalId || refreshIntervalId == 0){
			$(".play").hide();
			$(".stop").show();
			clearInterval(refreshIntervalId);
			refreshIntervalId = 0;
			refreshIntervalId = window.setInterval(createRandom, 500);
		}
	});
	$('.stop').click(function(){
		$(".stop").hide();
		$(".play").show();
		clearInterval(refreshIntervalId);
		refreshIntervalId = 0;
	});

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");


	$( document ).click(function( event ) {
		var X = event.pageX;
		var Y = event.pageY
		var disk = new Disk(X,Y);
		disk.createCircle();
	});

	function createRandom(){
		for(i=0; i<=300; i++){
			var Xparam = Math.floor((Math.random() * 2000) + 1);
			var Yparam = Math.floor((Math.random() * 500) + 1);
			var disk = new Disk(Xparam,Yparam);
			disk.createCircle();
		}
	}
});

class Disk {
	constructor(X,Y){
		this.X = X;
		this.Y = Y
	}

	createCircle(){
		var diam;
		var width = $( window ).width();
		var height = $( window ).height();
		var position = $( "canvas" ).position();
		var left = position.left;
		var X = this.X;
		var Y = this.Y;
		var diam = Math.floor((Math.random() * 100) + 1);
		var randomTwo = Math.floor((Math.random() * 2) + 1);
		var opacity = diam/100;
		var deg = Math.floor((Math.random() * 180) + 1);
		console.log(opacity);
		var color1 = Math.floor((Math.random() * 255) + 1);
		var color2 = Math.floor((Math.random() * 255) + 1);
		var color3 = Math.floor((Math.random() * 255) + 1);
		console.log("rgb("+color1+","+color2+","+color3+")");

		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");

		ctx.beginPath();
		ctx.fillStyle = "rgb("+color1+","+color2+","+color3+","+opacity+")";
		if(randomTwo == 1){
			ctx.arc(X-left, Y, diam, 0, 2 * Math.PI);
		} else {
			ctx.rect (X-left-diam/2, Y-diam/2, diam, diam);
		}
		ctx.fill();
		ctx.stroke();
	}
}
