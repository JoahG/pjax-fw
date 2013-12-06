$(document).ready(function(){
	function renderPartial(n) {
		$.ajax({
			url: '/_'+n+'.html',
			dataType: 'html',
			type: 'get',
			success: function(d) {
				$('body').html(d);
				history.pushState('/'+n, '', '/'+n);
			}
		});
	}

	$("a[href^=_]").click(function(e){
		renderPartial($(this).href.substr(1,$(this).href.length-1));
		e.preventDefault();
	});

	renderPartial(window.location.href.split('/')[window.location.href.split('/').length-1])
});