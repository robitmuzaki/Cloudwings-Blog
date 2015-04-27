
function mheight() {
	var height = jQuery(window).height();
	var matchHeight = height - 70;
	var pxHeight = matchHeight + 'px';
	jQuery('.iframe').css('height', pxHeight);
	jQuery('.loader').fadeOut('slow');
}
jQuery(window).resize(function(){
	var height = jQuery(window).height();
	var matchHeight = height - 70;
	var pxHeight = matchHeight + 'px';	
	jQuery('.iframe').css('height', pxHeight);
});
jQUery('.iframe .cleanlogin-field').click(function(){
	jQuery('.topbar').hide();
});