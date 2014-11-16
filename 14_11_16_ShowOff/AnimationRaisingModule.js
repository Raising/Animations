/*
ARM, Animation Raising Module.
@autor: Ignacio Medina Castillo, AKA Raising.
*/

var ARM = {version:"1"};




ARM.Text = {};

ARM.clickOnMe = function(element,functionName){
	$("#"+element).click(function(){functionName(element);} );
}

ARM.Text.rollChar = function(textContainerID){
	var splitText = new SplitText( $("#"+textContainerID), {type:"chars"});
	return TweenMax.staggerFrom(splitText.chars, 1.6, {scale:0, autoAlpha:0,  rotationZ:-360,  transformOrigin:"50% 50% -200", ease:Bounce.easeOut}, 0.05);
}


ARM.Text.flipRightChar = function(textContainerID){

	var splitText = new SplitText( $("#"+textContainerID), {type:"chars"});
	$("#"+textContainerID+" >").css({perspective:"10px"});
	return TweenMax.staggerFrom(splitText.chars, 1, { autoAlpha:0,  rotationY:90,  transformOrigin:"50% 50% -30", ease:Elastic.easeOut}, 0.05);
}


ARM.Text.flipUPline = function(textContainerID){
	$("#"+textContainerID).css({perspective:"100px"});
	var splitText = new SplitText( $("#"+textContainerID), {type:"lines"});
	return TweenMax.staggerFrom(splitText.lines, 1.6, { autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50% -50", ease:Sine.easeOut}, 1);
}


ARM.Text.turnFromBehind = function(textContainerID){
	$("#"+textContainerID).css({perspective:"100px"});
	var splitText = new SplitText( $("#"+textContainerID), {type:"chars"});
	return TweenMax.staggerFrom(splitText.chars, 1.6, { autoAlpha:0,  rotationX:-180,  transformOrigin:"50% 50% -200", ease:Sine.easeOut}, 0.05);
}


ARM.Text.opacityUp = function(textContainerID){
	var splitText = new SplitText( $("#"+textContainerID), {type:"chars"});
	return TweenMax.staggerFrom(splitText.chars, 1.6, {autoAlpha:0, ease:Sine.easeOut}, 0.05);
}


ARM.Text.doubleSideAprox = function(textContainerID){
	var splitText = new SplitText( $("#"+textContainerID), {type:"chars"});
	var impar = $("#"+textContainerID+">:odd");
	var par = $("#"+textContainerID+">:even");
	var ds = new TimelineMax();
	ds.add(TweenMax.staggerFrom(impar, 2, {left:-50,autoAlpha:0, ease:Sine.easeOut}, 0.01),0);
	ds.add(TweenMax.staggerFrom(par, 2, {left:50,autoAlpha:0, ease:Sine.easeOut}, 0.01),0);
	return ds; 
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