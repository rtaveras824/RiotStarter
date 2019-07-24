import React, { Component } from 'react';
import { 
	Menu, 
	Icon, 
	Segment, 
	Sidebar, 
	Responsive, 
} from 'semantic-ui-react';
// import $ from 'jquery';

import GoogleAuth from './GoogleAuth';

class DesktopContainer extends Component {
	state = { activeItem: 'Home' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { children } = this.props;
		const { activeItem } = this.state;

		return (
			<Responsive minWidth={ Responsive.onlyTablet.minWidth } >
				<Menu pointing secondary style={{ height: '65px' }}>
					<Menu.Item 
						name="Home" 
						active={ activeItem === 'Home' }
						onClick={ this.handleItemClick }
						/>
					<Menu.Item 
						name="Latest" 
						active={ activeItem === 'Latest' }
						onClick={ this.handleItemClick }
						/>
					<Menu.Item 
						name="Top-Rated" 
						active={ activeItem === 'Top-Rated' }
						onClick={ this.handleItemClick }
						/>
					<Menu.Item 
						name="Legendary" 
						active={ activeItem === 'Legendary' }
						onClick={ this.handleItemClick }
						/>
					<div className="absolute-center-logo header-middle">
						<Icon name="github" size="huge" />
					</div>
					<Menu.Item position="right">
						<GoogleAuth />
					</Menu.Item>
				</Menu>
				{ children }
			</Responsive>
		);
	};
}

class MobileContainer extends Component {
	state = { sidebarOpened: false };

	handleSidebarHide = () => this.setState({ sidebarOpened: false });

	handleToggle = () => this.setState({ sidebarOpened: true });

	render() {
		const { children } = this.props;
		const { sidebarOpened } = this.state;

		return (
			<Responsive maxWidth={ Responsive.onlyMobile.maxWidth }>
				<Sidebar.Pushable as={ Segment } basic>
					<Sidebar 
						as={ Menu }
						animation="push" 
						onHide={ this.handleSidebarHide }
						vertical
						visible={ sidebarOpened }
						>
						<Menu.Item name="test" />
					</Sidebar>

					<Sidebar.Pusher dimmed={ sidebarOpened }>
						<Menu secondary pointing style={{ height: '65px' }}>
							<Menu.Item onClick={ this.handleToggle }>
								<Icon name="sidebar" size="large" />
							</Menu.Item>
							<div className="full-width text-center header-middle">
								<Icon name="github" size="huge" />
							</div>
							<Menu.Item position="right">
								<GoogleAuth />
							</Menu.Item>
						</Menu>
						{ children }
					</Sidebar.Pusher>
				</Sidebar.Pushable>

				
			</Responsive>
		)
	}
}

const ResponsiveContainer = ({ children }) => {
	return (
		<div>
			<DesktopContainer>{ children }</DesktopContainer>
			<MobileContainer>{ children }</MobileContainer>
		</div>
	);
};

export default ResponsiveContainer;