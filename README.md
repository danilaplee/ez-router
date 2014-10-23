##Ez-Router v.0.1.0
=========

##Super-fast and easy AJAX routing solution for all your nerdly needs

Build Ajax and Jquery powered web apps using only css selectors in 5 minutes

##First define the options(somewhere in your head):

	<code><script type="text/javascript"></code>
	var $EzNav = $('whatever your header is or the part of your page you don't wish to reload')
	var $EzContainer = $('whatever you want to be totally dynamic and uploading dynamically with the url')
	var $EzModal =  $('whatever container you wish to define as your modal window')
	<code></script></code>

<p style="font-size:18px; font-weight:bold">Second Include <code><script type="text/javascript" src="ez-router.js"></script></code></p>

	Now all your links are used as targets for a simple AJAX-GET request on the designated url

<p style="font-size:18px;font-weight:bold">Now just add some classnames to your basic</p> <code><a href="/dirtyvideo">Linkmebaby</a></code><p style="font-size:18px;font-weight:bold">tags</p>

	<code><a href="/shop" class="basic"></code> - Defines your basic needs to convert the request to non-ajax

	<code><a href="/cart" class="modal"></code> - Loads content into your modal window
	
