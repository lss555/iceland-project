import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { GalleryContainer, GalleryHeader, GalleryTextContainer, GallerySmallTextOne, GallerySmallTextTwo, GallerySmallTextThree, GallerySmallTextContainer } from './gallery-styles.js';
import BlockContent from "@sanity/block-content-to-react";

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
		</GalleryContainer>
		)
};

export default Gallery;