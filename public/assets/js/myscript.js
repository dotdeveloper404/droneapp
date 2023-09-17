(function($){


    $(document).delegate('.nav-menu a[href^="#"]', "click", function(e) {
        let href = $(this).attr('href'); 
        $('.nav-menu a[href^="#"], .sidemenu-nav a[href^="#"]').removeClass('active');
        $('.sidemenu-nav a[href="'+href+'"], .nav-menu a[href="'+href+'"]').addClass('active');
    });

    $(document).delegate('.sidemenu-nav a[href^="#"]', "click", function(e) {
        let href = $(this).attr('href'); 
        $('.nav-menu a[href^="#"], .sidemenu-nav a[href^="#"]').removeClass('active');
        $('.sidemenu-nav a[href="'+href+'"], .nav-menu a[href="'+href+'"]').addClass('active');

        $('.sidemenu').removeClass('active');
        $('body').removeClass('overflow-hidden');
    });

    let fixedHeaderActive = false;
    $(window).on("scroll", function () {
        if(fixedHeaderActive == false) {
            $("header").before($("header").clone().addClass("fixed-header"));
            fixedHeaderActive = true;
        }
        $("body").toggleClass("down", ($(window).scrollTop() > 100));
    });

    $(document).delegate('.menu-btn', "click", function(e) {
      
        e.preventDefault();
        $('.sidemenu').addClass('active');
        $('body').addClass('overflow-hidden');
    });

    $(document).delegate('.sidemenu-close', "click", function(e) {
        e.preventDefault();
        $('.sidemenu').removeClass('active');
        $('body').removeClass('overflow-hidden');
    });

    $(document).keyup(function(e) {
	    if (e.key === "Escape") {
	    	if($('.sidemenu').hasClass('active')) {
		    	$('.sidemenu').removeClass('active');
                $('body').removeClass('overflow-hidden');
	    	}
	    }
	});

  
    
    let counters = [];
    $(window).on("scroll", function(){
        let scrollY = $(window).scrollTop() + $(window).height();
        $('[data-counter]').each(function(index, counterItem) {
            let divPos  = $(this).offset().top;
            if (scrollY > divPos && !counters.hasOwnProperty(index)) {
                counters[index] = true;
                $(this).find('[data-count]').each(function() {
                    var $this = $(this);
                    var number = $(this).data('count');
                    $({ countNum: 0 }).animate({
                        countNum: number
                    }, {
                        duration: 1500,
                        easing: "swing",
                        step: function () {
                            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
                        }, 
                        complete: function () {
                            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
                        }
                    });
                });
            }

            if(scrollY < divPos) {
                delete counters[index];
            }
        });
    });

    var scrollTop = $("#scrollTop");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).css("transform", "scaleX(1)");
        } else {
            $(scrollTop).css("transform", "scaleX(0)");
        } 
    });

    $(scrollTop).on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

     
    
})(jQuery)