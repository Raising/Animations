


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

	
    var splitDescription = new SplitText( $("#descripcion"), {type:"chars"});
 	var splitPrecio = new SplitText( $("#precio"), {type:"chars"});
  
	 var tl = new TimelineMax()
	 //.add(TweenMax.from($('#text_suporter'),3, {rotationX:-90,autoAlpha:0, transformOrigin:"50% top",yoyo:true,repeat: 1,ease:Elastic.easeOut }))
	 .add(TweenMax.from($('#productImg'),2, {scale:0 ,autoAlpha:1,repeat: 0,ease:Sine.easeOut }))
	 .add(TweenMax.fromTo($('#text_suporter'),3, {rotationY:40 ,autoAlpha:0}, {rotationY:-10,autoAlpha:1, transformOrigin:"50% top -400",repeat: 0,ease:Bounce.easeOut }))
	 .staggerFrom(splitDescription.chars, 1.6, {scale:0.25, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50% -200", ease:Sine.easeOut}, 0.05)
	 .staggerFrom(splitPrecio.chars, 0.8, {scale:0.25, autoAlpha:0,  rotationZ:-880,  transformOrigin:"200% 50% -300", ease:Sine.easeOut}, 0.15)
	 .add(TweenMax.fromTo($("#productImg"), 1, { rotationY:5}, 	{rotationY:-5,    repeat: -1,    yoyo: true,    ease: Bounce.easeIn}))
	 ;


	 tl.resume();
	

});





