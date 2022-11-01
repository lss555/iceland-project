import styled from 'styled-components';

export const GalleryContainer = styled.div`
	height: 100vh;
	margin-top: 100vh;
	background: #1E1E1E;
`;

export const GalleryHeader = styled.h1`
	position: absolute;
	width: 680px;
	height: 179px;
	left: 120px;
	top: 105vh;
	font-family: 'Clash Display';
	font-style: normal;
	font-weight: 400;
	font-size: 156.23px;
	line-height: 192px;
	text-align: justify;
	letter-spacing: -0.03em;
	text-transform: uppercase;
	color: #EEEEEE;
	@media screen and (max-width: 2000px) {
    	left: 1rem;
  }
`;

export const GalleryTextContainer = styled.div`
	
	@media screen and (max-width: 2000px) {
    	
  }
`;

export const GallerySmallTextOne = styled.div`
	position: absolute;
	width: 280px;
	height: 45px;
	left: 120px;
	top: 135vh;
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
	@media screen and (max-width: 2000px) {
    	left: 1rem;
  }
`;

export const GallerySmallTextTwo = styled.div`
	position: absolute;
	width: 280px;
	height: 105px;
	left: 120px;
	top: 140vh;
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
	@media screen and (max-width: 2000px) {
    	left: 1rem;
  }
`;

export const GallerySmallTextThree = styled.div`
	position: absolute;
	width: 300px;
	height: 165px;
	left: 420px;
	top: 135vh;
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
	@media screen and (max-width: 2000px) {
    	left: 20rem;
  }
`;

export const GallerySmallTextContainer = styled.div`

`;

export const GalleryCardsContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 60rem;
	width: 100%;
	height: 60vh;
	@media screen and (max-width: 2000px) {
    	margin-left: auto;
    	width: 50%;
    	margin-right: -5rem;
  }
`;

export const GalleryCard = styled.img`
	display: flex;

	box-sizing: border-box;
	left: 60rem;
	width: 530px;
	height: 60vh;
	top: 10vh;
	border: 0.795918px solid #151515;
	filter: drop-shadow(10px 10px 25px rgba(0, 0, 0, 0.25));
	border-radius: 5px;
	object-fit: cover;
	@media screen and (max-width: 2000px) {
    	width: 400px;
    	
  }
`;

export const IndividualCardCotnainer = styled.div`
	display: flex;
	position: relative;
	height: 60vh;
	z-index: 3;
	top: 15vh;
	justify-content: flex-start;
	align-items: flex-end;
	text-align: flex-end;
	:hover {
		z-index: 4; 
		transition: all .7s ease;
		transform: scale(1.1) rotate(2deg);
	}
`;

export const IndividualCardCotnainer2 = styled.div`
	display: flex;
	justify-content: center;
	position: relative;
	height: 60vh;
	margin-left: ;
	z-index: 2;
	top: 15vh;
	margin-left: -322px;
	justify-content: flex-start;
	align-items: flex-end;
	text-align: flex-end;
	:hover {
		z-index: 4; 
		transition: all .7s ease;
		transform: scale(1.1) rotate(2deg);
`;

export const IndividualCardCotnainer3 = styled.div`
	display: flex;
	position: relative;
	height: 60vh;
	top: 15vh;
	margin-left: -322px;
	z-index: 1;
	width: 530px;
	justify-content: flex-start;
	align-items: flex-end;
	text-align: flex-end;
	:hover {
		z-index: 4; 
		transition: all .7s ease;
		transform: scale(1.1) rotate(2deg);
	}
`;

export const GalleryCardText = styled.h2`
	display: flex;
	position: absolute;
	text-align: flex-end;
	margin-right: 0;
	align-items: flex-end;
	margin-left: 3rem;
	font-weight: 400;
	font-size: 26.2737px;
	line-height: 32px;
	color: #EEEEEE;
	letter-spacing: -0.03em;
	text-transform: uppercase;
	font-family: 'Clash Display';
	font-style: normal;
`;