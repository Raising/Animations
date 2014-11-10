


$(document).ready(function() {

/*	
	ARM.clipedImageColumToSide("img/landscape_training.jpg",13,640,400,100,"toRight");
	ARM.clipedImageColumToSide("img/landscape_training.jpg",14,640,400,100,"toLeft");
 	ARM.clipedImageColumToSide("img/landscape_training.jpg",15,640,400,200,"toRight");
*/
	
/*
	ARM.tonelVerticalElastico("side3d",5,400,300);
	ARM.hangingImage("img/landscape_training.jpg","test",5,200,200);
*/

/*
	ARM.tonelVertical("side3d",5,400,300);
	ARM.hangingImage("img/landscape_training.jpg","test",5,200,200);
*/


//	ARM.recursivetest("side3d",5,400,300,5);
var p = TweenMax.fromTo($("#test"), 0.7, { boxShadow: "0px 0px 0px 0px rgba(0,255,0,0.3)"}, 
	{ boxShadow: "0px 0px 20px 10px rgba(0,255,0,0.7)",    repeat: -1,    yoyo: true,    ease: Linear.easeNone});




/*ARM.timeline(ARM.tonelVerticalElastico("side3d",5,400,300),
	ARM.hangingImage("img/landscape_training.jpg","test",5,200,200,",'-=2'")
	);
*/

	 var tl = new TimelineLite({paused:true})
	 .add(ARM.tweenTonelVertical("side3d",5,400,300))
	 .add(ARM.tweenHangingImage("img/landscape_training.jpg","test",5,200,200));

	 tl.resume();
	

});





