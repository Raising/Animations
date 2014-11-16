


$(document).ready(function() {

	var frameSelected = "frameTop";

	$("#buttonTexto").css({backgroundColor:"lightgreen"});
	$("#buttonEntrada").css({backgroundColor:"lightgreen"});

	$(".botonSelector").click(function(){
		$(this).parent().children().css({backgroundColor:"darkgreen"});
		$(this).css({backgroundColor:"lightgreen"});
	});
	
	$(".frame").click(function(){frameSelected = this.id});


	
	for(var fun in ARM.Text.In ){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	ARM.Text.In[auxFun](frameSelected);	};			
		}(fun)).appendTo($("#Texto-Entrada"));	
	}



	for(var fun in ARM.Text.Mid){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){ARM.Text.Mid[auxFun](frameSelected);	};			
		}(fun)).appendTo($("#Texto-Mantenido"));	

	}
	for(var fun in ARM.Text.Out){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	ARM.Text.Out[auxFun](frameSelected);	};			
		}(fun)).appendTo($("#Texto-Salida"));		

	}
	for(var fun in ARM.Group.In ){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	ARM.Group.In[auxFun](frameSelected);	};			
		}(fun)).appendTo($("#Grupal-Entrada"));	

	}
	for(var fun in ARM.Group.Mid ){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	ARM.Group.Mid[auxFun](frameSelected);	};			
		}(fun)).appendTo($("#Grupal-Mantenimiento"));	

	}
	for(var fun in ARM.Group.Out ){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	ARM.Group.Out[auxFun](frameSelected);	};			
		}(fun)).appendTo($("#Grupal-Salida"));	

	}
	for(var fun in ARM.Container.In ){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	ARM.Container.In[auxFun](frameSelected);	};			
		}(fun)).appendTo($("#Contenedor-Entrada"));	

	}
	for(var fun in ARM.Container.Mid ){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	ARM.Container.Mid[auxFun](frameSelected);	};			
		}(fun)).appendTo($("#Contenedor-Mantenimiento"));	

	}
	for(var fun in ARM.Container.Out ){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	ARM.Container.Out[auxFun](frameSelected);	};			
		}(fun)).appendTo($("#Contenedor-Salida"));	

	}





	ARM.clickOnMe("texto1",ARM.Text.opacityUp);
	ARM.clickOnMe("texto2",ARM.Text.turnFromBehind);
	ARM.clickOnMe("texto3",ARM.Text.turnFromBehind);
	ARM.clickOnMe("texto4",ARM.Text.flipUPline);
	ARM.clickOnMe("texto5",ARM.Text.flipRightChar);
	ARM.clickOnMe("texto6",ARM.Text.rollChar);
	ARM.clickOnMe("texto7",ARM.Text.doubleSideAprox);
	ARM.clickOnMe("texto8",ARM.Text.opacityUp);
	ARM.clickOnMe("texto9",ARM.Text.opacityUp);
/*
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
*/

		 /* 
	.staggerFrom(splitDescription.chars, 1.6, {scale:0.25, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50% -200", ease:Sine.easeOut}, 0.05)
	 .to("#price2", 3, {scrambleText:{text:"655.45€", 
	 	chars:"0123456789.", revealDelay:0.5, tweenLength:false, ease:Linear.easeNone}})
	 ;*/


	// tl.resume();
	

});





