


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
/*var p = TweenMax.fromTo($("#test"), 0.7, { boxShadow: "0px 0px 0px 0px rgba(0,255,0,0.3)"}, 
	{ boxShadow: "0px 0px 20px 10px rgba(0,255,0,0.7)",    repeat: -1,    yoyo: true,    ease: Linear.easeNone});
*/



/*ARM.timeline(ARM.tonelVerticalElastico("side3d",5,400,300),
	ARM.hangingImage("img/landscape_training.jpg","test",5,200,200,",'-=2'")
	);
*/

	/* var tl = new TimelineLite({paused:true})
	 .add(ARM.tweenHangingImage("img/batlogo.png","productImg",5,600,850))
	 .add(ARM.tweenTonelVertical("side3d",5,400,300));
	 */

	
    var tonelSides = $(".tonelSide");
 	
  
	 var tl = new TimelineMax({paused:true	})
	 .staggerFrom(tonelSides, 24, {scale:1,repeat:1,yoyo:true,  rotationX:360,  transformOrigin:"50% 0% -4400px", ease:Sine.easeInOut}, 4)
	.staggerFrom(tonelSides, 24, {scale:1,repeat:1,  rotationY:360,  transformOrigin:"50% 0% -4400px", ease:Sine.easeInOut}, 4,"-=20")
	// .staggerFrom(splitPrecio.chars, 0.8, {scale:0.25, autoAlpha:0,  rotationZ:-880,  transformOrigin:"200% 50% -300", ease:Sine.easeOut}, 0.15)
	// .add(TweenMax.fromTo($("#productImg"), 1, { rotationY:5}, 	{rotationY:-5,    repeat: -1,    yoyo: true,    ease: Bounce.easeIn}))
	 ;
	 tl.timeScale(8);
	 //tl.progress (1);
	 tl.resume();
	

});





