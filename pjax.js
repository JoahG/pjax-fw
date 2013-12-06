$(document).ready(function(){
	function renderPartial(n) {
		$.ajax({
			url: n+'.html',
			dataType: 'html',
			type: 'get',
			success: function(d) {
				$('.content.container').html(d);
				history.pushState(n, '', n);
			}
		});
	}

	$(document).on('click', 'a[data-remote]', function(e){
		renderPartial($(this).attr('data-target'));
		e.preventDefault();
	});

	renderPartial('home')
});