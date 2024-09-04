import React, { useState } from "react";
import Help from "../assets/images/Help.png";
import Frame from "../assets/images/Frame.png";
const AboutWidget = () => {
  const [aboutMe, setAboutMe] = useState(true);
  const [experiences, setExperiences] = useState(false);
  const [recommended, setRecommended] = useState(false);
  const handleAboutMe = () => {
    setAboutMe(true);
    setExperiences(false);
    setRecommended(false);
  };
  const handleExperiences = () => {
    setAboutMe(false);
    setExperiences(true);
    setRecommended(false);
  };
  const handleRecommended = () => {
    setAboutMe(false);
    setExperiences(false);
    setRecommended(true);
  };
  return (
    <>
      <div className="w-[calc(50vw-4rem)] h-[calc(50vh-3rem)] flex flex-nowrap rounded-[19px] bg-custom-dark-gray shadow-2xl">
        <div className="w-[2vw] mx-[1rem] my-[1rem] h-[calc(100%-1rem)] flex flex-col justify-between items-between">
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
        <div className="my-[1rem] w-full mx-[1rem] about-container">
          <div className="rounded-[23px] background-custom-black-one shadow-xl w-[36vw] h-[62px] flex justify-around items-center">
            <button
              className={`text-white text-[18px] ${
                aboutMe && "background-custom-gray-four shadow-2xl"
              } py-3 px-10 rounded-[16px] about--button-animation w-[165px] ml-1`}
              onClick={handleAboutMe}
            >
              About Me
            </button>
            <button
              className={`text-white text-[18px] ${
                experiences && "background-custom-gray-four shadow-2xl"
              } py-3 px-10 rounded-[16px] about--button-animation`}
              onClick={handleExperiences}
            >
              Experiences
            </button>
            <button
              className={`text-white text-[18px] ${
                recommended && "background-custom-gray-four shadow-2xl"
              } py-3 px-10 rounded-[16px] about--button-animation mr-1`}
              onClick={handleRecommended}
            >
              Recommended
            </button>
          </div>
          <div className="w-[36vw] h-[160px] overflow-y-scroll  my-5 about--custom-scroll">
            <p className="text-custom-gray-five text-[20px]">
              Hello! I'm Dave, your sales rep here from Salesforce. I've been
              working at this awesome company for 3 years now.{" "}
            </p>
            <br />

            <p className="text-custom-gray-five text-[20px]">
              I was born and raised in Albany, NY& have been living in Santa
              Carla for the past 10 years my wife Tiffany and my 4 year old twin
              daughters- Emma and Ella. Both of them are just starting school,
              so my calender is usually blocked between 9-10 AM. This is a...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutWidget;
