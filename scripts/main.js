$(document).ready(function(){
		
	$("#examples").hide().find('a').colorbox({
		scalePhotos: true,
		maxHeight: '90%'
	});
	
	$("#seeMyWork").click(function(event){
		event.preventDefault();
		$("#examples a:first").click();
	});

});