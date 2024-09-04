import React, { useRef, useState } from "react";
import Help from "../assets/images/Help.png";
import Frame from "../assets/images/Frame.png";
import SampleImage from "../assets/images/Sample-Image.jpg";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const GallaryWidget = () => {
  const galleryRef = useRef(null);
  const [images, setImages] = useState([SampleImage, SampleImage, SampleImage, SampleImage]);

  const handleGalleryScroll = (value) => {
    galleryRef.current.scrollLeft += value;
  };

  const handleAddImage = () => {
    setImages((prevImages) => [...prevImages, SampleImage]);
  };

  return (
    <>
      <div className="w-[calc(50vw-4rem)] h-[calc(50vh-3rem)] flex flex-nowrap rounded-[19px] bg-custom-dark-gray shadow-2xl">
        <div className="w-[2vw] mx-[1rem] mt-[1rem] h-[calc(100%-1rem)] flex flex-col justify-between items-between ">
          <div>
            <img
              src={Help}
              alt="help-logo"
              style={{ width: "24px", height: "24px" }}
            />
          </div>
          <div>
            <img
              src={Frame}
              alt="help-logo"
              style={{ width: "24px", height: "30px" }}
            />
          </div>
          <div></div>
        </div>
        <div className="mt-[1rem] w-full mx-[1rem] ">
          <div className="rounded-[23px] w-[36vw] h-[62px] flex justify-between items-center">
            <button className="text-white text-[18px] bg-custom-black-one px-4 py-4 rounded-[16px]">
              Gallery
            </button>
            <div>
              <button
                className="text-white text-[18px] rounded-l-full rounded-r-full mx-5 gallery-addBtn-inner"
                onClick={handleAddImage}
              >
                <p className="px-4 py-4 rounded-r-full rounded-l-full gallery-addBtn-drop text-[12px] font-semibold">
                  + Add Image
                </p>
              </button>
              <button
                className="w-[45px] h-[45px] bg-custom-black-two rounded-full mx-5 hover:bg-custom-black-one gallery-addBtn-dropTwo"
                onClick={() => {
                  handleGalleryScroll(-50);
                }}
              >
                <ArrowLeftOutlined className="text-custom-light-gray text-[24px] shadow-md" />
              </button>
              <button
                className="w-[45px] h-[45px] bg-custom-black-two rounded-full hover:bg-custom-black-one gallery-addBtn-dropTwo"
                onClick={() => {
                  handleGalleryScroll(50);
                }}
              >
                <ArrowRightOutlined className="text-custom-light-gray text-[24px] shadow-md" />
              </button>
            </div>
          </div>
          <div
            className="w-[36vw] overflow-x-scroll my-2 gallery-scroll-hide "
            ref={galleryRef}
          >
            <div className="flex flex-nowrap">
              {images.map((image, index) => (
                <div className="inline-block px-1" key={index}>
                  <div className="w-[180px] h-[180px]">
                    <img
                      src={image}
                      alt={`image-${index}`}
                      className="rounded-[24px] gallery-image"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GallaryWidget;
