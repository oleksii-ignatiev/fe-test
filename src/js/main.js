// $(document).ready (function()
// {
// 	$('.submit').prop('disabled', true);
	
// 	var elements = $('.validation').length;
// 	var has;
	
// 	$('.validation').change(function() {

// 		var name = $(this).attr('name');
// 		var data = {};
// 		data['validation[' + name + '][value]'] = $(this).val();
// 		data['validation[' + name + '][class]'] = $(this).attr('class');

// 		$.ajax({
// 			type: 'POST',
// 			url: '',
// 			dataType: 'html',
// 			data: data,
// 			beforeSend: function()	{
// 				$('#row-' + name + ' div.msg').remove();
//             }
//         }).done( function(msg) {
// 				$('#row-' + name).append(msg);
//         });
// 		has = $('.row:has(div.ok)').length + 1;
// 		if (has == elements) {
// 			$('.submit').prop('disabled', false);
// 		}
// 	});
// });


jQuery(document).ready(function($) {
    $('.ajax-contact-form').submit(function(e) {
        e.preventDefault();
        var str = $(this).serialize();
    
        $.ajax({
            type: 'POST',
            url: '//dada-taxi.com/send.php',
            data: str
        }).done( function() {
            result = '<p>Thank you. Your message has been sent.</p>';
            $('form').hide();
            $('.note').html(result);
        });
    });
});
jQuery(document).ready(function($) {
    if ( !document.documentElement.scrollTop ) {
        var header = jQuery('header');
        if ( header.attr('class') != 'header' ) {
            header.removeClass('scroll-header').removeClass('fixed-header');
        }
    }
    $(window).bind('wheel', function(event) {
        var header = jQuery('header');
        if (event.originalEvent.deltaY < 0) {
            header.removeClass('scroll-header');
            header.addClass('fixed-header');
            if (document.documentElement.scrollTop == 0) {
                header.removeClass('fixed-header')
            }
        } else {
            header.addClass('scroll-header');
            header.removeClass('fixed-header');
        }
    });
    var startY;
    $(window).bind('touchstart', function(event) {
        startY = event.changedTouches[0].clientY;
    });
    $(window).bind('touchmove', function(event) {
        var header = jQuery('header');
        var currentY = event.changedTouches[0].clientY;
        console.log(header[0].offsetTop);

        if ( startY - currentY < 0 && header[0].offsetTop < 60) {
            header.removeClass('scroll-header');
            header.addClass('fixed-header');
            if (document.documentElement.scrollTop == 0) {
                header.removeClass('fixed-header')
            }
        } else if (header[0].offsetTop > 60) {
            header.addClass('scroll-header');
            header.removeClass('fixed-header');
        }
        startY = currentY;
    });
});