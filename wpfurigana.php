<?php
/**
 * Plugin Name: WP-Furigana
 * Plugin URI: http://kaska.jp/
 * Description: Easily add furigana to text in the WordPress editor
 * Author: KASKA
 * Version: 1.2
 * Author URI: http://kaska.jp/
 */

function furigana_tinymce_config( $init ) {
	$valid_ruby = 'ruby[id|class],rb[id|class],rt[id|class]';
	if ( isset( $init['extended_valid_elements'] ) ) {
		$init['extended_valid_elements'] .= ',' . $valid_ruby;
	} else {
		$init['extended_valid_elements'] = $valid_ruby;
	}
	return $init;
}
add_filter('tiny_mce_before_init', 'furigana_tinymce_config');

function furigana_change_mce_buttons( $initArray ) {
	//@see http://wiki.moxiecode.com/index.php/TinyMCE:Control_reference
	$initArray['theme_advanced_buttons1_add'] = "furigana,furiganacleaner";
	return $initArray;
}

function furigana_add_tinymce_button() {
	// Don't bother doing this stuff if the current user lacks permissions
	if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
		return;
 
	// Add only in Rich Editor mode
	if ( get_user_option( 'rich_editing' ) == 'true' ) {
		add_filter('mce_external_plugins', 'furigana_add_tinymce_plugin');
		add_filter('mce_buttons', 'furigana_change_mce_buttons');

	}
}
add_action('init', 'furigana_add_tinymce_button');

// Load the TinyMCE plugin : furigana_editor.js
function furigana_add_tinymce_plugin($plugin_array) {
	$plugin_array['furigana'] = plugins_url('/furigana_editor.js', __FILE__);
	return $plugin_array;
}
add_filter('tiny_mce_before_init', 'furigana_change_mce_buttons');

// WP Furigana JS (browser specifics etc)
function load_furigana_scripts() {
	$wpfuriganajs = plugins_url('/wpfurigana.js', __FILE__);
	wp_enqueue_script('wpfurigana-js', $wpfuriganajs, array('jquery'), array('1.7.2'));
}
add_action('wp_enqueue_script', 'load_furigana_scripts');
add_action('admin_print_footer_scripts', 'load_furigana_scripts');

// Include Ruby CSS
function furigana_css() {
	$ruby = plugins_url('/ruby.css', __FILE__);
	wp_register_style('furigana_css', $ruby);
	wp_enqueue_style('furigana_css');
}
add_action('wp_enqueue_script', 'furigana_css');

// Adds a filter to append the default stylesheet to the tinymce editor.
if ( ! function_exists('tdav_css') ) {
	function tdav_css($wp) {
		$wp .= ',' . plugins_url('/ruby.css', __FILE__);
	return $wp;
	}
}
add_filter( 'mce_css', 'tdav_css' );