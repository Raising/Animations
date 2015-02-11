var EPR = {author:"Ignacio Medina castillo , AKA Raising"};


EPR.GLOBALS = {};
EPR.GLOBALS.selectedContainer = {};
EPR.GLOBALS.maxDuration = 10;
EPR.GLOBALS.selectedAnimation = {};


EPR.interactor = function(){

	var interactor = this;
	this.ableMenus = [];
	this.minimizedMenus = [];
	this.divCreated = [];

	this.minimize = function(menu){
		var positionX = 0;
		var positionY = $("body").height()-20;
		for (var i = 0; i< interactor.minimizedMenus.length;i++){
			positionX += minimizedMenus[i].width;
		}
		TweenMax.to(menu.mainContainer, 0.2, {x:positionX, y:positionY,  transformOrigin:"0% 0% 0"});
	}

	this.addDiv = function(workingDiv){

		interactor.divCreated.push(workingDiv);
		interactor.ContainersMenu.reset();
	}


	this.addMenus = function(){
	
		interactor.creator =  new EPR.CreatorMenu("creator",interactor,1930,10);
		interactor.Transformator = new EPR.TransformMenu("transformator",interactor,2190,10);
		interactor.GlobalTimeline = new EPR.GlobalTimelineMenu("globalTimer",interactor,0,1430);
		interactor.AnimationSelector = new EPR.AnimationSelectorMenu("AnimationSelector",interactor,2190,360);
		interactor.AnimationTransform = new EPR.AnimationTransformMenu("AnimationTransform",interactor,1930,890);
		interactor.TextEditor = new EPR.TextEditorMenu("TextEditor",interactor,10,1090);
		interactor.ContainersMenu =  new EPR.ContainersMenu("ContainerHandler",interactor,1930,250);

		$("body").append(interactor.creator.mainContainer);
		$("body").append(interactor.Transformator.mainContainer);
		$("body").append(interactor.GlobalTimeline.mainContainer);
		$("body").append(interactor.AnimationSelector.mainContainer);
		$("body").append(interactor.AnimationTransform.mainContainer);
		$("body").append(interactor.TextEditor.mainContainer);
		$("body").append(interactor.ContainersMenu.mainContainer);


		interactor.AnimationSelector.setDragable();
		interactor.creator.setDragable();
		interactor.Transformator.setDragable();
		interactor.GlobalTimeline.setDragable();
		interactor.AnimationTransform.setDragable();
		interactor.TextEditor.setDragable();
		interactor.ContainersMenu.setDragable();
	}

	this.reformMenus = function(){

		
		$("#mainContainer").empty();
		for (var i = 0 ; i < interactor.divCreated.length;i++){
			interactor.divCreated[i].insertInTo(interactor.divCreated[i].father);
			interactor.divCreated[i].setBasicInteraction();
		}
		interactor.ContainersMenu.reset();
	}

	this.moveUp = function (div) {
		var pos = interactor.divCreated.indexOf(div);
		console.log(pos);
		if (pos==0){
			alert("el div seleccionado ya está en la parte posterior");
		}else{
			var tempDiv = interactor.divCreated[pos-1];
			interactor.divCreated[pos-1] =div;
			interactor.divCreated[pos] = tempDiv;
		}
		interactor.reformMenus();
	}

	this.moveDown = function (div) {
		var pos = interactor.divCreated.indexOf(div);
		console.log(pos);
		if (pos==(interactor.divCreated.length-1)){
			alert("el div seleccionado ya está en la parte frontal");
		}else{
			var tempDiv = interactor.divCreated[pos+1];
			interactor.divCreated[pos+1] = div;
			interactor.divCreated[pos] = tempDiv;
		}
		interactor.reformMenus();
	}

	this.select = function(divSelected){
		if (divSelected === EPR.GLOBALS.selectedContainer){}else{
			if (EPR.GLOBALS.selectedContainer.unSelect){EPR.GLOBALS.selectedContainer.unSelect();}
				EPR.GLOBALS.selectedContainer = divSelected;
				divSelected.select();
				interactor.Transformator.reset();
				interactor.AnimationSelector.reset();
				interactor.TextEditor.reset();
				interactor.ContainersMenu.reset();

		}
	}


	this.selectAnimation = function(animationSelected){
		if (animationSelected === EPR.GLOBALS.selectedAnimation){}else{
				if(EPR.GLOBALS.selectedAnimation.HTMLversion){EPR.GLOBALS.selectedAnimation.HTMLversion.removeClass("animationSelected");}
				EPR.GLOBALS.selectedAnimation = animationSelected;
				EPR.GLOBALS.selectedAnimation.HTMLversion.addClass("animationSelected");
				interactor.AnimationTransform.reset();
		}
	}

	this.saveHtml = function(){
		var d = new Date();
		var fileName = "plantilla_"+d.getTime()+".html";
		
		for (var i = 0; i<interactor.divCreated.length ;i++){
			interactor.divCreated[i].preparationForSave();		
		}

		var result = EPR.fusionFile(interactor);

		for (var i = 0; i<interactor.divCreated.length ;i++){
			interactor.divCreated[i].restraureFromSave();
		}

		var blob = new Blob([result], {type: 'application/octet-binary'}); // pass a useful mime type here
		
		var url = URL.createObjectURL(blob,fileName);
		var enlace = $("<a href='"+url+"'>CLICKONME</a>");
		$(interactor.creator.body).append(enlace);
		
	}

}


