


$(document).ready(function() {





	 var tl = new TimelineMax({paused:true})
	 .add(ARM.Text.opacityUp("texto1"),0)
	 .add(ARM.Text.turnFromBehind("texto2"),0)
	 .add(ARM.Text.flipUPline("texto3"),0)
	 .add(ARM.Text.flipRightChar("texto4"),0)
	 .add(ARM.Text.rollChar("texto5"),0)
	.add(ARM.Text.doubleSideAprox("texto6"),0)
	// .add(ARM.Text.turnFromBehind("texto7"),0)
	// .add(ARM.Text.turnFromBehind("texto8"),0)
	// .add(ARM.Text.turnFromBehind("texto9"),0)
	 

	 
	;


		 /* 
	.staggerFrom(splitDescription.chars, 1.6, {scale:0.25, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50% -200", ease:Sine.easeOut}, 0.05)
	 .to("#price2", 3, {scrambleText:{text:"655.45€", 
	 	chars:"0123456789.", revealDelay:0.5, tweenLength:false, ease:Linear.easeNone}})
	 ;*/


	 tl.resume();
	

});





