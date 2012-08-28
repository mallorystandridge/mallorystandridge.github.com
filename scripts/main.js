$(document).ready(function(){
		
	$("#examples").hide().find('a').colorbox({
		scalePhotos: true,
		maxHeight: '90%'
	});
	
	$("#seemywork").click(function(event){
		event.preventDefault();
		$("#examples a:first").click();
	});

});