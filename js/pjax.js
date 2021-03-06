var replacedSelector = '#pjax';

var renderPartial;
var render;

$(document).ready(function(){
	renderPartial = function(n) {
		$.ajax({
			url: 'partials/'+n+'.html',
			dataType: 'html',
			type: 'get',
			success: function(d) {
				$(replacedSelector).html(d);
				history.pushState(n, '', n);
			}
		});
	}

	render = function(n) {
		$.ajax({
			url: 'index.html',
			dataType: 'html',
			type: 'get',
			success: function(d) {
				$('html').html(d)
				renderPartial(n);
			}
		});
	}

	$(document).on('click', 'a[data-remote-target]', function(e){
		renderPartial($(this).attr('data-remote-target'));
		e.preventDefault();
	});

	if (document.location.pathname == '/pjax-fw/' || document.location.pathname == '/pjax-fw' || document.location.pathname == '/pjax-fw/index' || document.location.pathname == '/pjax-fw/index.html') {
		renderPartial('home')
	}
});