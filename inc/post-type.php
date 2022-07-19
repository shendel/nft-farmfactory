<?php
/**
 * Post Type
 *
 * @package FarmFactory
 */

/**
 * Register Post Type farmfactory
 */
function nftfarmfactory_post_type() {

	$labels = array(
		'name'                  => esc_html__( 'NFT Farm', 'nftfarmfactory' ),
		'singular_name'         => esc_html__( 'NFT Farm', 'nftfarmfactory' ),
		'menu_name'             => esc_html__( 'NFT Farm', 'nftfarmfactory' ),
		'name_admin_bar'        => esc_html__( 'NFT Farm', 'nftfarmfactory' ),
		'all_items'             => esc_html__( 'All NFT Farms', 'nftfarmfactory' ),
		'add_new_item'          => esc_html__( 'Add New NFT Farm', 'nftfarmfactory' ),
		'add_new'               => esc_html__( 'Add New', 'nftfarmfactory' ),
		'new_item'              => esc_html__( 'New NFT Farm', 'nftfarmfactory' ),
		'edit_item'             => esc_html__( 'Edit NFT Farm', 'nftfarmfactory' ),
		'update_item'           => esc_html__( 'Update NFT Farm', 'nftfarmfactory' ),
		'search_items'          => esc_html__( 'Search NFT Farm', 'nftfarmfactory' ),
		'not_found'             => esc_html__( 'Not found', 'nftfarmfactory' ),
		'not_found_in_trash'    => esc_html__( 'Not found in Trash', 'nftfarmfactory' ),
		'featured_image'        => esc_html__( 'Reward Token Icon', 'nftfarmfactory' ),
		'set_featured_image'    => esc_html__( 'Set token icon', 'nftfarmfactory' ),
		'remove_featured_image' => esc_html__( 'Remove token icon', 'nftfarmfactory' ),
		'use_featured_image'    => esc_html__( 'Use as token icon', 'nftfarmfactory' ),
	);
	$args   = array(
		'labels'             => $labels,
		'supports'           => array( 'title', 'thumbnail' ),
		'hierarchical'       => false,
		'public'             => false,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'show_in_admin_bar'  => false,
		'show_in_nav_menus'  => false,
		'can_export'         => true,
		'publicly_queryable' => false,
		'capability_type'    => 'post',
		'menu_icon'          => 'dashicons-admin-site-alt3',
	);
	register_post_type( 'nftfarmfactory', $args );

}
add_action( 'init', 'nftfarmfactory_post_type' );

/**
 * Remove date from posts column
 *
 * @param array $columns Columns.
 */
function nftfarmfactory_remove_date_column( $columns ) {
	unset( $columns['date'] );
	return $columns;
}
add_filter( 'manage_nftfarmfactory_posts_columns', 'nftfarmfactory_remove_date_column' );

/**
 * Remove quick edit
 *
 * @param array  $actions Actions.
 * @param object $post Post.
 */
function nftfarmfactory_remove_quick_edit( $actions, $post ) {
	if ( 'nftfarmfactory' === $post->post_type ) {
		unset( $actions['inline hide-if-no-js'] );
	}
	return $actions;
}
add_filter( 'post_row_actions', 'nftfarmfactory_remove_quick_edit', 10, 2 );
