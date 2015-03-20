/*
ARM, Animation Raising Module.
@autor: Ignacio Medina Castillo, AKA Raising.
*/

var ARM = {version:"1"};

ARM.Text = {};
	ARM.Text.In = {};
	ARM.Text.Mid = {};
	ARM.Text.Out = {};
	
ARM.Group = {};
	ARM.Group.In = {};
	ARM.Group.Mid = {};
	ARM.Group.Out = {};

ARM.Container = {};
	ARM.Container.In = {};
	ARM.Container.Mid = {};
	ARM.Container.Out = {};


ARM.clickOnMe = function(element,functionName){
	$("#"+element).click(function(){functionName(element);} );
}

ARM.Text.In.rollChar = function(textContainerID,time){
	var splitText = new SplitText( $("#"+textContainerID), {type:"chars"});
	var timeAux = time ? time : 1;
	var animateLineTime = 1.6;
	var animateLineprogress = 0.05;
	var totalTime = (animateLineTime+(animateLineprogress*splitText.chars.length));
	var timeCoeficient = timeAux/totalTime;
	return TweenMax.staggerFrom(splitText.chars, animateLineTime*timeCoeficient, {scale:0, autoAlpha:0,  rotationZ:-360,  transformOrigin:"50% 50% -200", ease:Bounce.easeOut},animateLineprogress*timeCoeficient);
}


ARM.Text.In.flipRightChar = function(textContainerID,time){

	var splitText = new SplitText( $("#"+textContainerID), {type:"chars"});
	$("#"+textContainerID+" >").css({perspective:"10px"});
	var timeAux = time ? time : 1;
	var animateLineTime = 1.6;
	var animateLineprogress = 0.05;
	var totalTime = (animateLineTime+(animateLineprogress*splitText.chars.length));
	var timeCoeficient = timeAux/totalTime;
	return TweenMax.staggerFrom(splitText.chars, animateLineTime*timeCoeficient, { autoAlpha:0,  rotationY:90,  transformOrigin:"50% 50% -30", ease:Elastic.easeOut}, animateLineprogress*timeCoeficient);
}


