import "./template1wsidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Achievment from "../components/Achievement/Achievement";
import UserIcon from "../assets/userPic.svg";
import InfoSVG from "../assets/info.svg";
import CancelSVG from "../assets/cancel.svg";
import AISVG from "../assets/aisvg.svg";
import ChatBot from "../components/ChatBox/ChatBox";
import ZapSVG from "../assets/zap.svg";
import LinkSVG from "../assets/Link.svg";
import ShareSVG from "../assets/share.svg"
import TemplateCover from "../assets/template1.jpeg"
import UserPic from "../assets/userPic.svg"
import InstaSVG from "../assets/insta.svg"
import XSVG from "../assets/x.svg"
import DribbleSVG from "../assets/dribble.svg"
import LinkedInSVG from "../assets/linkedin.svg"
import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import PricingSection from "../components/PricingSection/PricingSection";
import Loading from "../components/Loading/Loading"
import CategorySVG from "../assets/category.svg";
import filSVG from "../assets/file.svg";
import SMSSVG from "../assets/sms.svg";
import SimpleStoreSVG from "../assets/simpleStore.svg";
import ModifySVG from "../assets/modify.svg"
import { FaChevronDown } from "react-icons/fa6";
const Template1 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);
  const [openAIModel, setOpenAIModel] = useState(false);
  
  useEffect(() => {
    // Simulate initial loading time
    const initialLoadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setShouldRenderUI(true);
    }, 1000);
    // Cleanup function to clear timeout
    return () => clearTimeout(initialLoadingTimeout);
  }, []);
  return (
    <>
      {isLoading && <Loading />}
      {shouldRenderUI && (
        <>
      <div className="flex flex-col lg:flex-row w-full h-full overflow-hidden">
        <div className="flex-grow bg-[#f6f7fa] px-2 lg:px-16 pt-10">
          {/* Top Navbar, Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-center pb-5">
            <h3 className="text-2xl font-medium">My Page</h3>
            <div className="flex gap-5">
              <button>
                <img src={LinkSVG} alt="" />
              </button>

              <Button
                text="Share"
                src={ShareSVG}
                className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-white"
              />
              <Button
                text="0/20 Credits"
                className="flex items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-[#28439D1A]"
              />
              <Button
                onClick={() => setShowPopup(true)}
                text="Upgrade"
                src={ZapSVG}
                className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
              />
              {showPopup && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white rounded-lg">
                    <PricingSection setShowPopup={setShowPopup} />
                  </div>
                </div>
              )}
            </div>
          </div>
            <div className="section-container">
                <img src={TemplateCover} alt="Cover Photo" className="imgg"/>
                <img src={UserPic} alt="User" className="userImgg"/>
                    <div className="userInfoo">
                        <h2 className=" UserHeadingg">Harrison Phillips</h2>
                        <p>Software Engineer</p>
                    </div>
                    <div className="userDescc">
                        <p>I'm a frontend developer, crafting user interfaces with HTML, CSS., 
                        I'm a frontend developer, crafting user interfaces with HTML, CSS... See more</p>
                    </div>
                    <div className="social-iconss">
                        <img src={InstaSVG} alt="Instagram" className=""/>
                        <img src={XSVG} alt="X (Twitter)" className=""/>
                        <img src={InstaSVG} alt="Instagram" className=""/>
                        <img src={DribbleSVG} alt="Dribble" className=""/>
                        <img src={XSVG} alt="X (Twitter)" className=""/>
                        <img src={LinkedInSVG} alt="LinkedIn" className=""/>
                        <img src={DribbleSVG} alt="Dribble" className=""/>
                        <img src={LinkedInSVG} alt="LinkedIn" className=""/>
                    </div>
                    <div className="btn-div grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 text-white">
                        <button className="b1">
                            <FontAwesomeIcon icon={faLink} className="b-icon" />
                            <span className="text">My Links</span>
                        </button>    
                        <button className="b1">
                            <FontAwesomeIcon icon={faLink} className="b-icon" />
                            <span className="text">My Links</span>
                        </button>
                        <button className="b1">
                            <FontAwesomeIcon icon={faLink} className="b-icon" />
                            <span className="text">My Links</span>
                        </button>
                        <button className="b1">
                            <FontAwesomeIcon icon={faLink} className="b-icon" />
                            <span className="text">My Links</span>
                        </button>
                        <button className="b1">
                            <FontAwesomeIcon icon={faLink} className="b-icon" />
                            <span className="text">My Links</span>
                        </button>
                        <button className="b1">
                            <FontAwesomeIcon icon={faLink} className="b-icon" />
                            <span className="text">My Links</span>
                        </button>                    
                    </div>  
                    <p className="linklead-p">Powered by | <a href="https://example.com" className="font-semibold">linklead</a></p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pb-5 mt-5">
            <h3 className="text-2xl font-medium"></h3>
            <div className="flex gap-5">
              <Button
                text="Change Template"
                className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-6 py-3 rounded-full font-bold text-xs bg-white"
              />
              <Button
                text="Manage Page"
                className="flex items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
              />
            </div>
          </div>
          </div> 

          {/* right sidebar */}

          <div className="w-full lg:w-[350px] p-5 bg-white">
          <div
            onClick={() => setOpenAIModel(!openAIModel)}
            className="flex justify-end"
          >
            <button className="shadow-icon p-3">
              <img src={AISVG} alt="" />
            </button>
          </div>
          <div className="flex flex-col gap-3 items-center relative">
            <img src={UserIcon} width={60} alt="" />
            <p>@harrison123</p>

            {/* Achievment Cards */}
            <div className="flex flex-col justify-center gap-y-6 mx-5 w-full mt-5">
            <div
            className="flex items-center justify-between gap-3 border border-gray-200 border-2 p-2 rounded-2xl cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <img src={CategorySVG} alt="" />
              <p>Modify Template</p>
            </div>
            <FaChevronDown className="mr-2" />
          </div>
          <div className="flex items-center gap-3 border border-gray-200 border-2 p-2 rounded-2xl cursor-pointer">
            <img src={CategorySVG} alt="" />
            <p>Explore the Category</p>
          </div>
          <div
            className="flex items-center gap-3 border border-gray-200 border-2 p-2 rounded-2xl cursor-pointer"
          >
            <img src={SMSSVG} alt="" />
            <p>Explore the Store</p>
          </div>
          <div
            className="flex items-center justify-between gap-3 border border-gray-200 border-2 p-2 rounded-2xl cursor-pointer"
          >
            <div className="flex items-center gap-2">
                <div class="column">
                    <img src={CategorySVG} alt="" />
                </div>
                <div class="column">
                    <p>Buy Credits</p>
                    <p className="text-[13px] mt-3 text-black/80">Available: 16</p>
                    <a href="#" className="text-primary underline">Buy Credits</a>
                </div>
            </div>

            <FaChevronDown className="mr-2" />
          </div>
        </div>
          </div>
        </div>
        {/* right sidebar ends */}
      </div>
      <div className="">
        <ChatBot />
      </div>
      </>
      )}
    </>
  );
};

export default Template1;
