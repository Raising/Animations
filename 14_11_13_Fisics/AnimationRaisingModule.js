/*
ARM, Animation Raising Module.
@autor: Ignacio Medina Castillo, AKA Raising.
*/

var ARM = {version:"1"};



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

ARM.dottedCircle = function(){
	var circles = new TimelineLite();
	var holder = $('<div>');
	holder.appendTo($('#main_container'));
	holder.css({position:"absolute",
			left:"700px",top:"240px"

	});
	var delay = 0.5;
	var numCircles = 40;
		for (var i=0; i< numCircles; i++){
		var color = "#"+((1<<24)*Math.random()|0).toString(16);
		var initialVars = {css:{position:"absolute",borderRadius:"50%", width:"400px",height:"300px",scale:0, z:0.1,border:"10px dotted "+color}};
		var circle = $('<div class="circle"/>').appendTo(holder);
		TweenLite.set(circle, initialVars);
		 circles.to(circle, delay*numCircles,{yoyo:true,repeat:2,scale:Math.random()*1.5+0.5,opacity:0,rotation:Math.random()*9000-4500 } , delay*i);
   		/* circles.fromTo(circle, duration, startVars, {physics2D:{velocity:Math.random() * 300 + 150, angle:Math.random() * 60 + 240, gravity:400, xProp:xProp, yProp:yProp}, immediateRender:false, overwrite:"none"}, delay + duration);
   		 circles.fromTo(circle, duration, startVars, {physics2D:{velocity:Math.random() * 300 + 150, angle:Math.random() * 60 + 240, gravity:400, xProp:xProp, yProp:yProp}, immediateRender:false, overwrite:"none", display:"none"}, delay + duration * 2);
		*/
	}
	return circles;
	

}