<?php
/**
 * Enqueue Scripts
 *
 * @package Farm Factory
 */

/**
 * Never worry about cache again!
 */
function nftfarmfactory_load_scripts() {

	wp_register_script( 'web3', NFTFARMFACTORY_URL . 'assets/js/web3.min.js', array(), '1.2.11', true );
	wp_register_script( 'web3modal', NFTFARMFACTORY_URL . 'assets/js/web3modal.min.js', array(), '1.9.4', true );
	wp_register_script( 'bignumber', NFTFARMFACTORY_URL . 'assets/js/bignumber.min.js', array(), '8.0.2', true );
	wp_register_script( 'web3-provider', NFTFARMFACTORY_URL . 'assets/js/web3-provider.min.js', array(), '1.2.1', true );
	wp_register_script( 'fortmatic', NFTFARMFACTORY_URL . 'assets/js/fortmatic.js', array(), '2.0.6', true );

	$dependencies = array(
		'web3',
		'web3modal',
		'bignumber',
		'web3-provider',
		'fortmatic'
	);

	// create my own version codes.
	$my_js_ver  = gmdate( 'ymd-Gis', filemtime( NFTFARMFACTORY_PATH . 'lib/farmfactory.js' ) );
	$my_css_ver = gmdate( 'ymd-Gis', filemtime( NFTFARMFACTORY_PATH . 'assets/css/farmfactory.css' ) );

	wp_enqueue_script( 'farmfactory-js', NFTFARMFACTORY_URL . 'lib/farmfactory.js', $dependencies, $my_js_ver, true );
  wp_enqueue_script( 'token-price', NFTFARMFACTORY_URL . 'assets/js/token-price.js', array(), '1.0.0', true);

	wp_enqueue_style( 'farmfactory-css', NFTFARMFACTORY_URL . 'assets/css/farmfactory.css', false, $my_css_ver );

	if ( wp_count_posts( 'farmfactory' ) ) {

	$inline_scripts = '
	var networkName = "' . get_option( 'nftfarmfactory_networkName', 'ropsten' ) . '";

	var chainIds = {
	  "mainnet": 1,
    "ropsten": 3,
    "rinkeby": 4,
    "kovan": 42,
    "bsc": 56,
    "bsc_test": 97,
    "matic": 137,
    "matic_test": 80001,
    "xdai": 100,
    "aurora": 1313161554
	};

	var chainId = chainIds[networkName.toLowerCase()];

	var walletConnectOptions;

	if (chainId === 56 || chainId === 97) {
	  walletConnectOptions = {
      infuraId: "' . get_option( 'nftfarmfactory_infura_id', nftfarmfactory_default_infura_id() ) . '",
      rpc: {
        56: "https://bsc-dataseed1.binance.org:443",
      },
      network: "binance",
    };
	}
	else {
	  walletConnectOptions = {
	    infuraId: "' . get_option( 'nftfarmfactory_infura_id', nftfarmfactory_default_infura_id() ) . '",
	  }
	}

	farmFactory.init({
		networkName: networkName,
		wallet: {
			providerOptions: {
				walletconnect: {
					package: window.WalletConnectProvider.default,
					options: walletConnectOptions,
				},
				fortmatic: {
					package: window.Fortmatic,
					options: {
						key: "' . get_option( 'nftfarmfactory_fortmatic_key_deprecated' ) . '",
					},
				},
			},
		},
	});
	';

	wp_add_inline_script( 'nftfarmfactory-js', $inline_scripts, 'after' );
	}

}
add_action('wp_enqueue_scripts', 'nftfarmfactory_load_scripts');

/**
 * Admin Enqueue Scripts
 *
 * @param string $hook Current page.
 */
function nftfarmfactory_admin_scripts( $hook ) {

	global $typenow;

	if ( 'post-new.php' === $hook || 'post.php' === $hook || 'toplevel_page_NFTFARMFACTORY' === $hook ) {
		if ( 'toplevel_page_NFTFARMFACTORY' === $hook || 'nftfarmfactory' === $typenow ) {

			wp_enqueue_style( 'nftfarmfactory-admin', NFTFARMFACTORY_URL . 'assets/css/farmfactory-admin.css', false, NFTFARMFACTORY_VER );

			$ver = wp_rand( 1, 2222222 );

			wp_enqueue_script( 'nftfarmfactory-deployer', NFTFARMFACTORY_URL . 'lib/farmdeployer.js', array(), $ver, true );

			wp_enqueue_script( 'nftfarmfactory-admin', NFTFARMFACTORY_URL . 'assets/js/farmfactory-admin.js', array( 'nftfarmfactory-deployer' ), $ver, true );

			$post_type_object = get_post_type_object( $typenow );

			/* Translatable string */
			wp_localize_script('nftfarmfactory-admin', 'nftfarmfactory',
				array(
					'l18n' => array(
						'featuredImage'       => esc_html__( 'Staking Token Icon', 'farmfactory' ),
						'setFeaturedImage'    => $post_type_object->labels->set_featured_image,
						'removeFeaturedImage' => $post_type_object->labels->remove_featured_image,
						'clickTheImage'       => esc_html__( 'Click the image to edit or update', 'farmfactory' ),
					),
				)
			);

		}
	}

}
add_action( 'admin_enqueue_scripts', 'nftfarmfactory_admin_scripts' );
