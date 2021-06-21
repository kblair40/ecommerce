import React, { Suspense } from "react";
import { useImage } from "react-image";
import Loading from "../../Loading";

function Image({ image, altText }) {
  const { src } = useImage({
    srcList: image,
  });
  return <img src={image} alt={altText} />;
}
const CarouselImage = ({ image, altText }) => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Image image={image} altText={altText} />
      </Suspense>
    </div>
  );
};

export default CarouselImage;
