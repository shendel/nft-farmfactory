<?php
namespace NFTFARMFACTORY\Controllers;

use NFTFARMFACTORY\Controller;

class MenuPageController extends Controller
{

	/**
	 *
	 */
	public function handle()
	{
		add_action('admin_menu', array($this, 'menu'));

	}

	public function menu()
	{
		add_submenu_page(
			'edit.php?post_type=nftfarmfactory',
			esc_html__('Staking settings', 'nftfarmfactory'),
			esc_html__('Staking settings', 'nftfarmfactory'),
			'manage_options',
			'FARMFACTORY',
			[$this, 'page']
		);
	}

	public function page()
	{
		$this->handleRequest();
		$this->view->display('/settings.php');

	}

	public function handleRequest()
	{

		if ( isset( $_POST['nftfarmfactory_networkName'] ) && ! empty( $_POST['nftfarmfactory_networkName'] ) ) {
			update_option( 'nftfarmfactory_networkName', $_POST['nftfarmfactory_networkName'] );
		}

		if ( isset( $_POST['nftfarmfactory_infura_id'] ) && ! empty( $_POST['nftfarmfactory_infura_id'] ) ) {
			update_option( 'nftfarmfactory_infura_id', $_POST['nftfarmfactory_infura_id'] );
		}

		if ( isset( $_POST['nftfarmfactory_fortmatic_key'] ) && ! empty( $_POST['nftfarmfactory_fortmatic_key'] ) ) {
			update_option( 'nftfarmfactory_fortmatic_key', $_POST['nftfarmfactory_fortmatic_key'] );
		}

		if ( ! empty( $_POST) ) {
			?>
			<div class="updated notice is-dismissible">
				<p><?php esc_html_e( 'Settings saved', 'nftfarmfactory' ); ?></p>
			</div>
			<?php
		}

	}

}
