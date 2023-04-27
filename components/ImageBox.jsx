import Image from "next/image";

const ImageBox = ({ slide, slideIndex }) => {
  console.log(slide);
  return (
    <div>
      <div className="w-48 h-48">
        <Image
          key={slideIndex}
          src={slide.imgUrl}
          alt={slide.imgAlt}
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
};

export default ImageBox;
