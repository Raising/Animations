/*
ARM, Animation Raising Module.
@autor: Ignacio Medina Castillo, AKA Raising.
*/

var ARM = {version:"1"};



ARM.clipedImageColumToSide = function(imagePath,sizeH,sizeV,columWidth,direction){//

 //ease:Circ.easeInOut}

	var divimage = $('<div>');
	var image = $('<img>');//
	var end =(columWidth+sizeH);
	var onloadHandler = function () {
		
		if (direction === "toLeft"){ 
			TweenMax.to(divimage,12, {css:{clip:'rect(0px, 0px, '+sizeV+'px, -'+columWidth+'px)'}, ease:Elastic.easeOut});
		}
		else if (direction === "toRight"){
			TweenMax.to(divimage, 12, {css:{clip:"rect(0px,"+end+"px, "+sizeV+"px,"+sizeH+"px)"}, ease:Elastic.easeOut});
		}else{
			console.log("argumento de direccion incorrecto");
		}
    }


	image.css({position:"absolute",
		width:"sizeH",
		height:"sizeV",
		left:"0px",
		top:"0px"});
		
	
	divimage.css({position:"absolute",
		width:"sizeH",
		height:"sizeV",
		left:"0px",
		top:"0px"});
	
	divimage.append(image);
	$(document.body).append(divimage);

	if (direction === "toLeft"){
		divimage.css('clip', "rect(0px,"+end+"px, "+sizeV+"px,"+sizeH+"px)");
	}else if (direction === "toRight"){
		divimage.css('clip', 'rect(0px, 0px, '+sizeV+'px, -'+columWidth+'px)');
	}else {
		console.log("argumento de direccion incorrecto");
	}

	
	image.load(onloadHandler);
	image.attr('src', imagePath);
	

} 