ARM.Text.In.flipUPline = function(textContainerID,time){
	$("#"+textContainerID).css({perspective:"100px"});
	var splitText = new SplitText( $("#"+textContainerID), {type:"lines"});
	var timeAux = time ? time : 1;
	var animateLineTime = 1.6;
	var animateLineprogress = 1;
	var totalTime = (animateLineTime+(animateLineprogress*splitText.lines.length));
	var timeCoeficient = timeAux/totalTime;
	return  TweenMax.staggerFrom(splitText.lines,animateLineTime*timeCoeficient, { autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50% -50", ease:Sine.easeOut}, animateLineprogress*timeCoeficient);
	
}	


ARM.Text.In.turnFromBehind = function(textContainerID,time){
	$("#"+textContainerID).css({perspective:"100px"});
	var splitText = new SplitText( $("#"+textContainerID), {type:"chars"});
	return TweenMax.staggerFrom(splitText.chars, 1.6, { autoAlpha:0,  rotationX:-180,  transformOrigin:"50% 50% -200", ease:Sine.easeOut}, 0.05).scaleTime((1.6+(0.05*splitText.chars.length))/time);
}


ARM.Text.In.doubleSideAprox = function(textContainerID,time){
	var splitText = new SplitText( $("#"+textContainerID), {type:"chars"});
	var impar = $("#"+textContainerID+">:odd");
	var par = $("#"+textContainerID+">:even");
	var ds = new TimelineMax();
	ds.add(TweenMax.staggerFrom(impar, 2, {left:-50,autoAlpha:0, ease:Sine.easeOut}, 0.01),0);
	ds.add(TweenMax.staggerFrom(par, 2, {left:50,autoAlpha:0, ease:Sine.easeOut}, 0.01),0);
	return ds; 
}


ARM.Text.In.opacityUp = function(textContainerID,time){
	var splitText = new SplitText( $("#"+textContainerID), {type:"chars"});
	return TweenMax.staggerFrom(splitText.chars, 1.6, {autoAlpha:0, ease:Sine.easeOut}, 0.05).scaleTime((1.6+(0.05*splitText.chars.length))/time);

}








ARM.Container.In.hangingFromTop = function(containerID,time){
	return TweenMax.from($('#'+containerID), time, {autoAlpha:0,rotationX:-150,transformOrigin:"50% 0% 0", ease:Elastic.easeOut});
}
ARM.Container.In.hangingFromBottom = function(containerID,time){
	return TweenMax.from($('#'+containerID), time, {autoAlpha:0,rotationX:150,transformOrigin:"50% 100% 0", ease:Elastic.easeOut});
}

ARM.Container.In.hangingFromLeft = function(containerID,time){
	return TweenMax.from($('#'+containerID), time, {autoAlpha:0,rotationY:-150,transformOrigin:"0% 50% 0", ease:Elastic.easeOut});
}
ARM.Container.In.hangingFromRight = function(containerID,time){
	return TweenMax.from($('#'+containerID), time, {autoAlpha:0,rotationY:-150,transformOrigin:"100% 50% 0", ease:Elastic.easeOut});
}


ARM.Container.In.haltLeftBounce = function(containerID,time){
	var tbl = new TimelineMax();
	tbl.from($('#'+containerID),0.7, {autoAlpha:0,x:-500, ease:Cubic.easeIn})
	.to($('#'+containerID),0.7, {rotationZ:50,transformOrigin:"100% 100% 0", ease:Cubic.easeOut})
	.to($('#'+containerID),1, {rotationZ:0,transformOrigin:"100% 100% 0", ease:Bounce.easeOut});
	tbl.timeScale(2.5/time);
	return tbl;
}

ARM.Container.In.haltLeftSkew = function(containerID,time){
	var tbl = new TimelineMax();
	tbl.from($('#'+containerID),0.7, {autoAlpha:0,x:-1000, ease:Cubic.easeIn})
	.to($('#'+containerID),0.3, {skewX:20,transformOrigin:"100% 100% 0", ease:Cubic.easeOut},"-=0.7")
	.to($('#'+containerID),0.3, {skewX:-50,transformOrigin:"100% 100% 0", ease:Cubic.easeOut})
	.to($('#'+containerID),1.5, {skewX:0,transformOrigin:"100% 100% 0", ease:Elastic.easeOut});
	tbl.timeScale(3.5/time);
	return tbl;
}


ARM.Container.Mid.slightTurning = function(containerID,time){
	var tbl = new TimelineMax();
	tbl.fromTo($('#'+containerID),1, {rotationX:-10,transformOrigin:"50% 50% 0", ease:Sine.easeInOut}, {rotationX:10,repeat:6,yoyo:true,transformOrigin:"50% 50% 0", ease:Sine.easeInOut})
	tbl.fromTo($('#'+containerID),1, {rotationY:-10,transformOrigin:"50% 50% 0", ease:Sine.easeInOut}, {rotationY:10,repeat:6,yoyo:true,transformOrigin:"50% 50% 0", ease:Sine.easeInOut},0.5);
	tbl.to($('#'+containerID),0.2, {rotationX:0,rotationY:0,transformOrigin:"50% 50% 0", ease:Sine.easeOut});
	tbl.timeScale(7/time);
	return tbl;
}
ARM.Container.Mid.slightCircle = function(containerID,time){
	var tbl = new TimelineMax();
	tbl.fromTo($('#'+containerID),1, {x:-10,transformOrigin:"50% 50% 0", ease:Sine.easeInOut}, {x:10,repeat:6,yoyo:true,transformOrigin:"50% 50% 0", ease:Sine.easeInOut})
	tbl.fromTo($('#'+containerID),1, {y:-10,transformOrigin:"50% 50% 0", ease:Sine.easeInOut}, {y:10,repeat:6,yoyo:true,transformOrigin:"50% 50% 0", ease:Sine.easeInOut},0.5);
	tbl.to($('#'+containerID),0.2, {x:0,y:0,transformOrigin:"50% 50% 0", ease:Sine.easeOut});
	tbl.timeScale(7/time);
	return tbl;
}


ARM.Container.Mid.levitate = function(containerID,time){
	var tbl = new TimelineMax();
	var position = $('#'+containerID).position();
	var x = position.left;
	var y = position.top;
	console.log(position);
	tbl.fromTo($('#'+containerID),0.7, {x:x-0,transformOrigin:"50% 50% 0", ease:Sine.easeInOut}, {x:x+10,repeat:8,yoyo:true,transformOrigin:"50% 50% 0", ease:Sine.easeInOut})
	tbl.fromTo($('#'+containerID),1.2, {y:y-0,transformOrigin:"50% 50% 0", ease:Sine.easeInOut}, {y:y+10,repeat:5,yoyo:true,transformOrigin:"50% 50% 0", ease:Sine.easeInOut},0.5);
	tbl.fromTo($('#'+containerID),1.3, {scale:1.0,transformOrigin:"50% 50% 0", ease:Sine.easeInOut}, {scale:1.05,repeat:4,yoyo:true,transformOrigin:"50% 50% 0", ease:Sine.easeInOut},0);
	tbl.to($('#'+containerID),0.2, {scale:1.0,x:x,y:y,transformOrigin:"50% 50% 0", ease:Sine.easeOut});
	tbl.timeScale(7/time);
	return tbl;
}



ARM.Container.Out.inverseHanging = function(containerID,time){
		return TweenMax.to($('#'+containerID), time, {autoAlpha:0,rotationX:-120,transformOrigin:"50% 0% 0", ease:Elastic.easeIn});
}






ARM.clipedImageColumToSide = function(imagePath,duration,sizeH,sizeV,columWidth,direction){//

 //ease:Circ.easeInOut}

	var divimage = $('<div>');
	var image = $('<img>');//
	var end =(columWidth+sizeH);
	var doubletall = sizeV*4;
	var exterminate = function(){
		divimage.remove();
		console.log("divimage exterminted");
	} ;

	var onloadHandler = function () {
		
		if (direction === "toLeft"){ 
			TweenMax.to(divimage,duration, {css:{clip:'rect(-800px, 0px, '+doubletall+'px, -'+columWidth+'px)'}/*, ease:Elastic.easeOut*/, onComplete: exterminate});
		}
		else if (direction === "toRight"){
			TweenMax.to(divimage, duration, {css:{clip:"rect(-800px,"+end+"px, "+doubletall+"px,"+sizeH+"px)"}/*, ease:Elastic.easeOut*/, onComplete: exterminate });
		}else{
			console.log("argumento de direccion incorrecto");
		}
    }


	image.css({position:"absolute",
		width:"sizeH",
		height:"sizeV",
		left:"0px",
		top:"0px",
		transform: "rotate(30deg)"});
		
	
	divimage.css({position:"absolute",
		width:sizeH*2+"px",
		height:sizeV*2+"px",
		left:"0px",
		top:"-400px",
		transform: "rotate(-30deg)"});
	
	divimage.append(image);
	$(document.body).append(divimage);

	if (direction === "toLeft"){
		divimage.css('clip', "rect(-800px,"+end+"px, "+doubletall+"px,"+sizeH+"px)");
	}else if (direction === "toRight"){
		divimage.css('clip', 'rect(-800px, 0px, '+doubletall+'px, -'+columWidth+'px)');
	}else {
		console.log("argumento de direccion incorrecto");
	}

	
	image.load(onloadHandler);
	image.attr('src', imagePath);
	


} 


ARM.hangingImage = function(imagePath,targetImg,duration,sizeH,sizeV,aditionalArgs){

	aditionalArgs = aditionalArgs || "";
	var image = $('#'+targetImg);

	TweenLite.set(image, {transformPerspective:800});

	image.css({position:"relative",
		width:sizeH+"px",
		height:sizeV+"px",
		left:"100px",
		top:"10px",
		transform:"translate3d(0.5px,0,0)",
		transform: "rotateY(50deg)"
		
		});
		

	
	//image.load(onloadHandler);
	image.attr('src', imagePath);
	return('.from($("#'+targetImg+'"),'+duration+', {rotationX:-90,autoAlpha:0, transformOrigin:"50% top",yoyo:true,repeat: 1,ease:Elastic.easeOut }'+aditionalArgs+')');

}

ARM.tonelVerticalElastico = function(targetDiv,duration,sizeH,sizeV,aditionalArgs){
	aditionalArgs = aditionalArgs || "";
	var animatedDiv = $('#'+targetDiv);
	TweenLite.set(animatedDiv, {transformPerspective:800});
	/*var onloadHandler = function () {
		
		TweenMax.fromTo	(animatedDiv, duration, {rotationY:90, transformOrigin:"left 50% -400"},{rotationY:0, transformOrigin:"left 50% -200",ease:Elastic.easeOut });
    }*/
	animatedDiv.css({position:"relative",
		width:sizeH+"px",
		height:sizeV+"px",
		left:"100px",
		top:"100px"
		});
		
	
	//onloadHandler();
	return('.fromTo($("#'+targetDiv+'"),'+duration+', {rotationY:90, transformOrigin:"left 50% -400"},{rotationY:0, transformOrigin:"left 50% -200",ease:Elastic.easeOut }'+aditionalArgs+')');
}

ARM.tonelVertical = function(targetDiv,duration,sizeH,sizeV,aditionalArgs){
	aditionalArgs = aditionalArgs || "";
	var animatedDiv = $('#'+targetDiv);
	TweenLite.set(animatedDiv, {transformPerspective:800});
	animatedDiv.css({position:"relative",
		width:sizeH+"px",
		height:sizeV+"px",
		left:"100px",
		top:"100px"
		});
	return('.fromTo($("#'+targetDiv+'"), '+duration+', {rotationY:90, transformOrigin:"50% 50% 0"},{rotationY:0, transformOrigin:"50% 50% -1000",ease:Sine.easeInOut}'+aditionalArgs+')');
}







ARM.recursivetest = function(targetDiv,duration,sizeH,sizeV,number){
if(number==0){}else{
	var animatedDiv = $('#'+targetDiv);
	TweenLite.set(animatedDiv, {transformPerspective:800});
	/*var onloadHandler = function () {
	
		TweenMax.fromTo	(animatedDiv, duration,{rotationY:90, transformOrigin:"50% 50% 0"},{rotationY:0, transformOrigin:"50% 50% -1000",ease:Sine.easeInOut});
    }*/

	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	animatedDiv.css({position:"relative",
		width:sizeH+"px",
		height:sizeV+"px",
		left:"2%",
		top:"2%",
		backgroundColor:randomColor
		});
		
	//animatedDiv.load(onloadHandler);
	onloadHandler();

	var next = $('<div id="'+targetDiv+'a"></div>');
	animatedDiv.append(next);

	ARM.recursivetest(targetDiv+'a',duration,sizeH*0.95,sizeV*0.95,number-1);
	 }
}



ARM.tweenTonelVertical = function(targetDiv,duration,sizeH,sizeV,aditionalArgs){
	aditionalArgs = aditionalArgs || "";
	var animatedDiv = $('#'+targetDiv);
	TweenLite.set(animatedDiv, {transformPerspective:800});
	animatedDiv.css({position:"relative",
		width:sizeH+"px",
		height:sizeV+"px",
		left:"100px",
		top:"100px"
		});
	return(TweenMax.fromTo(animatedDiv, duration, {rotationY:90, transformOrigin:"50% 50% 0"},{rotationY:0, transformOrigin:"50% 50% -1000",ease:Sine.easeInOut}));
}


ARM.tweenHangingImage = function(imagePath,targetImg,duration,sizeH,sizeV,aditionalArgs){

	aditionalArgs = aditionalArgs || "";
	var image = $('#'+targetImg);

	//TweenLite.set(image, {transformPerspective:800});

	image.css({position:"relative",
		width:sizeH+"px",
		height:sizeV+"px",	
		});
	//image.load(onloadHandler);
	image.attr('src', imagePath);
	return(TweenMax.from(image,duration, {rotationX:-90,autoAlpha:0, transformOrigin:"50% top",yoyo:true,repeat: 1,ease:Elastic.easeOut }));

}