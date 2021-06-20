import React, { Suspense } from "react";
import { useImage } from "react-image";
import CircularProgress from "@material-ui/core/CircularProgress";

function Image({ image, altText }) {
  const { src } = useImage({
    srcList: image,
  });
  return <img src={image} alt={altText} />;
}

const CarouselImage = ({ image, altText }) => {
  return (
    <div>
      <Suspense fallback={<CircularProgress />}>
        <Image image={image} altText={altText} />
      </Suspense>
    </div>
  );
};

export default CarouselImage;
