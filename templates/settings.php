<?php
/**
 * Settings Page
 *
 * @package FarmFactory
 */

?>

<div class="wrap">
	<h2><?php echo esc_html( get_admin_page_title() ); ?></h2>

	<form action="#" method="post" class="wp-farmfactory-widget-form">
		<table class="form-table">
			<tbody>

				<tr>
					<th scope="row">
						<label><?php esc_html_e( 'Info', 'nftfarmfactory' ); ?></label>
					</th>
					<td>
						<p class="description">
							<?php esc_html_e( 'First of all please','nftfarmfactory' ); ?> <a href="update-core.php?force-check=1"><?php esc_html_e(' check for updates', 'nftfarmfactory' ); ?></a>.<br>
              <?php esc_html_e( 'How to use? Just enter [nftfarmfactory] shortcode in your page or post.', 'nftfarmfactory' ); ?>
						</p>
					</td>
				</tr>

				<tr>
					<th scope="row">
						<label for="blogname"><?php echo esc_html_e( 'Infura ID', 'nftfarmfacotry' ); ?></label>
					</th>
					<td>
						<input name="nftfarmfactory_infura_id" type="text"
              value="<?php echo esc_attr( get_option( 'nftfarmfactory_infura_id', nftfarmfactory_default_infura_id() ) ); ?>"
              placeholder="<?php echo esc_attr( nftfarmfactory_default_infura_id() ); ?>" class="regular-text"
            />
					</td>
				</tr>

				<tr>
					<th scope="row">
						<label><?php esc_html_e('Network ', 'nftfarmfactory'); ?></label>
					</th>
					<td>
						<?php
							$farm_factory_network = get_option( 'nftfarmfactory_networkName','ropsten' );
							$networks = array(
								'ropsten',
								'mainnet',
								'rinkeby',
								'bsc',
								'bsc_test',
								'matic',
								'mumbai',
								'xdai',
								'aurora',
								'fantom',
								'harmony',
								'avax',
								'moonriver',
								'cronos',
								'ame',
							);
						?>
						<select name="nftfarmfactory_networkName">
							<?php foreach ( $networks as $network ) { ?>
								<option value="<?php echo esc_attr( $network ); ?>" <?php selected( $farm_factory_network, $network ); ?>><?php echo esc_html( $network ); ?></option>
							<?php } ?>
						</select>
						<p class="description">
							<?php esc_html_e('Ropsten or Mainnet. We recommend to test on testnet with testnet tokens before launch', 'nftfarmfactory'); ?>
						</p>
					</td>
				</tr>

				<tr>
					<th scope="row"></th>
					<td>
						<?php submit_button( esc_html__( 'Save settings', 'nftfarmfactory' ) ); ?>
					</td>
				</tr>
			</tbody>
		</table>
	</form>

</div>

