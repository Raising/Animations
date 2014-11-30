var EPR = {author:"Ignacio Medina castillo , AKA Raising"};

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


	this.addNewMenu = function(identificador,width,height,interactor){
		var newMenu = new EPR.Menu(identificador,width,height,interactor);
		
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
	this.mainContainer = $("<div id='"+this.id+"'  class='mainContainer'></div>");
	this.header= $("<div class='menuHeader'  style='width:"+this.width+"px'>						   </div>"); 
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


