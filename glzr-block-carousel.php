<?php
/**
 * Plugin Name:       Slider
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Philipp Glaser
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       glzr-block-carousel
 *
 * @package           glzr
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function glzr_glzr_block_carousel_block_init()
{
	register_block_type(__DIR__ . "/build/slider-wrapper");
	register_block_type(__DIR__ . "/build/slider-slide");
}
add_action("init", "glzr_glzr_block_carousel_block_init");

function myguten_enqueue()
{
	if (has_block("glzr/slider-wrapper")) {
		wp_enqueue_script(
			"myguten-script",
			plugins_url("/assets/index.js", __FILE__),
			null,
			null,
			true
		);
	}
}
add_action("enqueue_block_assets", "myguten_enqueue");
