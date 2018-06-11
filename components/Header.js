import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
	return (
		<Menu style={{marginTop: '10px'}}>
			<Menu.Item >
	          <a href="/">Coin Cards</a>
	        </Menu.Item>

			<Menu.Menu position="right">
				<Menu.Item >
		          <a href="/about">About</a>
		        </Menu.Item>

		        <Menu.Item >
		          Support
		        </Menu.Item>
			</Menu.Menu>
		</Menu>
	);
}