EPR.Menu = function(identificador,interactor,width,height,posX,posY){
	console.log(posX,posY);
	var menu = this;
	this.interactor = interactor;
	this.id = identificador;
	this.width = width;
	this.height = height;
	this.mainContainer = $("<div id='"+this.id+"'  class='menuContainer'></div>");
	TweenMax.to(this.mainContainer,0.5,{x:posX,y:posY,ease:Sine.easeOut});
	this.header= $("<div class='menuHeader'  style='width:"+this.width+"px'><b>	"+identificador+"</b></div>"); 
	this.body=   $("<div class='menuBody'    style='width:"+this.width+"px;height:"+this.height+"px;'> </div>");

	this.minimizeButon = $("<button class='headerButon'>___</button>");
	
	this.minimizeButon.click(function(){menu.minimize();});
	this.header.prepend(this.minimizeButon);

	this.maximizeButon = $("<button class='headerButon'>|M|</button>");
	this.maximizeButon.click(function(){menu.maximize();});
	
	
	$(this.mainContainer).append(this.header).append(this.body);


	this.minimize = function (){
	//menu.restorePosition = {x:$(menu.mainContainer).position().left,y:menu.mainContainer.position().top};
	TweenMax.to($(menu.body), 0.2, {scaleY:0,  transformOrigin:"0% 0% 0"});
	menu.minimizeButon.remove();
	menu.header.prepend(menu.maximizeButon);
	this.maximizeButon.click(function(){menu.maximize();});
	
	//menu.interactor.minimize(menu);
	} 


	this.maximize = function (){
	
	TweenMax.to($(menu.body), 0.2, {scaleY:1,  transformOrigin:"0% 0% 0"});
	//TweenMax.to($(menu.mainContainer), 0.2, {x:menu.restorePosition.x,y:menu.restorePosition.y,  transformOrigin:"0% 0% 0"});
	menu.maximizeButon.remove();
	menu.header.prepend(menu.minimizeButon);
	menu.minimizeButon.click(function(){menu.minimize();});
	} 


	this.setDragable = function(){
		Draggable.create(menu.mainContainer, {
			//bounds:$("body"),
			type:"x,y",
			throwProps:true,
			zIndexBoost:false,
			trigger:menu.header,
			onDrag:function() {
	        },
	        onDragEnd:function(){
	        },
		});
	}
}

EPR.TextEditorMenu = function(identificador,interactor,posX,posY){
	EPR.Menu.call(this,identificador,interactor,500,300,posX,posY);
	var Tmenu= this;
	this.textField = $("<div class='textFieldEditable' contenteditable='true'></div>");
	$(this.body).append(this.textField);
	$(this.textField).ckeditor();

	$(this.textField).bind("DOMSubtreeModified",function(){
		if (EPR.GLOBALS.selectedContainer.texto){
			console.log("cambiando");
  			$(EPR.GLOBALS.selectedContainer.texto)[0].innerHTML = ($(Tmenu.textField)[0].innerHTML);
  		}
	});



	this.reset = function(){
		var tempContent = $(EPR.GLOBALS.selectedContainer.texto)[0].innerHTML;
		$(Tmenu.textField).height($(EPR.GLOBALS.selectedContainer.texto).height());
		$(Tmenu.textField).width($(EPR.GLOBALS.selectedContainer.texto).width());
		$(Tmenu.textField).empty().append(tempContent);
	}

}

