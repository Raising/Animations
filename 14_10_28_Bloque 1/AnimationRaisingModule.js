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


ARM.hangingImage = function(imagePath,targetImg,duration,sizeH,sizeV){


	var image = $('#'+targetImg);//

TweenLite.set(image, {transformPerspective:800});
	var onloadHandler = function () {
		
		TweenMax.fromTo	(image, duration, {rotationX:-90, transformOrigin:"left top"},{rotationX:0, transformOrigin:"left top",ease:Elastic.easeOut });
    }

	image.css({position:"relative",
		width:sizeH+"px",
		height:sizeV+"px",
		left:"100px",
		top:"100px",
		transform: "rotateY(10deg)"
		
		});
		

	
	image.load(onloadHandler);
	image.attr('src', imagePath);

}

ARM.tonelVerticalElastico = function(targetDiv,duration,sizeH,sizeV){

	var animatedDiv = $('#'+targetDiv);
TweenLite.set(animatedDiv, {transformPerspective:800});
	var onloadHandler = function () {
		
		TweenMax.fromTo	(animatedDiv, duration, {rotationY:90, transformOrigin:"left 50% -400"},{rotationY:0, transformOrigin:"left 50% -200",ease:Elastic.easeOut });
    }


	animatedDiv.css({position:"relative",
		width:sizeH+"px",
		height:sizeV+"px",
		left:"100px",
		top:"100px"
		});
		
	//animatedDiv.load(onloadHandler);
	onloadHandler();
}

ARM.tonelVertical = function(targetDiv,duration,sizeH,sizeV){

	var animatedDiv = $('#'+targetDiv);
	TweenLite.set(animatedDiv, {transformPerspective:800});
	var onloadHandler = function () {
	
		TweenMax.fromTo	(animatedDiv, duration, {rotationY:90, transformOrigin:"50% 50% 0"},{rotationY:0, transformOrigin:"50% 50% -1000",ease:Sine.easeInOut});
    }


	animatedDiv.css({position:"relative",
		width:sizeH+"px",
		height:sizeV+"px",
		left:"100px",
		top:"100px"
		});
		
	//animatedDiv.load(onloadHandler);
	onloadHandler();
	
}

ARM.recursivetest = function(targetDiv,duration,sizeH,sizeV,number){
if(number==0){}else{
	var animatedDiv = $('#'+targetDiv);
	TweenLite.set(animatedDiv, {transformPerspective:800});
	var onloadHandler = function () {
	
		TweenMax.fromTo	(animatedDiv, duration, {rotationY:90, transformOrigin:"50% 50% 0"},{rotationY:0, transformOrigin:"50% 50% -1000",ease:Elastic.easeOut});
    }

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