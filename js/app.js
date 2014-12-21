
var rotate = true;

$(document).ready(function() {
  $(".preview-well").on('click', function() {
  	var url = $(this).find("img").attr("href");
  	window.open(url, '_blank');
  });

  $(".preview-well").find('p').slideUp();

  $(".preview-well").on('mouseenter',  function() {
    $(this).find('p').slideDown();	
    rotate = false;
  });

  $(".preview-well").on('mouseleave', function() {
    $(this).find('p').slideUp();	
    rotate = true;
  });
});


window.setInterval(function() {
	if (rotate) {
	$(".preview").first().slideUp(400, function() {
		var preview = $(".preview").first().detach();
		$(".previews").append(preview);	
		preview.slideDown();
	});
	}
}, 10000);