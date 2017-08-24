<?php 
/*
Plugin Name: Ultimate Landing Page
Description: Create Beautiful Landing Pages in minutes
Author: Web-Settler
Plugin URI: http://web-settler.com/ultimate-landing-page/
Author URI: http://web-settler.com/contact/
Version: 3.1.5
Donate link: http://web-settler.com/ultimate-landing-page/ 
License : GPL v2
*/

/********
* Created By : Umar Bajwa
* Contact : http://web-settler.com/contact/
* Support: http://web-settler.com/ulp-support/
* Email : umar@web-setter.com
********/

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

include 'config.php';
include 'lpp_settings.php';
include 'lpp_cs_post_type.php';
include 'lpp_scripts.php';
include 'admin-pages.php';

function ulf_plugin_add_settings_link( $links ) {
    $settings_link = '<a href="edit.php?post_type=landingpage_f">' . __( 'Dashboard' ) . '</a>';
    $support_link = '<a href="http://web-settler.com/free-support/">' . __( 'Support' ) . '</a>';
    array_push( $links, $settings_link );
    array_push( $links, $support_link );
  	return $links;
}
$lpp_plugin = plugin_basename( __FILE__ );
add_filter( "plugin_action_links_$lpp_plugin", 'ulf_plugin_add_settings_link' );

register_activation_hook(__FILE__, 'lpp_plugin_activation');
add_action('admin_init', 'lpp_plugin_redirect_activation');

function lpp_plugin_activation() {
flush_rewrite_rules();
add_option('lpp_plugin_activation_check_option', true);
}

function lpp_plugin_redirect_activation() {
if (get_option('lpp_plugin_activation_check_option', false)) {
    delete_option('lpp_plugin_activation_check_option');
    if(!isset($_GET['activate-multi']))
    {
        wp_redirect("edit.php?post_type=landingpage_f&page=lpp_dashboard");
        exit();
    }
 }
}


?>