EPR.CreatorMenu = function(identificador,interactor,posX,posY){
	EPR.Menu.call(this,identificador,interactor,250,200,posX,posY);
	var Cmenu= this;
	this.numDivs = 0;
	this.addDivButton = $("<button class='crearButton'>Crear DIV</button>");
	this.creationForm = $("<div class='creationForm clearfix'></div>");
	this.nameInput = $("<input class='crearName' type='text'></input>");
	this.xSizeInput = $("<input class='sizeInput' type='text'></input>");
	this.ySizeInput = $("<input class='sizeInput' type='text'></input>");
	this.xSizeLabel = $("<label class='sizeLabel'>W:</label>");
	this.ySizeLabel = $("<label class='sizeLabel'>H:</label>");
	this.xSizeCluster = $("<div class='sizeCluster'></div>");
	this.ySizeCluster = $("<div class='sizeCluster'></div>");
	this.checkInside = $("<input class='crearCheck' type='checkbox'></input");
	this.clearDiv = $("<div class='clearfix'></div>");

	this.saveButton = $("<button class='headerButon'>Salvar Plantilla</button>");
	$(this.header).append(this.saveButton);
	this.saveButton.click(Cmenu.interactor.saveHtml);
	$(this.xSizeCluster).append(this.xSizeLabel).append(this.xSizeInput);
	$(this.ySizeCluster).append(this.ySizeLabel).append(this.ySizeInput);

	$(this.body).append(this.creationForm);
	$(this.creationForm).append(this.addDivButton);
	$(this.creationForm).append(this.nameInput);
	$(this.creationForm).append(this.xSizeCluster);
	$(this.creationForm).append(this.ySizeCluster);
	$(this.creationForm).append(this.checkInside);
	$(this.creationForm).append(this.clearDiv);


	this.createNewDiv = function(){
		var name = $(Cmenu.nameInput).val();
		var dimX = $(Cmenu.xSizeInput).val();
		var dimY = $(Cmenu.ySizeInput).val();
		
		if (name == ""){
			Cmenu.numDivs++;
			name = "div_number_" + Cmenu.numDivs;
		}

		if (dimX == "" || dimY == ""){
			dimX = 300;
			dimY = 400;
		}
		
		var newDiv = new EPR.workingDiv(name,dimX,dimY);
		
		if ($(Cmenu.checkInside).prop('checked')){
			newDiv.father=EPR.GLOBALS.selectedContainer;
			newDiv.insertInTo(EPR.GLOBALS.selectedContainer);
		}else{
			newDiv.father="null";
			newDiv.insertInTo();
		}
		
		newDiv.setBasicInteraction();
		EPR.GLOBALS.interactor.addDiv(newDiv);
	}

	$(this.addDivButton).click(this.createNewDiv);


	this.perspectiveHandler = new TimelineMax({paused:true}).fromTo($("#mainContainer"),10,{perspective:100},{perspective:3000,ease:Linear.easeNone}).progress(0.5);
    this.perspectiveHandlerSlider = $("<div  class='perspectiveSlider'></div>").slider({range: false,min: 0,max: 100,step:0.01,
        slide: function ( event, ui ) {
        	Cmenu.perspectiveHandler.progress( ui.value/100);}});
    this.perspectiveHandlerSlider.slider("value", this.perspectiveHandler.progress() *100);
     $(this.body).append(this.perspectiveHandlerSlider);
}	


EPR.TransformMenu = function(identificador,interactor,posX,posY){

	EPR.Menu.call(this,identificador,interactor,250,315,posX,posY);
	var Tmenu =this;



	this.reset = function(){
		$(Tmenu.body).empty().append(EPR.GLOBALS.selectedContainer.getTransformControls());
		
	}
}

EPR.ContainersMenu = function(identificador,interactor,posX,posY){

	EPR.Menu.call(this,identificador,interactor,250,615,posX,posY);
	var CONTmenu =this;

	console.log("creando");
	this.reset = function(){
		console.log("reset invocado");
		$(CONTmenu.body).empty();
		for (var i = 0 ; i< interactor.divCreated.length;i++){
			if (interactor.divCreated[i] === EPR.GLOBALS.selectedContainer){
			$(CONTmenu.body).append(interactor.divCreated[i].getDivControls(interactor,true));		
			}
			else{
			$(CONTmenu.body).append(interactor.divCreated[i].getDivControls(interactor,false));	
			}
		}
	}

}





EPR.AnimationSelectorMenu = function(identificador,interactor,posX,posY){
	EPR.Menu.call(this,identificador,interactor,250,300,posX,posY);
	var Amenu =this;

	this.reset = function(){
		$(Amenu.body).empty().append(EPR.GLOBALS.selectedContainer.getAnimationControls(interactor));
	}
}

