import React, { Suspense } from "react";
import { useImage } from "react-image";

function Image({ image, altText }) {
  const { src } = useImage({
    srcList: image,
  });
  return <img src={image} alt={altText} />;
}
const CarouselImageTest = ({ image, altText }) => {
  return (
    <div>
      <Suspense fallback={<p style={{ color: "#0c0c0d" }}>Loading...</p>}>
        <Image image={image} altText={altText} />
      </Suspense>
    </div>
  );
};

export default CarouselImageTest;
