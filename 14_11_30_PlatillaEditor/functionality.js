


$(document).ready(function() {
	if (window.File && window.FileReader && window.FileList && window.Blob) {
 
} else {
  alert('The File APIs are not fully supported in this browser.');
}



	
	EPR.GLOBALS.interactor = new EPR.interactor();
	EPR.GLOBALS.interactor.addMenus();

	var frameSelected = "frameTop";
	var kindSelected = "Texto";
	var flowSelected = "Entrada";

	var actualiceFunctionFrame= function(actualFrame){
		var functionHolders = $(".functionHolder");
		var actualHolder = $("#"+actualFrame);
		var tlb = new  TimelineMax()
		.to(functionHolders,1,{rotationY:-60,transformOrigin:"-30% 0%",ease:Sine.easeOut})
		.to(actualHolder,1,{rotationY:0,transformOrigin:"-30% 0%",ease:Sine.easeOut},"-=0.3");
	}

	actualiceFunctionFrame("Texto-Entrada");

	$("#buttonTexto").addClass("botonActive");
	$("#buttonEntrada").addClass("botonActive");

	$(".botonSelector").click(function(){

		if ($(this).parent().attr("id") == "kind"){

			kindSelected = String($(this).attr("id")).substring(6);
		}else{
			flowSelected = String($(this).attr("id")).substring(6);
		}

		$(this).parent().children().removeClass("botonActive");
		$(this).addClass("botonActive");
		actualiceFunctionFrame(kindSelected+"-"+flowSelected);
	});
	

	
	for(var fun in ARM.Text.In ){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
			
			function(auxFun){return function(){	
				
				EPR.GLOBALS.selectedAnimation.setARMfunction("Text.In."+auxFun);

				console.log(EPR.GLOBALS.selectedAnimation);
				ARM.Text.In[auxFun](EPR.GLOBALS.selectedContainer.name,EPR.GLOBALS.selectedAnimation.stats.duration);	

			};			
		}(fun)).appendTo($("#Texto-Entrada"));	
	}



	for(var fun in ARM.Text.Mid){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
			function(auxFun){return function(){	
				EPR.GLOBALS.selectedAnimation.stats.tipo = "ARM";
				EPR.GLOBALS.selectedAnimation.setARMfunction("Text.Mid."+auxFun);
				console.log(EPR.GLOBALS.selectedAnimation);
				ARM.Text.Mid[auxFun](EPR.GLOBALS.selectedContainer.name,EPR.GLOBALS.selectedAnimation.stats.duration);	

			};	
		}(fun)).appendTo($("#Texto-Mantenido"));	

	}
	for(var fun in ARM.Text.Out){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	
				EPR.GLOBALS.selectedAnimation.stats.tipo = "ARM";
				EPR.GLOBALS.selectedAnimation.setARMfunction("Text.Out."+auxFun);
				console.log(EPR.GLOBALS.selectedAnimation);
				ARM.Text.Out[auxFun](EPR.GLOBALS.selectedContainer.name,EPR.GLOBALS.selectedAnimation.stats.duration);	

			};	
		}(fun)).appendTo($("#Texto-Salida"));		

	}
	for(var fun in ARM.Group.In ){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	
				EPR.GLOBALS.selectedAnimation.stats.tipo = "ARM";
				EPR.GLOBALS.selectedAnimation.setARMfunction("Group.In."+auxFun);
				console.log(EPR.GLOBALS.selectedAnimation);
				ARM.Group.In[auxFun](EPR.GLOBALS.selectedContainer.name,EPR.GLOBALS.selectedAnimation.stats.duration);	

			};	
		}(fun)).appendTo($("#Grupal-Entrada"));	

	}
	for(var fun in ARM.Group.Mid ){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	
				EPR.GLOBALS.selectedAnimation.stats.tipo = "ARM";
				EPR.GLOBALS.selectedAnimation.setARMfunction("Group.Mid."+auxFun);
				console.log(EPR.GLOBALS.selectedAnimation);
				ARM.Group.Mid[auxFun](EPR.GLOBALS.selectedContainer.name,EPR.GLOBALS.selectedAnimation.stats.duration);	

			};	
		}(fun)).appendTo($("#Grupal-Mantenido"));	

	}
	for(var fun in ARM.Group.Out ){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	
				EPR.GLOBALS.selectedAnimation.stats.tipo = "ARM";
				EPR.GLOBALS.selectedAnimation.setARMfunction("Group.Out."+auxFun);
				console.log(EPR.GLOBALS.selectedAnimation);
				ARM.Group.Out[auxFun](EPR.GLOBALS.selectedContainer.name,EPR.GLOBALS.selectedAnimation.stats.duration);	

			};	
		}(fun)).appendTo($("#Grupal-Salida"));	

	}
	for(var fun in ARM.Container.In ){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	
				EPR.GLOBALS.selectedAnimation.stats.tipo = "ARM";
				EPR.GLOBALS.selectedAnimation.setARMfunction("Container.In."+auxFun);
				console.log(EPR.GLOBALS.selectedAnimation);
				ARM.Container.In [auxFun](EPR.GLOBALS.selectedContainer.name,EPR.GLOBALS.selectedAnimation.stats.duration);	

			};	
		}(fun)).appendTo($("#Contenedor-Entrada"));	

	}
	for(var fun in ARM.Container.Mid ){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	
				EPR.GLOBALS.selectedAnimation.stats.tipo = "ARM";
				EPR.GLOBALS.selectedAnimation.setARMfunction("Container.Mid."+auxFun);
				console.log(EPR.GLOBALS.selectedContainer.name);
				ARM.Container.Mid[auxFun](EPR.GLOBALS.selectedContainer.name,EPR.GLOBALS.selectedAnimation.stats.duration);	

			};	
		}(fun)).appendTo($("#Contenedor-Mantenido"));	

	}
	for(var fun in ARM.Container.Out ){
		$("<button id='"+fun+"' class='function'>"+fun+"</button>").click(
				function(auxFun){return function(){	
				EPR.GLOBALS.selectedAnimation.stats.tipo = "ARM";
				EPR.GLOBALS.selectedAnimation.setARMfunction("Container.Out."+auxFun);
				console.log(EPR.GLOBALS.selectedAnimation);
				ARM.Container.Out[auxFun](EPR.GLOBALS.selectedContainer.name,EPR.GLOBALS.selectedAnimation.stats.duration);	

			};	
		}(fun)).appendTo($("#Contenedor-Salida"));	

	}






});





