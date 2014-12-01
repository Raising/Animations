var EPR = {author:"Ignacio Medina castillo , AKA Raising"};


EPR.GLOBALS = {};
EPR.GLOBALS.selectedContainer = {};

EPR.Interactor = function(){

	var interactor = this;
	this.ableMenus = [];
	this.minimizedMenus = [];

	this.minimize = function(menu){
		var positionX = 0;
		var positionY = $("body").height()-20;
		for (var i = 0; i< interactor.minimizedMenus.length;i++){
			positionX += minimizedMenus[i].width;
		}
		TweenMax.to(menu.mainContainer, 0.2, {x:positionX, y:positionY,  transformOrigin:"0% 0% 0"});
	}


	this.addNewMenu = function(identificador,tipo,width,height){
		switch(tipo){
			case "creator":
				var newMenu = new EPR.CreatorMenu(identificador,interactor);
			break;
			default:
				var newMenu = new EPR.Menu(identificador,width,height,interactor);
			break;
		}
			
		
		$("body").append(newMenu.mainContainer);
		newMenu.setDragable();
	}

}


EPR.Menu = function(identificador,width,height,interactor){

	var menu = this;
	this.interactor = interactor;
	this.id = identificador;
	this.width = width;
	this.height = height;
	this.mainContainer = $("<div id='"+this.id+"'  class='menuContainer'></div>");
	this.header= $("<div class='menuHeader'  style='width:"+this.width+"px'><b>	"+identificador+"</b></div>"); 
	this.body=   $("<div class='menuBody'    style='width:"+this.width+"px;height:"+this.height+"px;'> </div>");

	this.minimizeButon = $("<button class='headerButon'>___</button>");
	this.minimizeButon.click(function(){menu.minimize();});
	this.header.prepend(this.minimizeButon);

	this.maximizeButon = $("<button class='headerButon'>|8|</button>");
	this.maximizeButon.click(function(){menu.maximize();});
	
	
	$(this.mainContainer).append(this.header).append(this.body);


	this.minimize = function (){
	menu.restorePosition = {x:$(menu.mainContainer).position().left,y:menu.mainContainer.position().top};
	TweenMax.to($(menu.body), 0.2, {scaleY:0,  transformOrigin:"0% 0% 0"});
	menu.minimizeButon.remove();
	menu.header.prepend(menu.maximizeButon);
	this.maximizeButon.click(function(){menu.maximize();});
	
	menu.interactor.minimize(menu);
	} 


	this.maximize = function (){
	
	TweenMax.to($(menu.body), 0.2, {scaleY:1,  transformOrigin:"0% 0% 0"});
	TweenMax.to($(menu.mainContainer), 0.2, {x:menu.restorePosition.x,y:menu.restorePosition.y,  transformOrigin:"0% 0% 0"});
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


EPR.CreatorMenu = function(identificador,interactor){
	EPR.Menu.call(this,identificador,250,200,interactor);
	this.addDivButton = $("<button>Nuevo contenedor</button>");
	$(this.body).append(this.addDivButton);
	$(this.addDivButton).click(function(){
		var newDiv = new EPR.workingDiv();
		newDiv.insertInTo();
		newDiv.setBasicInteraction();
	});
}

EPR.transformMenu = function(identificador,interactor){
	EPR.Menu.call(this,identificador,250,400,interactor);
	//TODO
}



EPR.workingDiv = function(){

	var div = this;
	this.htmlVersion = $("<div class='workingDiv'></div>");
	this.pasiveAnimations = new TimelineMax({paused:true});
	this.pasiveAnimations.fromTo(this.htmlVersion, 0.7,
						{boxShadow: "0px 0px 0px 0px rgba(0,255,0,0.3)"}, 
						{boxShadow: "0px 0px 20px 10px rgba(0,255,0,0.7)",repeat: -1,yoyo: true,ease: Linear.easeNone});

	
	this.cornerTopLeft = $("<div class='controler'  style='left:-8px;top:-8px'></div>");
	this.cornerTopRight = $("<div class='controler'  style='right:-8px;top:-8px'></div>");
	this.cornerBottomLeft = $("<div class='controler'  style='left:-8px;bottom:-8px'></div>");
	this.cornerBottomRight = $("<div class='controler'  style='right:-8px;bottom:-8px'></div>");

	this.Top = $("<div class='controler'  style='left:45%;top:-8px'></div>");
	this.Right = $("<div class='controler'  style='right:-8px;top:45%'></div>");
	this.Left = $("<div class='controler'  style='left:-8px;top:45%'></div>");
	this.Bottom = $("<div class='controler'  style='left:45%;bottom:-8px'></div>");

	this.center = $("<div class='controler'  style='left:45%;top:45%'></div>");

	this.select = function (){
		div.pasiveAnimations.resume();
		$(div.htmlVersion).append(div.cornerTopLeft);
		$(div.htmlVersion).append(div.cornerTopRight);
		$(div.htmlVersion).append(div.cornerBottomLeft);
		$(div.htmlVersion).append(div.cornerBottomRight);
		$(div.htmlVersion).append(div.Top);
		$(div.htmlVersion).append(div.Right);
		$(div.htmlVersion).append(div.Left);
		$(div.htmlVersion).append(div.Bottom);
		$(div.htmlVersion).append(div.center);

		$(div.center).click(function(){
		Draggable.create(div.htmlVersion, {
			type:"x,y",
			throwProps:true,
			zIndexBoost:false,
			trigger:div.center
		});
		});

		$(div.cornerBottomRight).click(function(){Draggable.create(div.htmlVersion, {	type:"rotation",throwProps:true,zIndexBoost:false,trigger:div.cornerBottomRight	});	});
		$(div.cornerBottomLeft).click(function(){Draggable.create(div.htmlVersion, {	type:"rotation",throwProps:true,zIndexBoost:false,trigger:div.cornerBottomLeft	});	});
		$(div.cornerTopLeft).click(function(){Draggable.create(div.htmlVersion, {	type:"rotation",throwProps:true,zIndexBoost:false,trigger:div.cornerTopLeft	});	});
		$(div.cornerTopRight).click(function(){Draggable.create(div.htmlVersion, {	type:"rotation",throwProps:true,zIndexBoost:false,trigger:div.cornerTopRight	});	});


	}


	this.insertInTo = function(identificador){
		if (!identificador){
			$("#mainContainer").append(div.htmlVersion);
		}
		else{
			$(identificador).append(div.htmlVersion);
		}
	}





	this.unSelect = function(){
		div.pasiveAnimations.pause();
		div.cornerTopLeft.remove();
		div.cornerTopRight.remove();
		div.cornerBottomLeft.remove();
		div.cornerBottomRight.remove();
		div.Top.remove();
		div.Right.remove();
		div.Left.remove();
		div.Bottom.remove();
		div.center.remove();
	}

	this.setBasicInteraction = function(){

		$(div.htmlVersion).click(function(){
			if (EPR.GLOBALS.selectedContainer.unSelect)
			EPR.GLOBALS.selectedContainer.unSelect();
			EPR.GLOBALS.selectedContainer = div;
			div.select();
		});




	}

}