import styled from 'styled-components';

export const NavContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100px;
	left: 0px;
	top: 0px;
`;

export const NavLogo = styled.h1`
	position: absolute;
	width: 97px;
	height: 30px;
	left: 120px;
	margin-top: 35px;
	z-index: 2;
	font-family: 'Clash Display Variable';
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 30px;
	/* identical to box height */

	text-align: justify;
	letter-spacing: -0.03em;

	color: #EEEEEE;
`;

export const NavButtonsContainer = styled.div`
	box-sizing: border-box;
	/* Auto layout */
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
	position: absolute;
	width: 62px;
	height: 22px;
	right: 10rem;
	margin-top: 39px;
`;

export const NavButton = styled.h4`
	width: auto;
	height: 16px;
	z-index: 2;
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 15px;
	/* or 94% */
	text-align: justify;
	letter-spacing: -0.075em;
	text-transform: uppercase;
	color: #EEEEEE;
	/* Inside auto layout */
	flex: none;
	order: 0;
	flex-grow: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	padding: 3px 10px;
	border: 1px solid #EEEEEE;
	border-radius: 50px;
`;