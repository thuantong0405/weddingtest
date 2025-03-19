    // Lấy phần tử nút và phần tử âm thanh
    const $musicBtn = $('#music-btn');
    const $audio = $('#audio');
(function ($) {
    "use strict";
    AOS.init();
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-300px');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 90
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 



    // Biến để kiểm tra trạng thái phát nhạc
    let isPlaying = false;

    // Khi người dùng click vào nút
    $('#music-btn').click(function () {
        console.log("aaaa1")
        if (isPlaying) {
            // Tắt âm thanh
            $musicBtn.html('🎵'); // Đổi lại biểu tượng
            $audio[0].pause();
            //$audio[0].currentTime = 0; // Reset lại bài hát khi tắt
        } else {
            $audio[0].play();
            // Phát âm thanh
            $musicBtn.html('🔇'); // Đổi biểu tượng khi đang phát nhạc
        }

        // Đổi trạng thái phát/tắt âm thanh
        isPlaying = !isPlaying;
    });
    // $('#music-btn').trigger( "click" );
})(jQuery);


    // Biến để theo dõi sự kiện tương tác người dùng
    let isInteracted = false;

    // Lắng nghe sự kiện tương tác của người dùng (click vào trang hoặc nút)
    $(document).on('click keydown mousemove', function () {
        console.log("dd");
        if (!isInteracted) {
            // Nếu chưa có tương tác, cho phép phát nhạc
            $audio[0].play().catch(function (error) {
                // Nếu trình duyệt chặn, không làm gì
                console.log('Không thể phát nhạc:', error);
            });
            isInteracted = true; // Đánh dấu là đã có tương tác
        }
    });
