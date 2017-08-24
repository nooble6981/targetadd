<?php
/*
* Plugin Name: WS LinkedIn Follow Button
* Plugin URI: http://www.webshouter.net
* Description:  WS LinkedIn Follow Button plugin provides a small button displayed on your websites to help users easily follow a Company/Showcase Page. 
* Author: Chandrakesh Kumar
* Author URI: http://www.webshouter.net
* Version: 1.0
* Text Domain: ws-linkedin-follow-button
* License: GPLv2 or later
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

class WS_Linkedin_Follow_Button_Widget extends WP_Widget {
 
    public function __construct() {
     
        parent::__construct(
            'WS_Linkedin_Follow_Button_Widget',
            __( 'WS LinkedIn Follow Button', 'ws-linkedin-follow-button' ),
            array(
                'classname'   => 'WS_Linkedin_Follow_Button_Widget',
                'description' => __( 'Add linkedin follow button to your website.', 'ws-linkedin-follow-button' )
                )
        );
       
        load_plugin_textdomain( 'ws-linkedin-follow-button', false, basename( dirname( __FILE__ ) ) . '/languages' );
       
    }
 
    /**  
     * Front-end display of widget.
     *
     * @see WP_Widget::widget()
     *
     * @param array $args     Widget arguments.
     * @param array $instance Saved values from database.
     */
    public function widget( $args, $instance ) {    
         
        extract( $args );
         
        $title = apply_filters( 'widget_title', $instance['title'] );
		$ws_lnfb_username = $instance['ws_lnfb_username'];
		$ws_lnfb_count_mode = $instance['ws_lnfb_count_mode'];
		$ws_lnfb_lang = $instance['ws_lnfb_lang'];
         
        echo $before_widget;
         
        if ( $title ) {
            echo $before_title . $title . $after_title;
        }
		
		if ( !empty( $ws_lnfb_username ) ) {

		?>
		
		<div class="ws_linkedin_follow_button_wrap">
			<script src="https://platform.linkedin.com/in.js" type="text/javascript"> lang: <?php echo $ws_lnfb_lang; ?></script>
			<script type="IN/FollowCompany" data-id="<?php echo $ws_lnfb_username ?>" data-counter="<?php echo $ws_lnfb_count_mode ?>"></script>
		</div>
		
		<?php                     
        
        }

        echo $after_widget;
         
    }
 
  
    /**
      * Sanitize widget form values as they are saved.
      *
      * @see WP_Widget::update()
      *
      * @param array $new_instance Values just sent to be saved.
      * @param array $old_instance Previously saved values from database.
      *
      * @return array Updated safe values to be saved.
      */
    public function update( $new_instance, $old_instance ) {        
         
        $instance = $old_instance;
         
        $instance['title'] = strip_tags( $new_instance['title'] );
        $instance['ws_lnfb_username'] = strip_tags( $new_instance['ws_lnfb_username'] );
		$instance['ws_lnfb_count_mode'] = strip_tags( $new_instance['ws_lnfb_count_mode'] );
		$instance['ws_lnfb_lang'] = strip_tags( $new_instance['ws_lnfb_lang'] );
         
        return $instance;
         
    }
  
    /**
      * Back-end widget form.
      *
      * @see WP_Widget::form()
      *
      * @param array $instance Previously saved values from database.
      */
    public function form( $instance ) {    
     	
		/* Check values */
		if( $instance) {
		
	        $title = esc_attr( $instance['title'] );
			$ws_lnfb_username = esc_attr( $instance['ws_lnfb_username'] );
			$ws_lnfb_count_mode = esc_attr( $instance['ws_lnfb_count_mode'] );
			$ws_lnfb_lang = esc_attr( $instance['ws_lnfb_lang'] );
		
		}
		else{
			$title = __( 'Follow Button', 'ws-linkedin-follow-button' );
			$ws_lnfb_username = '3878642';
			$ws_lnfb_count_mode = 'right';
			$ws_lnfb_lang = 'en_US';
		}
        ?>
         
        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:', 'ws-linkedin-follow-button'); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $title; ?>" />
        </p>
        
         <p>
            <label for="<?php echo $this->get_field_id('ws_lnfb_username'); ?>"><?php _e('Company/Showcase Page Name:', 'ws-linkedin-follow-button'); ?></label> 
            <input class="widefat" id="<?php echo $this->get_field_id('ws_lnfb_username'); ?>" name="<?php echo $this->get_field_name('ws_lnfb_username'); ?>" type="text" value="<?php echo $ws_lnfb_username; ?>" />
        </p>
        
        <p>
			<label for="<?php echo $this->get_field_id('ws_lnfb_count_mode'); ?>"><?php _e('Followers Count Mode:', 'ws-linkedin-follow-button'); ?></label> 
			<select id="<?php echo $this->get_field_id('ws_lnfb_count_mode'); ?>" name="<?php echo $this->get_field_name('ws_lnfb_count_mode'); ?>">
				<option value="top" <?php selected( 'top', $ws_lnfb_count_mode ); ?>><?php _e('Vertical', 'ws-linkedin-follow-button'); ?></option>
				<option value="right" <?php selected( 'right', $ws_lnfb_count_mode ); ?>><?php _e('Horizontal', 'ws-linkedin-follow-button'); ?></option>
				<option value="no-count" <?php selected( 'no-count', $ws_lnfb_count_mode ); ?>><?php _e('No Count', 'ws-linkedin-follow-button'); ?></option>
			</select>

		</p>
		
		<p>
			<label for="<?php echo $this->get_field_id('ws_lnfb_lang'); ?>"><?php _e('Language:', 'ws-linkedin-follow-button'); ?></label> 
			<select id="<?php echo $this->get_field_id('ws_lnfb_lang'); ?>" name="<?php echo $this->get_field_name('ws_lnfb_lang'); ?>">
				<option value="en_US" <?php selected( 'en_US', $ws_lnfb_lang ); ?>><?php _e('English', 'ws-linkedin-follow-button'); ?></option>
				<option value="ar_AE" <?php selected( 'ar_AE', $ws_lnfb_lang ); ?>><?php _e('Arabic', 'ws-linkedin-follow-button'); ?></option>
				<option value="zh_CN" <?php selected( 'zh_CN', $ws_lnfb_lang ); ?>><?php _e('Chinese - Simplified', 'ws-linkedin-follow-button'); ?></option>
				<option value="zh_TW" <?php selected( 'zh_TW', $ws_lnfb_lang ); ?>><?php _e('Chinese - Traditional', 'ws-linkedin-follow-button'); ?></option>
			</select>

		</p>
     
    <?php 
    }
     
}
 
/* Register the widget */
add_action( 'widgets_init', function(){
     register_widget( 'WS_Linkedin_Follow_Button_Widget' );
});