$(document).ready(function(){
	$("a[href^=_]").click(function(e){
		$.ajax({
			url: $(this).href,
			dataType: 'html',
			type: 'get',
			success: function(d) {
				html = $(d).find('.content.container').html();
				history.pushState($(this).href, '', $(this).href)
			}
		});
		e.preventDefault()
	});
});