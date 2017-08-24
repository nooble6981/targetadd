<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_image_size( 'homepage-post-thumb', 300, 166, true ); // Hard Crop Mode
add_image_size( 'blog-featured-image', 740, 417, true ); // Hard Crop Mode
add_action( 'after_setup_theme', 'register_my_menu' );
function register_my_menu() {
  register_nav_menu( 'footer-menu', __( 'Footer Menu', 'Footer Menu' ) );
}
// Changing excerpt more
   function new_excerpt_more($more) {
   global $post;
   return '… <a class="read-more" href="'. get_permalink($post->ID) . '">' . 'Read More &raquo;' . '</a>';
   }
   add_filter('excerpt_more', 'new_excerpt_more');
?>