EPR.Animation = function(divAnimated){
	var animation = this;
	this.stats = {};
	this.stats.target = divAnimated;
	this.stats.startTime = 0;
	this.stats.duration = 2;
	this.stats.ease = "Linear.easeNone";
	this.stats.fromMatrix = "";
	this.stats.toMatrix = "";
	this.stats.fromOpacity = 1;
	this.stats.toOpacity = 1;

	this.getStats = function(){
		return animation.stats;
	}

	this.HTMLversion = $("<div class='animationContainer'></div>");
	this.baseLine = $("<div class='baseLine'></div>");
	this.timeReference = $("<div class='referenceLine'></div>");
	$(this.HTMLversion).append(this.baseLine).append(this.timeReference);
	this.getHTML = function(){
		TweenMax.to(animation.timeReference,0.5,{width:(animation.stats.duration/EPR.GLOBALS.maxDuration)*220,x:15+(220/EPR.GLOBALS.maxDuration)*animation.stats.startTime});
		$(this.HTMLversion).append(this.baseLine).append(this.timeReference);
	
		 animation.HTMLversion.click(function(){
			EPR.GLOBALS.interactor.selectAnimation(animation);
		 });

		return animation.HTMLversion;
	}


	this.animationForm = $("<div class='AnimationTransformContainer'></div>");

	this.setARMfunction = function(funcName){
		animation.stats.tipo="ARM";
		animation.stats.ARMfunction = funcName;
		$("#ARM_text").addClass("tipoAnimacionSeleccionada");
		$("#POS_text").removeClass("tipoAnimacionSeleccionada");
		$("#ARM_function").empty().append(funcName);
		animation.stats.situation = animation.stats.target.getStatus();
	}


	this.getAnimationTransformControls = function(){
		
		var fromForm = $("<tr class='animationRow'><td>From</td></tr>");
		var toForm = $("<tr class='animationRow'><td>To</td></tr>");
		var iteractionForm = $("<tr class='animationRow'><td></td></tr>");
		

		var fromTime= $("<input class='animationInput' type='text' value='"+animation.stats.startTime+"'></input>");
		var toTime= $("<input class='animationInput' type='text' value='"+(parseInt(animation.stats.startTime)+parseInt(animation.stats.duration))+"'></input>");
		var setTime= $("<button class='animationButton'>SET Time</button>");


		var fromTranslationSet= $("<button class='animationButton'>SET Form</button>");
		var toTranslationSet= $("<button class='animationButton'>SET To</button>");
		var clearTranslationSet= $("<button class='animationButton'>CLEAR</button>");

	/*	var fromOpacity= $("<input class='animationInput' type='text' value='"+animation.stats.fromOpacity+"'></input>");
		var toOpacity= $("<input class='animationInput' type='text' value='"+animation.stats.toOpacity+"'></input>");
		var setOpacity= $("<button class='animationButton'>SET opacity</button>");
*/
		var ARMselectionButton = $("<button class='animationButton'>OPEN ARM</button>");
		if (animation.stats.tipo ==="ARM"){
			var controlForm = $("<table><tr>"+
								"<th></th>"+
								"<th>Time</th>"+
								"<th id='POS_text' class=''>Position</th>"+						
								"<th id='ARM_text' class='tipoAnimacionSeleccionada'>ARM</th>"+
							"</tr></table>");
			var ARMselection = $("<span class='animationText'  id='ARM_function'>"+animation.stats.ARMfunction+"</span>");	
		}else if (animation.stats.tipo ==="desplazamiento"){
			var controlForm = $("<table><tr>"+
								"<th></th>"+
								"<th>Time</th>"+
								"<th id='POS_text' class='tipoAnimacionSeleccionada'>Position</th>"+						
								"<th id='ARM_text' class=''>ARM</th>"+
							"</tr></table>");
			var ARMselection = $("<span class='animationText'  id='ARM_function'></span>");
		}else{
			var controlForm = $("<table><tr>"+
								"<th></th>"+
								"<th>Time</th>"+
								"<th id='POS_text' class=''>Position</th>"+						
								"<th id='ARM_text' class=''>ARM</th>"+
							"</tr></table>");
			var ARMselection = $("<span class='animationText'  id='ARM_function'></span>");
		}
		


		$(animation.animationForm).empty().append(controlForm);
		$(controlForm)
			.append(fromForm)
			.append(toForm)
			.append(iteractionForm);
		$(fromForm)
		.append($("<td>").append(fromTime))
		.append($("<td>").append(fromTranslationSet))
		.append($("<td>").append(ARMselection));
		ARMselection
		//.append($("<td>").append(fromOpacity))
		
		$(toForm)
		.append($("<td>").append(toTime))
		.append($("<td>").append(toTranslationSet));
		//.append($("<td>").append(toOpacity));
		$(iteractionForm)
		.append($("<td>").append(setTime))
		.append($("<td>").append(clearTranslationSet))
		.append($("<td>").append(ARMselectionButton));
		//.append($("<td>").append(setOpacity));
		


		setTime.click(function(){
			animation.stats.startTime = fromTime.val();
			animation.stats.duration = toTime.val() -animation.stats.startTime;
			TweenMax.to(animation.timeReference,0.5,{width:(animation.stats.duration/EPR.GLOBALS.maxDuration)*220,x:15+(220/EPR.GLOBALS.maxDuration)*animation.stats.startTime});
		});

		fromTranslationSet.click(function(){
			animation.stats.fromStatus = animation.stats.target.getStatus();
			animation.stats.tipo = "desplazamiento";
			$("#ARM_text").removeClass("tipoAnimacionSeleccionada");
			$("#POS_text").addClass("tipoAnimacionSeleccionada");
			$("#ARM_function").empty();
		});

		toTranslationSet.click(function(){
			animation.stats.toStatus =  animation.stats.target.getStatus();
			animation.stats.tipo = "desplazamiento";
			$("#ARM_text").removeClass("tipoAnimacionSeleccionada");
			$("#POS_text").addClass("tipoAnimacionSeleccionada");
			$("#ARM_function").empty();
		});
		var ARMopen = 0;
		ARMselectionButton.click(function(){
			if(ARMopen == 0){
				$("#functionSelector").addClass("show");
				ARMopen = 1;
			}else{
				$("#functionSelector").removeClass("show");
				ARMopen = 0;
			}
			
		});


		return animation.animationForm;
	}
}

