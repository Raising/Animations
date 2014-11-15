


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

.add(ARM.dottedCircle())
	 //.add(TweenMax.from($('#text_suporter'),3, {rotationX:-90,autoAlpha:0, transformOrigin:"50% top",yoyo:true,repeat: 1,ease:Elastic.easeOut }))
	 .add(TweenMax.from('#productImg',2, {scale:0 ,autoAlpha:1,repeat: 0,ease:Sine.easeOut }))
	// .add(dotsAnimation())
	
	 .add(TweenMax.fromTo($('#text_suporter'),3, {rotationY:40 ,autoAlpha:0}, {rotationY:-10,autoAlpha:1, transformOrigin:"50% top -400",repeat: 0,ease:Bounce.easeOut }))
	  
	.staggerFrom(splitDescription.chars, 1.6, {scale:0.25, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50% -200", ease:Sine.easeOut}, 0.05)
	 .to("#price2", 3, {scrambleText:{text:"655.45€", 
	 	chars:"0123456789.", revealDelay:0.5, tweenLength:false, ease:Linear.easeNone}})
	 .staggerFrom(splitPrecio.chars, 0.8, {scale:0.25, autoAlpha:0,  rotationZ:-880,  transformOrigin:"200% 50% -300", ease:Sine.easeOut}, 0.15)
	 .add(TweenMax.fromTo($("#productImg"), 1, { rotationY:5}, 	{rotationY:-5,    repeat: -1,    yoyo: true,    ease: Bounce.easeIn}))
	 ;


	 tl.resume();


/*
function dotsAnimation() {
  var dots = new TimelineLite({paused:false}),
      tl = new TimelineLite(),
      qty = 30,
      duration = 2.5,
      xProp =  "x",
      yProp = "y",
      colors = ["#91e600","#84d100","#73b403","#528003"],
      startVars = {css:{}},
      initialVars = {css:{borderRadius:"50%", width:100, z:0.1}, immediateRender:true},
      dot, i, delay;
 	 	startVars.css[xProp] = initialVars.css[xProp] = 640;
  		startVars.css[yProp] = initialVars.css[yProp] = 220;
  for (i = 0; i < qty; i++) {
    dot = $("<div class='dot'/>").appendTo($('#productImg'));
    initialVars.css.width = initialVars.css.height = ((Math.random() * 15 + 10) | 0);
    initialVars.css.backgroundColor = colors[(Math.random() * colors.length) | 0];
    TweenLite.set(dot, initialVars);
    delay = Math.random() * duration;
    dots.to(dot, duration, {physics2D:{velocity:Math.random() * 300 + 150, angle:Math.random() * 40 + 250, gravity:400, xProp:xProp, yProp:yProp}}, delay);
    dots.fromTo(dot, duration, startVars, {physics2D:{velocity:Math.random() * 300 + 150, angle:Math.random() * 60 + 240, gravity:400, xProp:xProp, yProp:yProp}, immediateRender:false, overwrite:"none"}, delay + duration);
    dots.fromTo(dot, duration, startVars, {physics2D:{velocity:Math.random() * 300 + 150, angle:Math.random() * 60 + 240, gravity:400, xProp:xProp, yProp:yProp}, immediateRender:false, overwrite:"none", display:"none"}, delay + duration * 2);
  }
  tl.to(dots, 2.2, {time:2.2, ease:Linear.easeNone}, 0);
  tl.to(dots, 2, {time:4.2, ease:Linear.easeNone}, 4.2);
  tl.to(dots, 2, {time:2.2, ease:Linear.easeNone}, 6.2);
  tl.to(dots, 2, {time:3.2, ease:Linear.easeNone}, 8.2);
  tl.to(dots, 3, {time:dots.duration(), ease:Linear.easeNone}, 10.2);

  return tl;
}
	*/

});





