
//TODO .section21 WTF
$('.section21 .image-block img').click(function(e){
	e.css('width', '500px');
});

$( ".section2 .image-block .wrap img" ).on( "click", function() {
	$( this ).css({
	    width: function( index, value ) {
	      	$('.section2 .slide img')[0].style.width = parseInt(value) +'px';  		
	    },
	    height: function( index, value ) {
	      	$('.section2 .slide img')[0].style.height = parseInt(value) +'px';
	    },
	    src: function( index, value ) {
	    	/*console.log(this.src);
	    	console.log($('.section2 .slide img'));*/
	    	$('.section2 .slide img')[0].src = this.src;
	    	return value;
	    }
  	});
    
    var width = $('.section2 .image-block').width();
    var itemWidth = $('.section2 .image-block img').width();     
    var count = parseInt(width/itemWidth); //items in one row

    var itemPositionX = $(this).position().left; // offset left
    var itemPositionY = $(this).position().top; // offset left
    // kof = 1-> last element, 3 -> first
    var kof = Math.round(width / (itemPositionX + itemWidth));

     
	  	$('.section2 .slide img')[0].style.display = 'block';
	  	$('.section2 .slide')[0].style.top = $(this).position().top + 'px';
	  	$('.section2 .slide')[0].style.left = itemPositionX + 'px';
	  	$(".section2 .slide img").animate({
					  width: "100%",
					  height: '46vw',
					  duration: 1000
					});
	  	$(".section2 .slide").animate({
					  left: '0',
					  top: '0',
					  duration: 1000
					});
  
/*
  	if(count==2){
		$('.section2 .slide img')[0].style.display = 'block';
	  	$('.section2 .slide')[0].style.top = itemPositionY + 'px';
	  	$('.section2 .slide')[0].style.left = itemPositionX + 'px';
	  	$(".section2 .slide img").animate({
					  width: '95.5vw',
					  height: '42.2vw',
					  duration: 1000
					});
	  	$(".section2 .slide").animate({
					  left: '0',
					  top: '0',
					  duration: 1000
					});
  	}// 2 - endif*/
}); //click - end

$(".section2 .slide").click(function(e){
	var x, y;
	var width = $('.section2 .image-block').width();
    var itemWidth = $('.section2 .image-block img').width(); 
    var itemHeight = $('.section2 .image-block img').height();     
    var count = parseInt(width/itemWidth); //items in one row

    
		$('.section2 .image-block .wrap img').each(function(item){
			if(this.src == $('.section2 .slide img')[0].src){
	   			x = $(this).position().left;
	   			y = $(this).position().top;
	   			console.log(true);
			}
		});
		$(".section2 .slide img").animate({
					  width: itemWidth + 'px',
					  height: itemHeight + 'px',
					  duration: 1000
					});
	  	$(".section2 .slide").animate({
					  left: x + 'px',
					  top: y + 'px',
					  duration: 1000
					});

	  	setTimeout(function(){
			$('.section2 .slide img')[0].style.display = 'none';
	  	}, 500);


});