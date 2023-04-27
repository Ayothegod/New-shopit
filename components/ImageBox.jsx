import Image from "next/image";

const ImageBox = ({ slide, slideIndex }) => {
  // console.log(slide);
  return (
    <div>
      <Image
        key={slideIndex}
        src={slide.imgUrl}
        alt={slide.imgAlt}
        className="w-48 sm:w-48 sm:h-60 rounded-md mb-1"
      />
    </div>
  );
};

export default ImageBox;
