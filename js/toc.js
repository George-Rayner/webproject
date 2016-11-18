/* TOC generator for H3 style, sets up as a bullet list. Looks for a div 
	with id=toc to start the TOC */
$(document).ready(function() {
		$("#toc").append('<p><b>Quick links:</b></p><ul>')
		$("h3").each(function(i) {
			var current = $(this);
			current.attr("id", "title" + i);

			$("#toc").append("<li><a id='link" + i + "' href='#title" + i + "' title='" + current.attr("tagName") + "'>" + current.html() + "</a></li>");
		});
		$("#toc").append('</ul><br>')
	});