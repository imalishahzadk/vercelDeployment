import Video1 from "../assets/selectvideo1.jpeg";
import Rating1 from "../assets/rating1.svg"
import Rating2 from "../assets/rating2.svg"
import UserIcon from "../assets/userPic.svg";
import moneyBackSVG from "../assets/money-back.svg"
import LinksSVG from "../assets/links.png";
import section5SVG from "../assets/section5.svg"
import "./landing-page.css"
import InfoSVG from "../assets/info.svg";
import LinkSVG from "../assets/Link.svg";
import ShareSVG from "../assets/share.svg";
import AISVG from "../assets/aisvg.svg";
import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import ChatBot from "../components/ChatBox/ChatBox";
import PricingSection from "../components/PricingSection/PricingSection";
import Loading from "../components/Loading/Loading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck, faLink, faMinus, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FaLink, FaPlus } from "react-icons/fa6";
import { faFacebook, faTwitter, faVimeo, faYoutube } from "@fortawesome/free-brands-svg-icons";

const LandingPage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRenderUI, setShouldRenderUI] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);

    const [animate, setAnimate] = useState(false);
    const [scrolling, setScrolling] = useState(false);


    useEffect(() => {
        // Trigger animation on component mount
        setAnimate(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = currentScrollPos > 50;
            setScrolling(isVisible);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleExpand = (index) => {
        if (index === 1) {
            setExpanded1(!expanded1);
            setExpanded2(false);
            setExpanded3(false);
        } else if (index === 2) {
            setExpanded1(false);
            setExpanded2(!expanded2);
            setExpanded3(false);
        } else {
            setExpanded1(false);
            setExpanded2(false);
            setExpanded3(!expanded3);
        }
    };

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
                        <div className="flex-grow bg-white px-2 lg:px-16 pt-10">
                            {/* Top Navbar, Buttons */}
                            <div className="flex flex-col md:flex-row justify-between items-center p-2 border rounded-full mb-6">
                                <h3 className="text-lg md:text-2xl font-medium ml-4 mb-2 md:mb-0">MegaPrometor</h3>
                                <div className="flex items-center space-x-4">
                                    <h3 className="text-sm md:text-md font-semibold text-primary cursor-pointer">Prompt Generator</h3>
                                    <h3 className="text-sm md:text-md font-semibold text-primary cursor-pointer">Pricing</h3>
                                </div>
                                <div className="flex gap-2 md:gap-5 mr-4">
                                    <Button
                                        text="Login"
                                        className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-2 md:px-3 py-1 md:py-2 rounded-full font-bold text-xs md:text-sm bg-white"
                                    />
                                    <Button
                                        onClick={() => setShowPopup(true)}
                                        text="Try Free"
                                        className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-2 md:px-3 py-1 md:py-2 rounded-full font-bold text-xs md:text-sm bg-primary text-white"
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

                            <div className="flex flex-col lg:flex-row gap-10">
                            <div className={`content-div flex-1 mt-10 ${animate ? 'animate-slide-in' : ''}`}>
                            <h1 className="font-sans text-black/80 text-[20px]">
                            Are you a creator and need more leads?
                            </h1>
                                    <h3 className=" main-heading text-4xl lg:text-6xl font-sans font-semibold text-primary">
                                        Get Endless Sales and Leads from Your Link-in-Bio With AI
                                    </h3>
                                    <p className="text-lg lg:text-xl font-sans mt-6 text-black/80">
	
                                    In 30 seconds, we'll build your link-in-bio page that acts like an automated 
                                    sales funnel with smart link categories, 
                                    countdown timers, and follow-up email sequences (and we'll write your lead magnets too)                                    </p>
                                    <div className="flex items-center gap-4 mt-6">
                                        <button className="bg-primary text-white pl-4 pr-4 pt-2 pb-2 rounded-full flex items-center text-sm lg:text-base">
                                        Build My AI Link-In-Bio In 30 Seconds For Free
                                            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                                        </button>
                                        <div className="flex -space-x-4">
                                            <img src={UserIcon} width={35} alt="" className="rounded-full border-2 border-white" />
                                            <img src={UserIcon} width={35} alt="" className="rounded-full border-2 border-white" />
                                            <img src={UserIcon} width={35} alt="" className="rounded-full border-2 border-white" />
                                        </div>
                                        <div className="rounded-lg lg:overflow-visible">
                                            <div className="flex flex-col items-start font-bold text-blue-gray-500">
                                                <div className="inline-flex items-center">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-600 cursor-pointer">
                                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                                                        </svg>                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-600 cursor-pointer">
                                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-600 cursor-pointer">
                                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-600 cursor-pointer">
                                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 cursor-pointer text-blue-gray-500">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <p className="block font-sans antialiased font-medium text-blue-gray-500 text-sm">
                                                    Loved by 100+ customers
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col mt-6 lg:flex-row lg:justify-between lg:mt-4">
                                        <p className="flex font-sans items-center text-sm lg:text-base">
                                            <FontAwesomeIcon icon={faCheck} className="text-red-700 mr-2" />
                                            For creators struggling to make things "click"</p>
                                        <p className="flex font-sans items-center text-sm lg:text-base">
                                            <FontAwesomeIcon icon={faCheck} className="text-red-700 mr-2" />
                                            Start collecting leads on all platforms in minutes</p>
                                    </div>
                                </div>
                                <div className="image-div flex">
                                    <img src={Video1} alt="" className="rounded-xl border-8 border-grey mt-20 lg:mt-20" style={{ maxWidth: "500px", height: "300px" }} />
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-5xl text-primary mt-20">
                                    How it Works
                                </h1>
                                <img src={Video1} alt="" className="w-full max-w-4xl rounded-xl border-8 border-grey mt-6" style={{ height: "auto" }} />
                            </div>


                            <div className={`flex flex-col justify-center items-center p-4 md:p-10 transition-transform duration-500 ${scrolling ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                                <h1 className="text-2xl md:text-4xl mt-10 md:mt-20 text-primary text-center">
                                    Most Link-in-Bio Tools Are Just Cluttered Link Dumps
                                </h1>
                                <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 mt-10 md:mt-20">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-gray-400 font-semibold text-primary w-14 h-14 rounded-full flex justify-center items-center">
                                            <FontAwesomeIcon icon={faLink} className="w-9 h-9 text-grey-700" />
                                        </div>
                                        <h3 className="font-sans font-semibold text-[16px] md:text-[18px] text-center mt-5 md:mt-10">
                                            You add tons of links <br /> to your bio.
                                        </h3>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="bg-gray-400 w-14 h-14 rounded-full flex justify-center items-center">
                                            <img src={LinksSVG} alt="" className="rounded-full bg-grey-700 w-10 h-10" />
                                        </div>
                                        <h3 className="font-sans font-semibold text-[16px] md:text-[18px] text-center mt-5 md:mt-10">
                                            Your audience is overwhelmed <br />and lost among all <br /> the links.
                                        </h3>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="bg-gray-400 w-14 h-14 rounded-full flex justify-center items-center">
                                            <FontAwesomeIcon icon={faShoppingCart} className="w-9 h-9 text-grey-700 text-primary" />
                                        </div>
                                        <h3 className="font-sans font-semibold text-[16px] md:text-[18px] text-center mt-5 md:mt-10">
                                            They leave without clicking or <br />buying anything and you <br />just lost a lead.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20">
                                <div className="flex justify-center gap-10 items-center">
                                    <div>
                                        <img src={moneyBackSVG} className="mt-6" />
                                    </div>
                                    <div className="flex justify-center items-center gap-4 mt-8">
                                        <div className="flex -space-x-4">
                                            <img src={UserIcon} width={35} alt="" className="rounded-full border-2 border-white" />
                                            <img src={UserIcon} width={35} alt="" className="rounded-full border-2 border-white" />
                                            <img src={UserIcon} width={35} alt="" className="rounded-full border-2 border-white" />
                                        </div>
                                        <div className="rounded-lg lg:overflow-visible">
                                            <div className="flex flex-col items-start font-bold text-blue-gray-500">
                                                <div className="inline-flex items-center">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-600 cursor-pointer">
                                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-600 cursor-pointer">
                                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-600 cursor-pointer">
                                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-600 cursor-pointer">
                                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 cursor-pointer text-blue-gray-500">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <p className="block font-sans antialiased font-medium text-blue-gray-500 text-[14px]">
                                                    Loved by 100+ customers
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row justify-between items-start p-4 md:p-10">
                                    <div className="left-div flex-1 md:mr-10">
                                        <h1 className="text-2xl md:text-4xl text-primary mb-4">
                                            You've Got <br /> Questions. We've <br /> Got Answers.
                                        </h1>
                                        <p className="font-sans text-[16px]">
                                            You've got the expertise and the content, <br />
                                            you need the right tool to get the <br />
                                            right eyeballs on it.
                                        </p>
                                    </div>
                                    <div className="right-div flex-1 mt-6 md:mt-0">
            <div className="mb-4">
                <div className={`flex items-center justify-between border-t-2 p-2 relative cursor-pointer`} onClick={() => toggleExpand(1)}>
                    <p>What exactly is this?</p>
                    {expanded1 ? <FontAwesomeIcon icon={faMinus} className="w-4 h-4 text-gray-500" /> : <FontAwesomeIcon icon={faPlus} className="w-4 h-4 text-gray-500" />}
                </div>
                <div className={`ml-6 text-sm font-sans ${expanded1 ? 'expand-content' : 'collapse-content'}`}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies neque non neque tristique, nec fermentum dolor fringilla. Nam et bibendum justo. Integer ac eros vel purus interdum semper. Mauris eu turpis vel libero vestibulum ullamcorper.</p>
                </div>
            </div>
            <div className="mb-4">
                <div className={`flex items-center justify-between border-t-2 p-2 relative cursor-pointer`} onClick={() => toggleExpand(2)}>
                    <p>This sounds complicated and time-consuming?</p>
                    {expanded2 ? <FontAwesomeIcon icon={faMinus} className="w-4 h-4 text-gray-500" /> : <FontAwesomeIcon icon={faPlus} className="w-4 h-4 text-gray-500" />}
                </div>
                <div className={`ml-6 text-sm font-sans ${expanded2 ? 'expand-content' : 'collapse-content'}`}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies neque non neque tristique, nec fermentum dolor fringilla. Nam et bibendum justo. Integer ac eros vel purus interdum semper. Mauris eu turpis vel libero vestibulum ullamcorper.</p>
                </div>
            </div>
            <div>
                <div className={`flex items-center justify-between border-t-2 p-2 relative cursor-pointer`} onClick={() => toggleExpand(3)}>
                    <p>Will this really make a difference in my AI output?</p>
                    {expanded3 ? <FontAwesomeIcon icon={faMinus} className="w-4 h-4 text-gray-500" /> : <FontAwesomeIcon icon={faPlus} className="w-4 h-4 text-gray-500" />}
                </div>
                <div className={`ml-6 text-sm font-sans ${expanded3 ? 'expand-content' : 'collapse-content'}`}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies neque non neque tristique, nec fermentum dolor fringilla. Nam et bibendum justo. Integer ac eros vel purus interdum semper. Mauris eu turpis vel libero vestibulum ullamcorper.</p>
                </div>
            </div>
        </div>
                                </div>


                            </div>
                            <div>
                                <div className="flex flex-col justify-center items-center mt-10">
                                    {/* <img src={section5SVG} className="mt-6" /> */}
                                    <h1 className="text-3xl text-primary text-center mx-auto">
                                        Made it down here and are still not convinced? <br />
                                        Use code “CONVINCE14” for an extended <br />
                                        14-day free trial on all paid plans and <br />
                                        enjoy your new leads <br />
                                        and sales, on us
                                    </h1>
                                    <button className="bg-primary text-white pl-4 pr-4 pt-2 pb-2 rounded-full flex items-center mt-6">
                                        CONVINCE 14
                                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                                    </button>

                                </div>
                            </div>

                            <div className="bg-primary rounded-b-xl p-4 flex flex-col md:flex-row justify-between items-center mt-10 md:flex-wrap">
                                <div className="flex space-x-4 md:pl-4">
                                    <a href="#about" className="text-white">About</a>
                                    <a href="#contact" className="text-white">Contact Us</a>
                                    <a href="#search" className="text-white">Search</a>
                                </div>
                                <div className="flex space-x-6 md:pr-4">
                                    <FontAwesomeIcon icon={faFacebook} className="text-white cursor-pointer w-6 h-6" />
                                    <FontAwesomeIcon icon={faTwitter} className="text-white cursor-pointer w-6 h-6" />
                                    <FontAwesomeIcon icon={faVimeo} className="text-white cursor-pointer w-6 h-6" />
                                    <FontAwesomeIcon icon={faYoutube} className="text-white cursor-pointer w-6 h-6" />
                                </div>
                                <div className="w-full mt-10 md:mt-6 md:pl-4 md:pr-4 pt-6 border-t-2 border-gray-500">
                                    <div className="about-footer flex flex-col md:flex-row items-center justify-between">
                                        <div>
                                            <p className="text-white md:mb-0 mb-2">© 2024 LinkLeads. All rights reserved.</p>
                                        </div>
                                        <p className="text-gray-300 text-2xl font-semibold mx-auto md:mx-0 md:mb-0 mb-2">LinkLeads</p>
                                        <div>
                                            <a href="#terms" className="text-white inline">Terms of service</a>
                                            <a href="#privacy-policy" className="text-white inline ml-4">Privacy Policy</a>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                    <div className="">
                        <ChatBot />
                    </div>
                </>
            )}
        </>
    );
};

export default LandingPage;
