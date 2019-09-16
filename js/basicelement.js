
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
	
});

$(function() {
	var current = window.location.hash ? window.location.hash : '#home';
	$('.nav a[href=' + current + ']').parent().addClass('active');
	
	$('.nav a').click(function(e){
		// e.preventDefault();
		var current = $(this).attr('href');
		$.scroll(current, 600, {
			easing: 'easeInOutCubic',
			onAfter: function(){
				location.hash = current;
			}
		})
	})
	$(window).resize(function(){
		$('[data-spy="scroll"]').each(function () {
			var $spy = $(this).scrollspy('refresh');
		});
		var current = $('.nav li.active a').attr('href');
		$(window).scroll(current, 1000, { easing: 'easeInOutCubic' });
		location.hash = current;
	})
		
});


$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


var elem = document.getElementsByClassName("visElem");
var Visible = function (target) {
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top &&
    targetPosition.top < windowPosition.bottom &&
    targetPosition.right > windowPosition.left &&
    targetPosition.left < windowPosition.right) {

    target.classList.add("slideInUp")
  }
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
	for(var i = 0; i<elem.length; i++){
        Visible(elem[i])
    }
    
});


for(var i = 0; i<elem.length; i++){
    Visible(elem[i])
}