import React, { useEffect, useState } from "react";

import sanityClient from "../../client.js";
import { HomeContainer, BackgroundContainer, HomeTextContainer, FirstHalfHeader, SecondHalfHeader, HomeTextOne, HomeSmallTextContainer, HomeTextTwo } from './home-styles.js';
import homeBg from '../assets/homeBg.jpg';
import BlockContent from "@sanity/block-content-to-react";

const Home = () => {
	const [contentData, setContentData] = useState(null);

	  useEffect(() => {
	    sanityClient
	      .fetch(
	        `*[_type == "content" && title == "home-text"]{
	        title,
	        slug,
	        body,
	        secondBody,
	        mainImage{
	          asset->{
	          _id,
	          url
	        }
	      }
	    }`
	      )
	      .then((data) => setContentData(data[0]))
	      .catch(console.error);
	  }, []);

	  
	  if (!contentData) return <div>Loading...</div>;
	return (
		<HomeContainer>
			<BackgroundContainer src={homeBg}></BackgroundContainer>
			<HomeTextContainer>
				<HomeSmallTextContainer>
						<HomeTextOne>
							<BlockContent blocks={contentData.body}></BlockContent>
						</HomeTextOne>
						<HomeTextTwo><BlockContent blocks={contentData.secondBody}></BlockContent></HomeTextTwo>
					</HomeSmallTextContainer>
				<FirstHalfHeader>Ice</FirstHalfHeader>
				<SecondHalfHeader>Land</SecondHalfHeader>
				
			</HomeTextContainer>
		</HomeContainer>
		)
};

export default Home;