EPR.AnimationTransformMenu = function(identificador,interactor,posX,posY){
	EPR.Menu.call(this,identificador,interactor,450,150,posX,posY);
	var ATmenu =this;

	this.reset = function(){
		console.log("insertando animacion");

		$(ATmenu.body).empty().append(EPR.GLOBALS.selectedAnimation.getAnimationTransformControls());	
	}
}





EPR.GlobalTimelineMenu = function(identificador,interactor,posX,posY){
	EPR.Menu.call(this,identificador,interactor,1920,70,posX,posY);
	var GTmenu =this;

	this.globalTimeSlider = $("<div class='durationSlider'></div>").slider({range: false,min: 0,max: 100,step:0.1,
        slide: function ( event, ui ) {
        	//EPR.GLOBALS.timeline.progress( ui.value/100);
        	GTmenu.actualPositionInput.val(GTmenu.maxDurationInput.val()*ui.value/100);
        }});


	this.maxDurationLabel = $("<label class='durationLabel' >Duración</label>");
	this.maxDurationInput =  $("<input class='durationInput' type='text' value='"+EPR.GLOBALS.maxDuration+"'></input>");
	this.actualPositionInput =  $("<input class='positionInput' type='text'></input>");
	this.actualPositionLabel =$("<label class='positionLabel' >Posición</label>");
	this.PlayButton =  $("<button class='playPAuseButton'>(0)</button>");
	this.GotoButton =  $("<button class='gotoButton'>(Goto)</button>");


	$(this.body).append(this.PlayButton)
			.append(this.GotoButton)
			.append(this.globalTimeSlider)
			.append(this.maxDurationLabel)
			.append(this.maxDurationInput)
			.append(this.actualPositionLabel)
			.append(this.actualPositionInput);


	this.maxDurationInput.change(function(){
		EPR.GLOBALS.maxDuration = GTmenu.maxDurationInput.val();
		console.log(EPR.GLOBALS.maxDuration);
	});
}







