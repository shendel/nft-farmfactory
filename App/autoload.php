<?php
defined( 'ABSPATH' ) || exit;

spl_autoload_register( function ( $class ) {

	if ( strpos( $class, 'NFTFARMFACTORY' ) !== false ) {
		require __DIR__ . '/../' . str_replace( [ '\\', 'NFTFARMFACTORY' ], [ '/', 'App' ], $class ) . '.php';

	}
} );

foreach ( glob( __DIR__ . '/Controllers/*.php' ) as $file ) {
	$class = '\NFTFARMFACTORY\Controllers\\' . basename( $file, '.php' );
	if ( class_exists( $class ) ) {
		$obj = new $class;
	}

}