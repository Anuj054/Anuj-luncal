import React, { useState } from "react";
import Help from "../assets/images/Help.png";
import Frame from "../assets/images/Frame.png";

const AboutWidget = () => {
  const [activeTab, setActiveTab] = useState("aboutMe"); // Define which tab is active

  const handleAboutMe = () => {
    setActiveTab("aboutMe");
  };

  const handleExperiences = () => {
    setActiveTab("experiences");
  };

  const handleRecommended = () => {
    setActiveTab("recommended");
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
                activeTab === "aboutMe" && "background-custom-gray-four shadow-2xl"
              } py-3 px-10 rounded-[16px] about--button-animation w-[165px] ml-1`}
              onClick={handleAboutMe}
            >
              About Me
            </button>
            <button
              className={`text-white text-[18px] ${
                activeTab === "experiences" && "background-custom-gray-four shadow-2xl"
              } py-3 px-10 rounded-[16px] about--button-animation`}
              onClick={handleExperiences}
            >
              Experiences
            </button>
            <button
              className={`text-white text-[18px] ${
                activeTab === "recommended" && "background-custom-gray-four shadow-2xl"
              } py-3 px-10 rounded-[16px] about--button-animation mr-1`}
              onClick={handleRecommended}
            >
              Recommended
            </button>
          </div>
          <div className="w-[36vw] h-[160px] overflow-y-scroll my-5 about--custom-scroll">
            {/* Conditional rendering based on activeTab */}
            {activeTab === "aboutMe" && (
              <p className="text-custom-gray-five text-[20px]">
                Hello! I'm Dave, your sales rep here from Salesforce. I've been
                working at this awesome company for 3 years now. I was born and
                raised in Albany, NY & have been living in Santa Carla for the
                past 10 years with my wife Tiffany and my 4-year-old twin
                daughters, Emma and Ella.
              </p>
            )}
            {activeTab === "experiences" && (
              <p className="text-custom-gray-five text-[20px]">
                I've worked in sales and customer service for over 10 years,
                helping companies like Salesforce grow their customer base and
                maintain strong relationships. My expertise lies in delivering
                exceptional customer experiences and closing high-value deals.
              </p>
            )}
            {activeTab === "recommended" && (
              <p className="text-custom-gray-five text-[20px]">
                Based on my experience, I would highly recommend Salesforce as
                a platform for customer relationship management. It is intuitive
                and robust, which helps businesses to scale and maintain
                high-quality customer engagement.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutWidget;
