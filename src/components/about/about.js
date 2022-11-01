import React from 'react';
import { AboutContainer, LeftBox, TopRightBox, BottomRightBox, BackgroundImage, LeftBoxText, LeftBoxTextContainer, LeftBoxLocationText, RightColumn, TopRightBoxText, TopRightBoxImage, BottomRightBoxImage, Overlay, BottomRightBoxText } from './about-styles.js';
import AboutImage1 from '../assets/jonny.jpg';
import AboutImage2 from '../assets/jacek.jpg';
import AboutImage3 from '../assets/eliott.jpg';

const About = () => {

	return (
		<AboutContainer>
			<LeftBox>

				<BackgroundImage src={AboutImage1} />
				<LeftBoxTextContainer>
					<LeftBoxText>See More</LeftBoxText>
					<LeftBoxLocationText>Fjaðrárgljúfur, Kirkjubæjarklaustur, Iceland</LeftBoxLocationText>
				</LeftBoxTextContainer>
			</LeftBox>
			<RightColumn>
				<TopRightBox>
					<TopRightBoxText>Iceland is a country of extreme contrasts and dramatic landscapes. Widely known as the land of fire and ice, Iceland is home to some of the largest glaciers in Europe and some of the worlds most active volcanoes.</TopRightBoxText>
					<Overlay></Overlay>
					<TopRightBoxImage src={AboutImage2}/>
				</TopRightBox>
				<BottomRightBox>
					<Overlay></Overlay>
					<BottomRightBoxImage src={AboutImage3} />
					<BottomRightBoxText>About</BottomRightBoxText>
					<LeftBoxLocationText>Black sand beach, Iceland</LeftBoxLocationText>
				</BottomRightBox>
			</RightColumn>
		</AboutContainer>
		);
}

export default About;