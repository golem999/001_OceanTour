


	
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.slider-button-next',
        prevButton: '.slider-button-prev'
    });


$('.section5 .wrap').click(function(args){
	$('.section5 .wrap')[0].style.display = 'none';
	$('.section5 .wrap-close')[0].style.display = 'block';
});

$('.section5 .wrap-close').click(function(args){
	$('.section5 .wrap')[0].style.display = 'block';
	$('.section5 .wrap-close')[0].style.display = 'none';
});

/*
$(function() {



window.onload = function() {
	  var mySwiper = new Swiper('.swiper-container',{
	    mode:'horizontal',
	    loop: true
	  }); 
	};


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
*/