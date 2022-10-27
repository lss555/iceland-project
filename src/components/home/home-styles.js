import styled from 'styled-components';

export const HomeContainer = styled.div`

`;

export const BackgroundContainer = styled.img`
	position: absolute;
	width: 100%;
	height: 100vh;
	left: 0px;
	top: 0px;
	object-fit: cover;
`;

export const HomeTextContainer = styled.div`
	position: absolute;
	display: flex;
	width: 81.1vw;
	height: 569.01px;
	object-fit: cover;
	top: 1rem;
	display: flex;
	margin-right: auto;
	margin-left: auto;
	justify-content: center;
	text-align: center;
	align-items: center;
`;

export const FirstHalfHeader = styled.h1`
	position: absolute;
	width: 453px;
	height: 369px;
	left: 182px;
	top: 119px;
	z-index: 2;
	font-family: 'Clash Display';
	font-style: normal;
	font-weight: 400;
	font-size: 300px;
	line-height: 369px;
	/* identical to box height */
	text-transform: uppercase;
	color: #EEEEEE;
	@media screen and (max-width: 1778px) {
    	left: 3rem;
    	font-size: 200px;
  }
`;

export const SecondHalfHeader = styled.h1`
	position: absolute;
	width: 814px;
	height: 369px;
	left: 925px;
	top: 319.01px;
	z-index: 2;
	font-family: 'Clash Display';
	font-style: normal;
	font-weight: 400;
	font-size: 300px;
	line-height: 369px;
	/* identical to box height */
	text-transform: uppercase;
	color: #EEEEEE;
	@media screen and (max-width: 1778px) {
    	left: 40rem;
    	font-size: 200px;
    	top: 23rem;
  }
`;

export const HomeSmallTextContainer = styled.div`
	position: absolute;
	width: 282px;
	height: 403px;
	left: 643px;
	top: 370px;
	@media screen and (max-width: 1778px) {
    	left: 29rem;
    	top: 21rem;
  }
`;

export const HomeTextOne = styled.div`
	position: absolute;
	width: 282px;
	height: 240px;
	top: 12px;
	z-index: 2;
	font-family: 'HelveticaNeueCyr';
	font-style: normal;
	font-weight: 300;
	font-size: 16px;
	line-height: 15px;
	/* or 94% */
	text-align: justify;
	letter-spacing: -0.03em;
	text-indent: 30px;
	color: #EEEEEE;
`;

export const HomeTextTwo = styled.div`
	position: absolute;
	width: 282px;
	height: 105px;
	top: 297px;
	z-index: 2;
	font-family: 'HelveticaNeueCyr';
	font-style: normal;
	font-weight: 300;
	font-size: 16px;
	line-height: 15px;
	/* or 94% */

	text-align: justify;
	letter-spacing: -0.03em;
	text-indent: 30px;

	color: #EEEEEE;
`;