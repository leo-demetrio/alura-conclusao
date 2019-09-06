function ativaScrollSuave(selector){
	$(selector).click(function(event){
		event.preventDefault();
		var target = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(target).offset().top
		},escolheScroll(target))

	});
}
function escolheScroll(target){
	if(target = 'panel-form'){
		//console.log("ok")
		return 2000;
	}
	return 1000;
}
ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave('a[href*=panel-form]');
	
