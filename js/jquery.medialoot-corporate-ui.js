$(document).ready(function() {
	$('.navigation span.minimize').hide();
	$('#navigation').hide();
	$('.navigation span.maximize, .navigation span.minimize').click(function() {
		$('.navigation span.maximize').toggle();
		$('.navigation span.minimize').toggle();
		$('#navigation').toggle();
	});

	$('.navigation h3').click(function() {
		$('.navigation span.maximize').toggle();
		$('.navigation span.minimize').toggle();
		$('#navigation').toggle();
	});
	
	

	$(".navigation").draggable();
	// Syntax Highlighting for Documentation
	$("pre").snippet("html");
	
	
	$('.star-rating').click(function(e) {
		var maxWidth = $(this).width();
		var newWidth = e.pageX - this.offsetLeft;
		var newPercent = newWidth/maxWidth*100;
		$(this).find('span.status').width(newPercent.toFixed(0)+'%');
		$(this).find('input').attr('value',newPercent.toFixed(0));
	});
	$('.newsletter span.close').click(function(){
		$(this).parent().hide();
	});

	// Iterate over checkboxes
	$("input:checkbox.onoffswitch").each(function() {
	  // Insert mark-up for switch
	  $(this).before(
	    '<span class="onoffswitch">' +
	    '<span class="background" />' +
	    '</span>'
	  );
	  // Hide checkbox
	  $(this).hide();
	    
	  // Set inital state
	   if (!$(this)[0].checked) { // if not checked (off)
	        $(this).prev().find(".background").css({left: "-78px"});
	   }
	}); // End each()
	      
      // Toggle switch when clicked
    $("span.onoffswitch").click(function() {
      // If on, slide switch off
      if ($(this).next()[0].checked) {
        $(this).find(".background").animate({left: "-78px"}, 200);
      // Otherwise, slide switch on
      } else {
        $(this).find(".background").animate({left: "0px"}, 200);
      }
      // Toggle state of checkbox
      $(this).next()[0].checked = !$(this).next()[0].checked;
    });
    
    // Iterate over checkboxes
    $("input:checkbox.leftrightswitch").each(function() {
      // Insert mark-up for switch
      $(this).before(
        '<span class="leftrightswitch">' +
        '<span class="background" />' +
        '</span>'
      );
      // Hide checkbox
      $(this).hide();
        
      // Set inital state
       if (!$(this)[0].checked) { // if not checked (off)
            $(this).prev().find(".background").css({left: "-37px"});
       }
    }); // End each()
          
      // Toggle switch when clicked
    $("span.leftrightswitch").click(function() {
      // If on, slide switch off
      if ($(this).next()[0].checked) {
        $(this).find(".background").animate({left: "-37px"}, 100);
      // Otherwise, slide switch on
      } else {
        $(this).find(".background").animate({left: "0px"}, 100);
      }
      // Toggle state of checkbox
      $(this).next()[0].checked = !$(this).next()[0].checked;
    });
    
	    
	$('select, input:file, input.corporate-ui').uniform();
	//$('.star-rating').slider();
	// Need this - one for each slider - fill in var thisSlider with id of slider div
	var thisSlider = '#slider1';
	var getPercent = function(sliderName) {
		var offset = $(sliderName+' .ui-slider-handle:last').css('left');
		$(sliderName+' .sliderstatus').width(offset);
		var maxWidth = $(sliderName).width();
		var handleWidth = $(sliderName+' .sliderstatus').width();
		var formerPercent = handleWidth/maxWidth*100;
		$(sliderName+' input.value').attr('value',formerPercent.toFixed(0)+'%');
	};
	$(thisSlider).slider({
		max:100, min:0, step:1, value:20, 
		create: function(event, ui){
			getPercent(thisSlider);
		},
		slide: function(event, ui){
			getPercent(thisSlider);
		},
		change: function(event, ui){
			getPercent(thisSlider);
		}
	});
	// End of individual slider script
	
	var nextSlider = '#slider2';
	$(nextSlider).slider({
		max:100, min:0, step:1, value:20, 
		create: function(event, ui){
			getPercent(nextSlider);
		},
		slide: function(event, ui){
			getPercent(nextSlider);
		},
		change: function(event, ui){
			getPercent(nextSlider);
		}
	});
	// End of individual slider script
	
	// Need this - one for each slider - fill in var thirdSlider with id of slider div
	var thirdSlider = '#slider3';
	var getPercentStart = function(sliderName) {
		var offset = $(sliderName+' .ui-slider-handle').css('left');
		$(sliderName+' .sliderstatusstart').width(offset);
		var maxWidth = $(sliderName).width();
		var handleWidth = $(sliderName+' .sliderstatusstart').width();
		var formerPercent = handleWidth/maxWidth*100;
		$(sliderName+' input.valuestart').attr('value',formerPercent.toFixed(0)+'%');
	};
	$(thirdSlider).slider({
		max:100, min:0, step:1, value:50, 
		create: function(event, ui){
			getPercent(thirdSlider);
		},
		slide: function(event, ui){
			getPercent(thirdSlider);
		},
		change: function(event, ui){
			getPercent(thirdSlider);
		}
	});

	$(thirdSlider+'start').slider({
		max:100, min:0, step:1, value:20, 
		create: function(event, ui){
			getPercentStart(thirdSlider+'start');
		},
		slide: function(event, ui){
			getPercentStart(thirdSlider+'start');
		},
		change: function(event, ui){
			getPercentStart(thirdSlider+'start');
		}
	});
	// End of individual slider script
	
	// Need this - one for each slider - fill in var thirdSlider with id of slider div
	var fourthSlider = '#slider4';
	var getPercentStart = function(sliderName) {
		var offset = $(sliderName+' .ui-slider-handle').css('left');
		$(sliderName+' .sliderstatusstart').width(offset);
		var maxWidth = $(sliderName).width();
		var handleWidth = $(sliderName+' .sliderstatusstart').width();
		var formerPercent = handleWidth/maxWidth*100;
		$(sliderName+' input.valuestart').attr('value',formerPercent.toFixed(0)+'%');
	};
	$(fourthSlider).slider({
		max:100, min:0, step:1, value:50, 
		create: function(event, ui){
			getPercent(fourthSlider);
		},
		slide: function(event, ui){
			getPercent(fourthSlider);
		},
		change: function(event, ui){
			getPercent(fourthSlider);
		}
	});

	$(fourthSlider+'start').slider({
		max:100, min:0, step:1, value:20, 
		create: function(event, ui){
			getPercentStart(fourthSlider+'start');
		},
		slide: function(event, ui){
			getPercentStart(fourthSlider+'start');
		},
		change: function(event, ui){
			getPercentStart(fourthSlider+'start');
		}
	});
	// End of individual slider script
	
	

});

var increaseValue = function (itemId) {
	var initialValue = $(itemId).find('input').attr('value');
	var newValue = parseInt(initialValue) + 1;
	$(itemId).find('input').attr('value', newValue);
};
var decreaseValue = function (itemId) {
	var initialValue = $(itemId).find('input').attr('value');
	var newValue = parseInt(initialValue) - 1;
	$(itemId).find('input').attr('value', newValue);
};