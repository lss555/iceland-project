import React from 'react';
import { NavContainer, NavLogo, NavButtonsContainer, NavButton } from './navbar-styles.js';

const NavBar = () => {

	return (
		<NavContainer>
			<NavLogo>ICELAND</NavLogo>
			<NavButtonsContainer>
				<NavButton>Home</NavButton>
				<NavButton>Gallery</NavButton>
				<NavButton>Contact</NavButton>
			</NavButtonsContainer>
		</NavContainer>
		)
};

export default NavBar;