import React from 'react';
import { HomeContainer, BackgroundContainer } from './home-styles.js';
import homeBg from '../assets/homeBg.jpg';

const Home = () => {

	return (
		<HomeContainer>
			<BackgroundContainer src={homeBg}></BackgroundContainer>
		</HomeContainer>
		)
};

export default Home;