EPR.workingDiv = function(name,dimX,dimY){

	var div = this;
	this.name = name;
	this.htmlVersion = $("<div id='"+name+"' style='perspective:500px;width:"+dimX+"px;height:"+dimY+"px' class='workingDiv' ></div>");

	this.imagen = $("<img id='image_"+name+"'  style='width:100%;height:100%';position:absolute></img>");
	this.texto = $("<div style='width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden'></div>");

	$(this.htmlVersion).append(this.imagen).append(this.texto);
	//$(this.texto).ckeditor();
	this.animations = [];

	this.stats = {
		id:name,
		dimensionX:dimX,
		dimensionY:dimY,
		opacitiy:1,
		transform:0,
	};

	this.pasiveAnimations = new TimelineMax({paused:true});
	this.pasiveAnimations.fromTo(this.htmlVersion, 3,
						{boxShadow: "0px 0px 10px 10px rgba(255,0,0,0) "}, 
						{boxShadow: "0px 0px 10px 10px rgba(255,0,0,1) ",repeat: -1,yoyo: true,ease: Elastic.easeOut});

	
	this.rotationForm = $("<div class='rotationForm'></div>");
	this.rotationXcluster = $("<div class='rotationCluster'><label class='rotationLabel'>X</label></div>"); 
	this.rotationYcluster = $("<div class='rotationCluster'><label class='rotationLabel'>Y</label></div>"); 
	this.rotationZcluster = $("<div class='rotationCluster'><label class='rotationLabel'>Z</label></div>"); 
	this.rotationReset = $("<button class='rotationResetButton'>Reset</button>");
	this.rotationForm
		.append("<div class='rotationTitle'><label class='rotationLabel'>Rotaciones</label></div>")
		.append(this.rotationXcluster)
		.append(this.rotationYcluster)
		.append(this.rotationZcluster)
		.append($("<div class='clearfix'></div>"))
		.append(this.rotationReset);




	this.rotationX = new TimelineMax({paused:true}).fromTo(this.htmlVersion,10,{rotationX:-180,ease:Linear.easeNone},{rotationX:180,ease:Linear.easeNone}).progress(0.5);
	this.rotationY = new TimelineMax({paused:true}).fromTo(this.htmlVersion,10,{rotationY:-180,ease:Linear.easeNone},{rotationY:180,ease:Linear.easeNone}).progress(0.5);
	this.rotationZ = new TimelineMax({paused:true}).fromTo(this.htmlVersion,10,{rotationZ:-180,ease:Linear.easeNone},{rotationZ:180,ease:Linear.easeNone}).progress(0.5);
	
	this.positionZ = new TimelineMax({paused:true}).fromTo(this.htmlVersion,10,{z:-1000,ease:Linear.easeNone},{z:1000,ease:Linear.easeNone}).progress(0.5);
	
    this.rotationXSlider = $("<div  class='rotationSlider'></div>").slider({orientation: "vertical",range: false,min: 0,max: 360,step:0.01,
        slide: function ( event, ui ) {div.rotationX.progress( ui.value/360);}});
    this.rotationYSlider = $("<div  class='rotationSlider'></div>").slider({orientation: "vertical",range: false,min: 0,max: 360,step:0.01,
        slide: function ( event, ui ) {div.rotationY.progress( ui.value/360);}});
    this.rotationZSlider = $("<div  class='rotationSlider'></div>").slider({orientation: "vertical",range: false,min: 0,max: 360,step:0.1,
        slide: function ( event, ui ) {div.rotationZ.progress( ui.value/360);}});
   


	this.rotationXcluster.append(this.rotationXSlider).append($("<div class='clearfix'></div>"));
	this.rotationYcluster.append(this.rotationYSlider).append($("<div class='clearfix'></div>"));
	this.rotationZcluster.append(this.rotationZSlider).append($("<div class='clearfix'></div>"));


   	this.positionZSlider = $("<div  class='positionSlider'></div>").slider({range: false,min: 0,max: 100,step:0.1,
        slide: function ( event, ui ) {div.positionZ.progress( ui.value/100);}});
   
   	this.resetRotation = function(){
   		div.rotationX.progress(0.5);
		div.rotationY.progress(0.5);
		div.rotationZ.progress(0.5);
		div.updateInterfaces();
	}	



	this.dimensionForm = $("<div class='dimensionForm'></div>");
	this.dimensionXcluster = $("<div class='dimensionCluster'><label class='dimensionLabel'>TamañoX</label></div>"); 
	this.dimensionYcluster = $("<div class='dimensionCluster'><label class='dimensionLabel'>TamañoY</label></div>"); 
	this.scaleXcluster = $("<div class='scaleCluster'><label class='scaleLabel'>EscalaX</label></div>");
	this.scaleYcluster = $("<div class='scaleCluster'><label class='scaleLabel'>EscalaY</label></div>");
	this.dimensionXInput = $("<input class='dimensionInput' type='text'></input>");
	this.dimensionYInput = $("<input class='dimensionInput' type='text'></input>");
	this.scaleXInput = $("<input class='scaleInput' type='text'></input>");
	this.scaleYInput = $("<input class='scaleInput' type='text'></input>");
	this.dimensionApplyButton = $("<button class='dimensionApplyButton'>Aplicar</button>");

	$(this.dimensionXcluster).append(this.dimensionXInput);
	$(this.dimensionYcluster).append(this.dimensionYInput);
	$(this.scaleXcluster).append(this.scaleXInput);
	$(this.scaleYcluster).append(this.scaleYInput);
	$(this.dimensionForm)
				.append(this.dimensionXcluster)
				.append(this.dimensionYcluster)
			//	.append($("<div class='clearfix'></div>"))
			//	.append(this.scaleXcluster)
			//	.append(this.scaleYcluster)
				.append($("<div class='clearfix'></div>"))
				.append(this.dimensionApplyButton)
				.append($("<div class='clearfix'></div>"));

	this.setDimensions = function(){
		div.htmlVersion.width(div.dimensionXInput.val());
		div.htmlVersion.height(div.dimensionYInput.val());
	}			


    this.updateInterfaces= function() {
    		div.rotationXSlider.slider({orientation: "vertical",range: false,min: 0,max: 360,step:0.1,
        slide: function ( event, ui ) {div.rotationX.progress( ui.value/360);}});
   			 div.rotationYSlider.slider({orientation: "vertical",range: false,min: 0,max: 360,step:0.1,
        slide: function ( event, ui ) {div.rotationY.progress( ui.value/360);}});
     		div.rotationZSlider.slider({orientation: "vertical",range: false,min: 0,max: 360,step:0.1,
        slide: function ( event, ui ) {div.rotationZ.progress( ui.value/360);}});
     		div.positionZSlider.slider({range: false,min: 0,max: 100,step:0.1,
        slide: function ( event, ui ) {div.positionZ.progress( ui.value/100);}});

       	div.rotationXSlider.slider("value", div.rotationX.progress() *360);
       	div.rotationYSlider.slider("value", div.rotationY.progress() *360);
       	div.rotationZSlider.slider("value", div.rotationZ.progress() *360);
       	div.positionZSlider.slider("value", div.positionZ.progress() *100);

       	div.dimensionXInput.val(div.htmlVersion.width());
       	div.dimensionYInput.val(div.htmlVersion.height());
       	div.scaleXInput.val(div.htmlVersion.css("scalex"));
       	div.scaleYInput.val(div.htmlVersion.css("scaley"));


       	this.rotationReset.click(div.resetRotation);
       	this.dimensionApplyButton.click(div.setDimensions);
        }    

    this.contentForm = $("<div class='contentForm'></div>");
    this.setImage = $("<input type='file' name='image'/>");
    this.tokenField = $("<input type='text'/>");

    $(this.contentForm).append(this.setImage).append(this.tokenField);

     $(this.setImage).change(function (event){
     	
      //	var tmppath = URL.createObjectURL(event.target.files[0]); 	
       div.imagen.attr('src',URL.createObjectURL(event.target.files[0]));

     });


     this.deleteButton = $("<button class='divDeleteButton'>X</button>");
	 $(this.deleteButton).click(function(){
	 	console.log("borrando");
	 	div.htmlVersion.remove();
	 	div.animations = [];
 		});
	 
    this.transformControls = $("<div class='transforControl'></div>");
    $(this.transformControls)
    .append(this.rotationForm)
    .append(this.dimensionForm)
    .append(this.positionZSlider)
    .append( this.contentForm)
    .append(this.deleteButton)
    .append($("<div class='clearfix'></div>"));
    
   this.getTransformControls = function(){

     $(this.setImage).change(function (event){	
       div.imagen.attr('src',URL.createObjectURL(event.target.files[0]));
     });
     
   	 $(div.deleteButton).click(function(){
	 	console.log("borrando");
	 	div.htmlVersion.remove();
	 	div.animations = [];
 		});
   	return div.transformControls;
   }


  this.getAnimationControls =function(interactor){
   	var animationForm = $("<div class='animationForm'></div>");
	var animationAddButton = $("<button class='animationAddButton'>Crear</button>");
	var animationRemoveButton = $("<button class='animationDeleteButton'>Eliminar</button>");

	$(animationForm).append(animationAddButton)
	.append(animationRemoveButton)
	.append($("<div class='clearfix'></div>"));

	for (var i =0;i<div.animations.length;i++){
		$(animationForm).append(div.animations[i].getHTML());
	}		


	animationAddButton.click(function(){
		var newAnimation = new EPR.Animation(EPR.GLOBALS.selectedContainer);
		div.animations.push(newAnimation);
		$(animationForm).append(newAnimation.getHTML());
		newAnimation.getHTML().click();

	});

	animationRemoveButton.click(function(){
		div.animations.remove(EPR.GLOBALS.selectedAnimation);
		EPR.GLOBALS.selectedAnimation.getHTML().remove();
		div.animations.push(newAnimation);
		$(animationForm).append(div.animations[div.animations.length-1].getHTML());		
	});


	
	return animationForm;
  }

	this.select = function (){
		
     	div.updateInterfaces();
		div.pasiveAnimations.resume();
	}


	this.insertInTo = function(identificador){
		TweenMax.to(div.htmlVersion,0.1,{rotationY:0.01});
		if (!identificador || identificador == "null"){
			$("#mainContainer").append(div.htmlVersion);
		}
		else{
			$(identificador.htmlVersion).append(div.htmlVersion);
		}
	}

	this.unSelect = function(){
		div.pasiveAnimations.pause().progress(0);
	}

	this.setBasicInteraction = function(){
		Draggable.create(div.htmlVersion, {
			type:"x,y",
			throwProps:true,
			zIndexBoost:false,
			 onPress:function(event){
			 	EPR.GLOBALS.interactor.select(div);
			 	event.stopPropagation();
			 	return false;
	        }
		});

	}

	this.getStatus = function(){
		var status = {};
		status.tipo = "desplazamiento";
		status.rotationX = (div.rotationX.progress()-0.5)*360;
		status.rotationY = (div.rotationY.progress()-0.5)*360;
		status.rotationZ = (div.rotationZ.progress()-0.5)*360;
		status.positionZ = (div.positionZ.progress()-0.5)*2000;
		status.positionX = div.htmlVersion.position().left;
		status.positionY = div.htmlVersion.position().top;

		return status;
	}
	this.preparationForSave = function(){
		div.pasiveAnimations.pause().progress(0);
		div.saveImage = $(div.imagen).attr('src');
		$(div.imagen).attr('src',$(div.tokenField).val());
	}

	this.restraureFromSave = function(){
		$(div.imagen).attr('src',div.saveImage);
	}

	this.getDivControls = function(interactor,selected){
			if (selected == true){
					var divForm = $("<div class='divForm selected'>"+div.name+"</div>");
			}else{
					var divForm = $("<div class='divForm'>"+div.name+"</div>");
			}
			


			var divUPButton= $("<button class='divUP'>^</button>");
			var divDOWNButton = $("<button class='divDown'>v</button>");

			$(divForm).append(divUPButton)
			.append(divDOWNButton)
			.append($("<div class='clearfix'></div>"));
/*
			for (var i =0;i<div.animations.length;i++){
				$(animationForm).append(div.animations[i].getHTML());
			}		
		*/ 	divForm.click(function() {
			 interactor.select(div);
			});
		
			divUPButton.click(function(){
				interactor.moveUp(div);
			});

			divDOWNButton.click(function(){
				interactor.moveDown(div);	
			});


			
			return divForm;
	}
}


