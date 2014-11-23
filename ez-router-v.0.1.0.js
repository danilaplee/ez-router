
var manualNavigation = true;  

function pushUrl(url) {
        manualNavigation == false;
		history.pushState(null, null, url);
        manualNavigation == true;
}

function scrollToNew(url, el) {
		var urlsplit = url.split('/');
    	var $target = $(urlsplit[1]);
    	var	targetOffset = $target.offset().top;
    	$('html, body')
    	.animate({scrollTop: targetOffset}, 1000)
    	.promise()
    	.done(setDefCursor(el));
}

function setDefCursor(el) {
	el.css('cursor','pointer');
    $('body').css('cursor','default');
}

function setLdCursor(el) {
	el.css('cursor','progress');
    $('body').css('cursor','progress');
}

function loadBind() {
	$('.mainContainer a').bind('click', menuLoading);
}

function exitModal() {
		$('.magnifyContainer').velocity("transition.fadeOut", { stagger: 55 });
		$('.magnifyContainer').empty();
		clearAnimate;
		$('.magnifyContainer').unbind('click', exitModal);
		$('.fa-plus').unbind('click', exitModal);
		$('body').attr('style','');
};

$(window).ready(function() {
	var url = window.location.pathname;
    if (navigator.userAgent.match(/AppleWebKit/) && ! navigator.userAgent.match(/Chrome/)) {
    var bonus = 0;
	}
	else {
	var bonus = 1;
	}
	$(window).bind('popstate', function(){
			bonus++;
		if (bonus > 1) {
        	if (manualNavigation == true) {
        		location.reload();
        	}
        	if (manualNavigation == false) {
        		manualNavigation == true;
        	}
        	else {
        	}
        }
        else {

        }
    });
});
$('footer').ready(function() {
	var container = $('.mainContainer'),
		animated = container.find('.animated'),
		header = $('header'),
		footer = $('footer'),
		headerAnimated = header.find('.animated');

	footer.velocity("transition.fadeIn", { stagger: 205 });
	header.velocity("transition.fadeIn", { stagger: 245 });
	headerAnimated.velocity("transition.fadeIn", { stagger: 235 });
	animated.velocity("transition.slideUpIn", { stagger: 145 });
	$('a').bind('click', menuLoading);
	checkInCart();
});
var menuLoading = function () {
	var mC = 0;
	var el = $(this);
	var url = $(this).attr('href');
	var urlsplit = url.split('/');
    var $target = $(urlsplit[1]);
    var scrollEl = $('.mainContainer').find($target);
	clearAnimate;
		if (el.hasClass('modal') == true) {
        		setLdCursor(el);
				$('.magnifyContainer').load(url);
				clearTimeout(clearAnimate);
				$(document).ajaxComplete(function(){
					mC++;
					if (mC <= 1) {
					$('.magnifyContainer')
					.velocity("transition.slideDownIn", { stagger: 205 })
    				.promise()
    				.done(setDefCursor(el));
					$('body').css({
						'height':'100%',
						'overflow':'hidden'
					});
					}
					else {

					};
				});
				return false;
		}
		if (el.hasClass('lightbox') == true) {
        		setLdCursor(el);
				$('.magnifyContainer').load(url);
				clearTimeout(clearAnimate);
				$(document).ajaxComplete(function(){
					mC++;
					if (mC <= 1) {
					$('.magnifyContainer')
					.velocity("transition.slideDownIn", { stagger: 205 })
    				.promise()
    				.done(setDefCursor(el));
					}
					else {

					};
				});
				return false;
		}
		if (el.hasClass('roundal') == true) {
			return false;
		}
		if (el.hasClass('nonLink') == true) {
			return false;
		}
		if (url.search('#') > -1 && scrollEl.length == 1) {
			pushUrl(url);
			setLdCursor(el);
        	scrollToNew(url, el);
    		return false;
		}
		if (url.search('#') > -1 && scrollEl.length == 0) {
			pushUrl(url);
			setLdCursor(el);
			$('.mainContainer').load('/');
			clearTimeout(clearAnimate);
			$(document).ajaxComplete(function(){
				mC++;
				if (mC <= 1) {
					loadBind();
        			scrollToNew(url, el);

				}
				else {

				};
			});
			return false;
		}
		if (el.hasClass('basic') == true) {
			
		}
		else {
			pushUrl(url);
			setLdCursor(el);
			$('.mainContainer').load(url);
			clearTimeout(clearAnimate);
			$(document).ajaxComplete(function(){

				mC++;
				if (mC <= 1) {
					loadBind();
					if (url != '/') {
					}
					else {
					};
    				targetOffset = $('#hometop').offset().top;
    				$(window)
    				.scrollTop(0);
    				setDefCursor(el);
    			};
			});
			return false;
		}
};