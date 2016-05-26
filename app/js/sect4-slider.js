$('.section4 .item').click(
 function(e) { 

 	if($(this).hasClass('slide'))
 	{
 		$(this).removeClass('slide');	 		
 		$('.section4 .item').children('.info').removeClass('display');
 	}
 	else
 	{
 		if($('.section4 .item').hasClass('slide'))
	 	{
	 		$('.section4 .item').removeClass('slide');
	 		$('.section4 .item').children('.info').removeClass('display');
	 		//$('.section4 .slide').parent().children('.info').removeClass('display');
 		}
 		$(this).addClass('slide');
 		$('.section4 .slide').children('.info').addClass('display');
 	}
 	/*if( $(this).is(':animated') ) { 
 		return
 	}
 $(this).animate({
 		width: '570px',
 		height: '570px',
		duration: 1000
 	});
 	$($(this).children()[0]).animate({
 		top: '116px',
 		left: '-121px',
		duration: 1000
 	}); 	*/
 }
 
);