EPR.fusionFile = function(interactor){
	
	var holeFile = '<html><head>\n'+
       '<title>Plantilla</title>\n'+
       '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n'+
		'<meta name="viewport" content="width=device-width, initial-scale=1.0">\n'+
		
		'<link href="complete.css" rel="stylesheet">\n'+
       
		'<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.13.2/TweenMax.min.js"></script>\n'+
        '<script type="text/javascript" src="libs/jquery-2.1.1.min.js"></script>\n'+
        '<script type="text/javascript" src="libs/SplitText.min.js"></script>\n'+
 		'<script type="text/javascript" src="libs/ARM.js"></script>\n'+
 
    '</head> <body>\n' + 

    $("#mainContainer")[0].outerHTML +

    '\n</body><script>\n';

    holeFile += "var GTL = new TimelineMax();\n";

    for (var i = 0; i < interactor.divCreated.length;i++){
    	var actualDiv = interactor.divCreated[i];
    	console.log(actualDiv.animations);
    	for (var k = 0;k<actualDiv.animations.length;k++){
    		console.log(actualDiv.animations);
			var actualAnimation = actualDiv.animations[k];

			console.log(actualAnimation.stats);
			var stats = actualAnimation.stats;

			if (stats.tipo == "desplazamiento"){
	   	 	var tween = "GTL.fromTo($('#"+stats.target.name+"'),"+stats.duration+","+
	   	 		"{rotationX:"+stats.fromStatus.rotationX+","+
				"rotationY:"+stats.fromStatus.rotationY+","+
				"rotationZ:"+stats.fromStatus.rotationZ+","+
				"x:"+stats.fromStatus.positionX+","+
				"y:"+stats.fromStatus.positionY+","+
				"z:"+stats.fromStatus.positionZ+"},"+


	   	 		"{rotationX:"+stats.toStatus.rotationX+","+
				"rotationY:"+stats.toStatus.rotationY+","+
				"rotationZ:"+stats.toStatus.rotationZ+","+
				"x:"+stats.toStatus.positionX+","+
				"y:"+stats.toStatus.positionY+","+
				"z:"+stats.toStatus.positionZ+"},"+


	   	 		stats.startTime+");\n";		
	   	 	}else if(stats.tipo == "ARM"){
	   	 		var functionSplited = stats.ARMfunction.split(".");
	   	 		console.log(functionSplited);
	   	 		if (functionSplited[0] == "Text"){
	   	 		var tween = "GTL.add(ARM."+stats.ARMfunction+"('"+stats.target.name+"',"+stats.duration+"),"+
		   	 			stats.startTime+");\n";			
	   	 		}else{
				var tween = "GTL.call(function(){GTL.add(ARM."+stats.ARMfunction+"('"+stats.target.name+"',"+stats.duration+"),"+
		   	 			stats.startTime+");},null,'',"+stats.startTime+");\n";		
	   	 		}
	   	 	}	
       		holeFile += tween;
        }
    }




   holeFile +='GTL.resume();\n</script>\n</html>';

	return holeFile;

}