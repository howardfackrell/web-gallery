
$(document).ready(function() {
  $(".preview-well").on('click', function() {
  	var url = $(this).find("img").attr("href");
  	window.open(url, '_blank');
  });
});
