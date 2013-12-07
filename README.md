#pjax-fw

**A purely frontend pjax framework**

---

This is my attempt at building a framework similar to [defunkt's jquery-pjax](https://github.com/defunkt/jquery-pjax), but without the necessity of a backend server running. pjax-fw does not require any sort of backend at all: it is completely frontend.

To use it in your app, the current setup is as follows:

Include `pjax.js` in your app\*:

```
	<script src="pjax.js"></script>
```

\*The directory that `pjax.js` is stored in does not affect the app.

In the root directory, include an `index.html`, which includes the layout of your page. This will include the head, with any external file links. An example `index.html` can be seen [here](https://github.com/JoahG/pjax-fw/blob/gh-pages/index.html).

In a `partials/` subdirectory, include the `body` of all the different pages you want. The root directory will contain different `*.html` pages which will be the routes of your app. Each of the `./*.html` pages will contain the following lines:

```

<script src="http://code.jquery.com/jquery-latest.min.js"></script><!-- Link to jQuery -->
<script src="pjax.js"></script> <!-- Link to pjax.js -->
<script>
	$(document).ready(function(){
		render('PARTIAL NAME') <!--  Partial name -->
	})
</script>

```

You can also customize the `replacedSelector` flag in `pjax.js` to change what element is replaced in the app.