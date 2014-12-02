

// `computeWindowScale` counts the scale factor between window size and size
	// defined for the presentation in the config.
	var computeWindowScale = function ( config ) {
		var scaleY = window.innerHeight / config.height,
		    scaleX = window.innerWidth / config.width;
		
		if (config.maxScale) {
			if (scaleX > config.maxScale) {
		    	scaleX = config.maxScale;
		    }
		    if (scaleY > config.maxScale) {
		    	scaleY = config.maxScale;
		    }
		}
		
		if (config.minScale) {
			if (scaleX < config.minScale) {
			    scaleX = config.minScale;
		    }
		    if (scaleY < config.minScale) {
			    scaleY = config.minScale;
		    }
		}
		
		if (config.adjust) {
			return {
				scaleX: scaleX,
				scaleY: scaleY
			};
		} else {
			var scale = scaleX > scaleY ? scaleY : scaleX;
			return {
				scaleX: scale,
				scaleY: scale
			};
		}
		
		
		return scale;
	};
	
	// `translate` builds a translate transform string for given data.
	var translate = function ( t ) {
		return " translate3d(" + t.x + "px," + t.y + "px," + t.z + "px) ";
	};

	// `rotate` builds a rotate transform string for given data.
	// By default the rotations are in X Y Z order that can be reverted by passing `true`
	// as second parameter.
	var rotate = function ( r, revert ) {
		var rX = " rotateX(" + r.x + "deg) ",
		    rY = " rotateY(" + r.y + "deg) ",
		    rZ = " rotateZ(" + r.z + "deg) ";
		
		return revert ? rZ+rY+rX : rX+rY+rZ;
	};

	// `scale` builds a scale transform string for given data.
	var scale = function ( s ) {
		return " scale(" + s + ") ";
	};
	var scaleX = function ( s ) {
		return " scaleX(" + s + ") ";
	};
	var scaleY = function ( s ) {
		return " scaleY(" + s + ") ";
	};


	// `perspective` builds a perspective transform string for given data.
	var perspective = function ( p ) {
		return " perspective(" + p + "px) ";
	};
	
	function rescale() {
		var windowScale = computeWindowScale(config);
		$('body').css({
//		            top: "50%",
//		            left: "50%",
            transform: perspective( config.perspective/windowScale.scaleX ) + scaleX( windowScale.scaleX ) + scaleY( windowScale.scaleY )
        });
	}
	
	$(document).ready(function() {
	
		// First we set up the viewport for mobile devices.
        // For some reason iPad goes nuts when it is not done properly.
        var meta = $("meta[name='viewport']")[0] || document.createElement("meta");
        meta.content = "width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no";
        if (meta.parentNode !== document.head) {
            meta.name = 'viewport';
            document.head.appendChild(meta);
        }
        
        // set initial styles
        document.documentElement.style.width = config.width + 'px';
        document.documentElement.style.height = config.height + 'px';
        
        $('html').css({	
            width: config.width + 'px',
            height: config.height + 'px',
            overflow: "hidden"
        });
	
		var rootStyles = {
            position: "absolute",
            transformOrigin: "top left",
            transition: "all 0s ease-in-out",
            transformStyle: "preserve-3d",
            width: config.width + 'px',
            height: config.height + 'px'
        };		        
        $('body').css(rootStyles);
        
        rescale();
        
	// rescale when window is resized
		window.addEventListener("resize", function() {
		    	rescale();
		    }, false);
});

