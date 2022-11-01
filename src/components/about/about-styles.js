import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 100vh;
	background-color: #1E1E1E;
	margin-top: -2vh;
`;

export const LeftBox = styled.div`
	display: flex;
	width: 40%;
	height: 80vh;
	margin: 0 1rem 0 0;
	background-color: #1E1E1E;
`;

export const BackgroundImage = styled.img`
	width: 100%;
	height: 100%;
	background-color: #1E1E1E;
`;

export const TopRightBox = styled.div`
	display: flex;
	position: absolute;
	height: 48vh;
	width: 100%;
	background-color: #1E1E1E;
`;

export const TopRightBoxText = styled.p`
	display: flex;
	position: absolute;
	z-index: 6;
	font-family: 'Clash Display';
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	line-height: 104%;
	text-align: flex-start;
	margin-right: 55%;
	justify-content: flex-start;
	align-items: flex-start;
	margin-left: 2rem;
	margin-top: 5rem;
	letter-spacing: -0.03em;
	color: #EEEEEE;
`;

export const TopRightBoxImage = styled.img`
	display: flex;
	position: absolute;
	height: 48vh;
	width: 100%;
	margin: 0;
	left: 0;
	filter: drop-shadow(10px 10px 25px rgba(0, 0, 0, 0.25));
	border-radius: 5px;
	object-fit: cover;
`;
// bottom right box
export const BottomRightBox = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	height: 30.4vh;
	justify-content: center;
	align-items: center;
	bottom: 0;
	
`;

export const BottomRightBoxImage = styled.img`
	border-radius: 5px;
	object-fit: cover;
	display: flex;
	height: 30.4vh;
	width: 100%;
	background-color: rgba(0, 0, 0, .3);
`;

export const RightColumn = styled.div`
	position: relative;
	display: flex;
	felx-direction: column;
	height: 80vh;
	width: 50%;
`;

export const LeftBoxTextContainer = styled.div`
	position absolute;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	margin: auto;
	height: 80vh;
	width: 40%;
	background: rgba(21, 21, 21, 0.5);
	backdrop-filter: blur(2.5px);
	border-radius: 5px;

`;

export const LeftBoxText = styled.h1`
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	height: 12rem;
	width: 12rem;
	background: rgba(21, 21, 21, 0);
	border: 0.5px solid #EEEEEE;
	position: absolute;
	border-radius: 50%;
	color: #EEEEEE;
	font-family: 'Clash Display';
	font-style: normal;
	font-weight: 400;
	font-size: 36px;
	line-height: 44px;
	letter-spacing: -0.03em;
	z-index: 7;
	text-transform: uppercase;
	:hover {
		transition: all .7s ease;
		transform: scale(1.1);
	}
`;

export const LeftBoxLocationText = styled.p`
	display: flex;
	position: absolute;
	height: 100%;
	width: 100%;
	color: #EEEEEE;
	justify-content: flex-end;
	text-align: flex-end;
	align-items: flex-end;
	margin-bottom: 3rem;
	margin-right: 3rem;
	font-family: 'HelveticaNeueCyr';
	font-style: normal;
	font-weight: 300;
	font-size: 16px;
	line-height: 94%;
`;

export const Overlay = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 5;
	background-color: rgba(0, 0, 0, .25);
`;

export const BottomRightBoxText = styled.h1`
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	height: 12rem;
	width: 12rem;
	background: rgba(21, 21, 21, 0);
	border: 0.5px solid #EEEEEE;
	position: absolute;
	border-radius: 50%;
	color: #EEEEEE;
	font-family: 'Clash Display';
	font-style: normal;
	font-weight: 400;
	font-size: 36px;
	line-height: 44px;
	letter-spacing: -0.03em;
	z-index: 7;
	text-transform: uppercase;
	box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(2.5px);
	:hover {
		transition: all .7s ease;
		transform: scale(1.1);
	}
`;