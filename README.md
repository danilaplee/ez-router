##Ez-Router v.0.1.0
=========

##Super-fast and easy AJAX routing solution for all your nerdly needs

Build Ajax and Jquery powered web apps using only css selectors in 5 minutes

##First define the options(somewhere in your head):

	<script type="text/javascript">
	var $EzNav = $('whatever your header is or the part of your page you don't wish to reload')
	var $EzContainer = $('whatever you want to be totally dynamic and uploading dynamically with the url')
	var $EzModal =  $('whatever container you wish to define as your modal window')
	</script>

##Second include the script

Now all your links are used as targets for a simple AJAX-GET request on the designated url

	Finally just add some classnames to your basic <a href="/dirtyvideo">Linkmebaby</a>tags

	<a href="/shop" class="basic"> - Defines your basic needs to convert the request to non-ajax

	<a href="/cart" class="modal"> - Loads content into your modal window
	
