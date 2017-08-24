<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title><?php wp_title('| ', true, 'right'); ?></title>
<!-- Mobile Specific Metas & Favicons -->
<?php global $minti_data; ?>
<?php if($minti_data['switch_zoom'] == 0) { ?><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"><?php } else { ?><meta name="viewport" content="width=1200" /><?php } ?>
<?php if(isset($minti_data['media_favicon']['url']) && ($minti_data['media_favicon']['url'] != "")) { ?><link rel="shortcut icon" href="<?php echo esc_url($minti_data['media_favicon']['url']); ?>"><?php } ?>
<?php if(isset($minti_data['media_favicon_iphone']['url']) && ($minti_data['media_favicon_iphone']['url'] != "")) { ?><link rel="apple-touch-icon" href="<?php echo esc_url($minti_data['media_favicon_iphone']['url']); ?>"><?php } ?>
<?php if(isset($minti_data['media_favicon_iphone_retina']['url']) && ($minti_data['media_favicon_iphone_retina']['url'] != "")) { ?><link rel="apple-touch-icon" sizes="120x120" href="<?php echo esc_url($minti_data['media_favicon_iphone_retina']['url']); ?>"><?php } ?>
<?php if(isset($minti_data['media_favicon_ipad']['url']) && ($minti_data['media_favicon_ipad']['url'] != "")) { ?><link rel="apple-touch-icon" sizes="76x76" href="<?php echo esc_url($minti_data['media_favicon_ipad']['url']); ?>"><?php } ?>
<?php if(isset($minti_data['media_favicon_ipad_retina']['url']) && ($minti_data['media_favicon_ipad_retina']['url'] != "")) { ?><link rel="apple-touch-icon" sizes="152x152" href="<?php echo esc_url($minti_data['media_favicon_ipad_retina']['url']); ?>"><?php } ?>
<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<!-- bxSlider Javascript file -->
<script src="<?php bloginfo('template_url'); ?>/../unicon-child/js/jquery.bxslider.min.js"></script>
<!-- bxSlider CSS file -->
<link href="<?php bloginfo('template_url'); ?>/../unicon-child/js/jquery.bxslider.css" rel="stylesheet" />

<script>
 
$(document).ready(function() {
 
$("#gform_submit_button_1").click(function() {
    return FormContact_Validator(gform_1);
   });
 
});
 
</script>
<script>
 
function FormQuote_Validator(Form){
 
 if(Form.input_1.value == ""){
 
	alert("Please enter your First Name");
 
	Form.input_1.focus();
 
	return (false);
 
	}
 
if (Form.input_2.value == ""){
 
	alert("Please enter your Last Name");
 
	Form.input_2.focus();
 
	return (false);
 
	}
 
 
if (Form.input_3.value == ""){
 
	alert("Please enter your Message.");
 
	Form.input_3.focus();
 
	return (false);
 
	}
 
}
 
</script>
<!-- WordPress Stuff -->
<?php wp_head(); ?>
<?php require_once('analytics.php'); ?>
</head>

<body <?php body_class(); ?>>

<div id="wrapper" class="hfeed">
<div class="container">
<div class="navigation_bar">
<div class="logo"><a href="<?php echo get_option('home'); ?>"><img src="/wp-content/uploads/2016/04/logo-2.png" alt="logo" title="targead"></a></div>
<style>
nav:before, nav div:before {
display: inline-block;
    padding: 10px 0;
    color: #fff;
    text-align: center;
    cursor: pointer;
    background: #00b2eb;
    margin-bottom: 40px;
    margin-top: 13px;
  
}

@media (max-width: 900px) { 
 nav:before, nav div:before {
    width: 100px;
    float: right;
    margin-top: -33px;

  }
  nav:before {
    content: "Menu";
  }
  nav:focus:before {
    content: none;
  }
  nav:focus div:before {
	content: "Menu";
  }
  nav:not(:focus) div:not(:active) {
    display: none;
  }
}
</style>

<nav tabindex="0"><div tabindex="0">

 <?php wp_nav_menu( 
					array( 'theme_location' => 'main_navigation',
							'container'	=>	'false'
				 ) ); ?>
</div></nav>
</div></div>

	<div class="header-wrapper">
		<header id="header" role="banner">
			<div class="container">
			
	

				<?php if (is_front_page()) { ?>
				<div class="header-text">
					<h1>Crypto Advertising Services</h1>
					<h2>We deliver your products<br> to the right<br>  audience</h2>

					<div class="button_header">
									<a href="#check-out-offer" id="#advertiser-form">Contact US</a>	</div>

					
				</div>
				<?php } ?>
			</div>
		</header>
		<?php if (is_front_page()) { ?>
		<div id="blue-counter">
			<div class="container">
				<div class="column">
					<div class="number">10bn</div>
					<div class="description">impressions per month</div>
				</div>
				<div class="column">
					<div class="number">190</div>
					<div class="description">geos covered</div>
				</div>
				<div class="column">
					<div class="number">20k</div>
					<div class="description">active campaigns</div>
				</div>
				<div class="column">
					<div class="number">6000k</div>
					<div class="description">leads last month</div>
				</div>
			</div>
			<div class="clear"></div>
		</div>
		<?php } ?>
</div> <!-- END HEADER WRAPPER -->