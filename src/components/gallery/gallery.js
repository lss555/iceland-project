import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { GalleryContainer, GalleryHeader, GalleryTextContainer, GallerySmallTextOne, GallerySmallTextTwo, GallerySmallTextThree, GallerySmallTextContainer, GalleryCardsContainer, GalleryCard, IndividualCardCotnainer, IndividualCardCotnainer2, IndividualCardCotnainer3, GalleryCardText } from './gallery-styles.js';
import BlockContent from "@sanity/block-content-to-react";
import Image1 from '../assets/rob-nelson.jpg';
import Image2 from '../assets/jakob.jpg';
import Image3 from '../assets/iceland-waterfall.jpg';

const Gallery = () => {
	const [galleryContent, setGalleryContent] = useState(null);

	  useEffect(() => {
	    sanityClient
	      .fetch(
	        `*[_type == "content" && title == "gallery-text"]{
	        title,
	        slug,
	        body,
	        secondBody,
	        thirdBody,
	        mainImage{
	          asset->{
	          _id,
	          url
	        }
	      }
	    }`
		    )
		      .then((data) => setGalleryContent(data[0]))
		      .catch(console.error);
		  }, []);
	  if (!galleryContent) return <div>Loading...</div>;

	return (
		<GalleryContainer>
			<GalleryTextContainer>
				<GalleryHeader>Gallery</GalleryHeader>
				<GallerySmallTextContainer>
					<GallerySmallTextOne>
						<BlockContent blocks={galleryContent.body}></BlockContent>
					</GallerySmallTextOne>
					<GallerySmallTextTwo>
						<BlockContent blocks={galleryContent.secondBody}></BlockContent>
					</GallerySmallTextTwo>
					<GallerySmallTextThree>
						<BlockContent blocks={galleryContent.thirdBody}></BlockContent>
					</GallerySmallTextThree>
				</GallerySmallTextContainer>
			</GalleryTextContainer>
			<GalleryCardsContainer>
				<IndividualCardCotnainer>
					<GalleryCard src={Image1}></GalleryCard>
					<GalleryCardText>Skógafoss, Iceland</GalleryCardText>
				</IndividualCardCotnainer>
				<IndividualCardCotnainer2>
					<GalleryCard src={Image2}></GalleryCard>
					<GalleryCardText>Vik, Iceland</GalleryCardText>
				</IndividualCardCotnainer2>
				<IndividualCardCotnainer3>
					<GalleryCard src={Image3}></GalleryCard>
					<GalleryCardText>Gullfoss Falls, Iceland</GalleryCardText>
				</IndividualCardCotnainer3>
			</GalleryCardsContainer>
		</GalleryContainer>
		)
};

export default Gallery;