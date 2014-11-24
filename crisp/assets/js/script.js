$(document).ready(function(){
	//hide all excerpts except for the first post on the index
	$(".post-excerpt").hide();
	$('.post:first-child').children('.post-excerpt').show();
	$('.post:first-child .post-link').css('font-size','2em');

	//control slide animation the reveal excerpts for all posts after the first
	$(".post").mouseenter(function(){
		$(this).children(".post-excerpt").stop(true,true).slideDown(200);
	});
	$(".post:gt(0)").mouseleave(function(){
		$(this).children(".post-excerpt").stop(true,true).slideUp(300);
	});
});