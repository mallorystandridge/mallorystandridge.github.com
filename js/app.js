// calling foundation
$(document).foundation();

// setting angular
var app = angular.module("mySite", []);

// mobile navigation
$("#mobile").click(function() {
    $(".navigation").toggle()
});
$(window).resize(function(){
	$(".navigation").toggle($(this).width() >= 620);
});