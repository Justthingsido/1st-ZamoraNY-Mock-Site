
//smotth transition to sctions when links in header are clicked


$(document).ready(function () {
		$(document).on("scroll", onScroll);

		$('nav.site-nav a[href^="#"], .landing-nav a[href^="#"], .mobile-nav a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			$('nav.site-nav a, .landing-nav a, .mobile-nav a').each(function () {
				$(this).removeClass('current');
			})
			$(this).addClass('current');

			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 800, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
  //
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('nav.site-nav a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('nav.site-nav a').removeClass("current");
				currentLink.addClass("current");
			}
			else{
				currentLink.removeClass("current");
			}
		});
	}

	// ------------------------------------
	// mosue-scroll

	(function() {
		var delay = false;

		$(document).on('mousewheel DOMMouseScroll', function(event) {
			event.preventDefault();
			if(delay) return;

			delay = true;
			setTimeout(function(){delay = false},200)

			var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

			var a= document.getElementsByClassName('section');
			if(wd < 0) {
				for(var i = 0 ; i < a.length ; i++) {
					var t = a[i].getClientRects()[0].top;
					if(t >= 40) break;
				}
			}
			else {
				for(var i = a.length-1 ; i >= 0 ; i--) {
					var t = a[i].getClientRects()[0].top;
					if(t < -20) break;
				}
			}
			$('html,body').animate({
				scrollTop: a[i].offsetTop
			});
		});
	})();



	// ------------------------------------
	// mosue-scroll

	(function() {
		var delay = false;

		$(document).on('mousewheel DOMMouseScroll', function(event) {
			event.preventDefault();
			if(delay) return;

			delay = true;
			setTimeout(function(){delay = false},200)

			var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

			var a= document.getElementsByClassName('inner');
			if(wd < 0) {
				for(var i = 0 ; i < a.length ; i++) {
					var t = a[i].getClientRects()[0].top;
					if(t >= 40) break;
				}
			}
			else {
				for(var i = a.length-1 ; i >= 0 ; i--) {
					var t = a[i].getClientRects()[0].top;
					if(t < -20) break;
				}
			}
			$('html,body').animate({
				scrollTop: a[i].offsetTop
			});
		});
	})();
