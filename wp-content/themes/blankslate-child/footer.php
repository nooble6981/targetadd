<div class="clear"></div>
	<footer id="footer" role="contentinfo">
		<div class="container">
			<div class="column-1">
				<div class="footer-logo">
					<a href="<?php echo get_option('home'); ?>"><img src="http://pavel.csprobiz.co.rs/wp-content/uploads/2016/04/footer-logo.png" alt="footer-logo"></a>
				</div>
				<div class="copyright">
				 	&copy; 2014-<?php echo date('Y'); ?> TargetAd, Inc
				</div>
			</div>
			<div class="column-2">
				<div class="footer-menu">
				 <?php wp_nav_menu( 
					array( 'theme_location' => 'footer-menu',
							'container'	=>	'false'
				 ) ); ?>
				</div>
			</div>
			<div class="column-3">
				<div class="one-image">
					<span class="helper"></span>
					<a href="#"><img src="http://pavel.csprobiz.co.rs/wp-content/uploads/2016/04/fb.png" alt="Facebook" title="Facebook"></a>
				</div>
				<div class="one-image">
					<span class="helper"></span>
					<a href="#"><img src="http://pavel.csprobiz.co.rs/wp-content/uploads/2016/04/linkedin.png" alt="Linkedin" title="Linkedin"></a>
				</div>
				<div class="one-image">
					<span class="helper"></span>
					<a href="#"><img src="http://pavel.csprobiz.co.rs/wp-content/uploads/2016/04/twitter.png" alt="Twitter" title="Twitter"></a>
				</div>
			</div>
			<div class="clear"></div>
		</div>
	</footer>
</div> <!-- END WRAPPER -->
<?php wp_footer(); ?>
<script type="text/javascript">
jQuery(document).ready(function($){
$("#advertiser-form ,#publisher-form").hide();
$('#publisher-form form').attr('action','/#publisher-form');
var hash = window.location.hash;
if(hash=='#publisher-form'){
$('.hide-tabs-div').hide();
$('#publisher-form').show('slow');
}
$('.tabs-click a').on('click', function(){
$('.hide-tabs-div').hide();
var tab_id=$(this).attr('id');

if(tab_id=="#advertiser-form"){
$("#publisher-form").hide();
$(tab_id).show("slow");
}else if(tab_id=='#publisher-form'){
$("#advertiser-form").hide();
$(tab_id).show('slow');
}
});
$('a.close-icon-div').on('click', function(){
var tab_id=$(this).attr('id');
$(tab_id).hide();
$('.hide-tabs-div').show('slow');
});
});
</script>
<style  type="text/css">
.close-icon-div{ float:right;}
</style>

</body>
</html>