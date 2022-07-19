<?php
/**
Plugin Name: NFT Farm Factory
Description: Stake NFT farming contract
Author: Alexander Shestopalov
Requires PHP: 7.1
Text Domain: nft-farmfactory
Domain Path: /lang
Version: 1.0.0
 */

/* Define Plugin Constants */
defined( 'ABSPATH' ) || exit;
define( 'NFTFARMFACTORY_TEMPLATE_DIR', __DIR__ . '/templates' );
define( 'NFTFARMFACTORY_BASE_DIR', __DIR__ );
define( 'NFTFARMFACTORY_BASE_FILE', __FILE__ );
define( 'NFTFARMFACTORY_PATH', plugin_dir_path( __FILE__ ) );
define( 'NFTFARMFACTORY_URL', plugin_dir_url( __FILE__ ) );
define( 'NFTFARMFACTORY_VER', '1.0.0');

/**
 * Plugin Init
 */
require NFTFARMFACTORY_PATH . 'inc/init.php';
