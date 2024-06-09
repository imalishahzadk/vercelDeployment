import React, { useState } from "react";
import Button from "../Button/Button";
import BGIMG from "../../assets/bgimg.jpeg";
import DiscountSVG from "../../assets/discount.svg";

const Tabs = () => {
  const [openTab, setOpenTab] = useState("Landing page");
  return (
    <div className="my-3 font-sans flex items-center justify-center overflow-hidden">
      <div className="p-8">
        {/* buttons */}
        <div className="mb-4 flex space-x-3 sm:space-x-4 p-1 bg-gray-200 rounded-3xl">
          <button
            onClick={() => setOpenTab("Landing page")}
            className={`flex-1 py-2 px-4 !rounded-3xl transition-all duration-300 ${
              openTab === "Landing page" ? "bg-white !rounded-3xl" : ""
            } md:w-1/2 lg:w-1/4 xl:w-1/5`}
          >
            Landing page
          </button>
          <button
            onClick={() => setOpenTab("Timer page")}
            className={`flex-1 py-2 px-4 !rounded-3xl transition-all duration-300 ${
              openTab === "Timer page" ? "bg-white !rounded-3xl" : ""
            } md:w-1/2 lg:w-1/4 xl:w-1/5`}
          >
            Timer page
          </button>
          <button
            onClick={() => setOpenTab("Thank You page")}
            className={`flex-1 py-2 px-4 !rounded-3xl transition-all duration-300 ${
              openTab === "Thank You page" ? "bg-white !rounded-3xl" : ""
            } md:w-1/2 lg:w-1/4 xl:w-1/5`}
          >
            Thank You page
          </button>
          <button
            onClick={() => setOpenTab("Time's Up page")}
            className={`flex-1 py-2 px-4 !rounded-3xl transition-all duration-300 ${
              openTab === "Time's Up page" ? "bg-white !rounded-3xl" : ""
            } md:w-1/2 lg:w-1/4 xl:w-1/5`}
          >
            Time's Up page
          </button>
        </div>
        {/* landing page content */}
        <div
          className={`${
            openTab === "Landing page" ? "flex flex-col" : "hidden"
          } transition-all duration-300 bg-white p-4 rounded-lg lg:w-[50vw]`}
        >
          <p className="block text-black/70">Title</p>
          <input
            id="title"
            type="text"
            placeholder="Deep Blue Home"
            className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
          <p className="block text-black/70 mt-5">Description</p>
          <input
            type="text"
            placeholder="In-depth guides or reports that provide valuable information on a specific topic relevant to the target audience."
            className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
          <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center justify-between">
            <div className="">
              <p className="block text-black/70 mt-5">Call to action</p>
              <input
                type="text"
                placeholder="Get Access!"
                className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              />
              <p className="block text-black/70 mt-5 mb-2">
                Choose image for Landing page
              </p>
              <button
                type="button"
                className="my-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium bg-transparent border-2 border-gray-300 rounded-3xl sm:mt-0 sm:w-auto sm:text-sm hover:bg-gray-100 hover:shadow-md"
              >
                Choose File
              </button>
              <p className="block text-black/70">
                Do you want a timer running?
              </p>
              <input type="checkbox" name="" id="" className="mt-2" />
              <p className="block text-black/70 mt-2">Background Preferences</p>
              <div className="max-w-lg mx-auto mt-5">
                <div className="flex items-center mb-4">
                  <input
                    id="SingleColor"
                    type="radio"
                    name="colorOption"
                    value="SingleColor"
                    className="h-4 w-4 border-gray-300"
                  />
                  <label
                    htmlFor="SingleColor"
                    className="text-sm text-gray-400 ml-2 block"
                  >
                    Single Color
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="image"
                    type="radio"
                    name="colorOption"
                    value="Image"
                    className="h-4 w-4 border-gray-300"
                    defaultChecked
                  />
                  <label
                    htmlFor="image"
                    className="text-sm font-medium text-gray-400 ml-2 block"
                  >
                    Image
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="GradientColor"
                    type="radio"
                    name="colorOption"
                    value="GradientColor"
                    className="h-4 w-4 border-gray-300"
                  />
                  <label
                    htmlFor="GradientColor"
                    className="text-sm font-medium text-gray-400 ml-2 block"
                  >
                    Gradient Color
                  </label>
                </div>
              </div>
              <div className="cursor-pointer">
                <p className="block text-black/70 mt-2">
                  Choose Background Color
                </p>
                <div className="h-6 w-6 rounded-full bg-gray-200 my-2"></div>
              </div>
              <div className="cursor-pointer">
                <p className="block text-black/70 mt-2">Choose accent color</p>
                <div className="h-6 w-6 rounded-full bg-primary my-2"></div>
              </div>
            </div>
            {/* right side */}
            <div className="p-3 border border-gray-300 rounded-xl">
              <section
                style={{ backgroundImage: `url(${BGIMG})` }}
                className="rounded-xl h-[440px] w-[285px] bg-no-repeat relative"
              >
                <div className="absolute inset-0">
                  <p className="text-center mt-10 my-5 text-[#3855B3]">
                    Special Offer
                  </p>
                  <p className="text-4xl text-center text-[#3855B3] font-semibold leading-10 tracking-widest uppercase">
                    5 % off <br /> now
                  </p>
                  <div className="flex items-center justify-center mt-10">
                    <img src={DiscountSVG} alt="" />
                  </div>
                  <div className="flex items-center justify-center my-10">
                    <Button
                      text="GET MY 5% OFF"
                      className="uppercasem py-3 px-14 rounded-md text-white font-medium bg-[#3855B3]"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* buttons */}
          <div className="flex justify-end gap-2 my-5">
            <div>
              <Button
                text="Cancel"
                className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs"
              />
            </div>
            <div>
              <Button
                text="Save Changes"
                className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
              />
            </div>
          </div>
        </div>

        {/* timer page content */}
        <div
          className={`${
            openTab === "Timer page" ? "flex flex-col" : "hidden"
          } transition-all duration-300 bg-white rounded-lg lg:w-[50vw] overflow-hidden`}
        >
          <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center justify-between">
            <div className="relative px-5">
              <p className="block font-medium text-black/70 mb-2">
                After Form Submission?
              </p>
              <div className="flex items-center mb-2">
                <input
                  id="redirectImmediately"
                  type="radio"
                  name="redirectOption"
                  value="redirectImmediately"
                  className="h-4 w-4 border-gray-300"
                />
                <label
                  htmlFor="redirectImmediately"
                  className="text-sm text-gray-400 ml-2 block"
                >
                  Redirect immediately
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="viaLink"
                  type="radio"
                  name="redirectOption"
                  value="viaLink"
                  className="h-4 w-4 border-gray-300"
                  defaultChecked
                />
                <label
                  htmlFor="viaLink"
                  className="text-sm font-medium text-gray-400 ml-2 block"
                >
                  Send the link via email
                </label>
              </div>

              <p className="block font-medium text-black/70 mb-2 mt-5">
                Choose Template
              </p>
              <div className="flex items-center mb-2">
                <input
                  id="Template1"
                  type="radio"
                  name="template"
                  value="Template1"
                  className="h-4 w-4 border-gray-300"
                />
                <label
                  htmlFor="Template1"
                  className="text-sm text-gray-400 ml-2 block"
                >
                  Template1
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="default"
                  type="radio"
                  name="template"
                  value="default"
                  className="h-4 w-4 border-gray-300"
                />
                <label
                  htmlFor="default"
                  className="text-sm font-medium text-gray-400 ml-2 block"
                >
                  Default
                </label>
              </div>
              <p className="block font-medium text-black/70 mb-2 mt-5">
                Form Title
              </p>
              <input
                type="text"
                placeholder="Sign up to get access."
                className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              />
              <p className="block font-medium text-black/70 mb-2 mt-4">
                Timer Duration (seconds)
              </p>
              <input
                type="text"
                placeholder="30 seconds"
                className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              />
              <p className="block font-medium text-black/70 mb-2 mt-4">
                Include name
              </p>
              <input type="checkbox" name="" id="" />
            </div>
            {/* right side */}
            <div className="p-3 border border-gray-300 rounded-xl mr-8 mt-2">
              <section className="rounded-xl h-[395px] bg-[#23439D] w-[322px] md:w-[350px] bg-no-repeat relative">
                <div className="absolute inset-0">
                  <div className="mx-6 p-3 !bg-[#435BA9] rounded-md shadow-md mt-5">
                    <p className="text-center my-2 text-white">You have</p>
                    <p className="text-[45px] text-center text-white font-semibold leading-10 tracking-widest uppercase">
                      00 : 30
                    </p>
                    <div className="flex items-center gap-4 justify-center text-white/70 text-[18px] my-3 uppercase">
                      <p>Minutes</p>
                      <p>Seconds</p>
                    </div>
                    <p className="text-center text-white/80 text-[18px] font-medium">
                      {" "}
                      left to sign up to get access!
                    </p>
                  </div>

                  <p className="text-center my-3 text-white/80 text-lg font-medium">
                    Sign up to get access!
                  </p>

                  <div className="flex flex-col gap-y-3 items-center justify-center my-5">
                    <input
                      type="email"
                      name=""
                      placeholder="example@gmail.com"
                      className="py-3 px-5 w-72 rounded-md text-white font-medium bg-[#6173AF] placeholder:text-white/70"
                    />
                    <Button
                      text="Get the Ebook"
                      className="py-3 px-[93px] rounded-md text-white font-medium bg-[#6173AF]"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="flex justify-end gap-2 my-5 mr-8">
            <div>
              <Button
                text="Cancel"
                className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs"
              />
            </div>
            <div>
              <Button
                text="Save Changes"
                className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
              />
            </div>
          </div>
        </div>

        {/* thank you page content */}
        <div
          className={`${
            openTab === "Thank You page" ? "flex flex-col" : "hidden"
          } transition-all duration-300 bg-white p-4 rounded-lg lg:w-[50vw]`}
        >
          <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center justify-between">
            <div className="relative">
              <p className="block font-medium text-black/70 mb-2 mt-5">Title</p>
              <input
                type="text"
                placeholder="Thank You!"
                className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              />
              <p className="block font-medium text-black/70 mb-2 mt-4">
                Description
              </p>
              <input
                type="text"
                placeholder="It is on the way to your mailbox, go check!"
                className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              />
              <p className="block font-medium text-black/70 mb-2 mt-4">
                Link to your page
              </p>
              <input
                type="text"
                placeholder="Go to my page"
                className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            {/* right side */}
            <div className="p-3 border border-gray-300 rounded-xl">
              <section className="rounded-xl h-[243px] bg-[#23439D] w-[300px] md:w-[338px] bg-no-repeat relative">
                <div className="absolute inset-0 flex flex-col justify-center">
                  <p className="text-center text-white uppercase text-4xl">
                    Thank You!
                  </p>
                  <p className="text-md my-3 text-center text-white/80 font-medium">
                    It is on the way to your mailbox, go back!
                  </p>
                  <div className="flex flex-col gap-y-3 items-center justify-center my-5">
                    <Button
                      text="Go to my page"
                      className="uppercase py-3 px-10 rounded-md text-white font-medium bg-[#435BA9]"
                    />
                  </div>
                </div>
              </section>
            </div>
            {/* <div>
              <img src={ThankYouSVG} alt="" />
            </div> */}
          </div>
          <div className="flex justify-end gap-2 my-5">
            <div>
              <Button
                text="Cancel"
                className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs"
              />
            </div>
            <div>
              <Button
                text="Save Changes"
                className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
              />
            </div>
          </div>
        </div>

        {/* time's up page content */}
        <div
          className={`${
            openTab === "Time's Up page" ? "flex flex-col" : "hidden"
          } transition-all duration-300 bg-white p-4 rounded-lg lg:w-[50vw]`}
        >
          <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center justify-between">
            <div className="relative">
              <p className="block font-medium text-black/70 mb-2 mt-5">Title</p>
              <input
                type="text"
                placeholder="Out of time!"
                className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              />
              <p className="block font-medium text-black/70 mb-2 mt-4">
                Restart Button
              </p>
              <input
                type="text"
                placeholder="Try again"
                className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              />
              <p className="block font-medium text-black/70 mb-2 mt-4">
                Allow user to restart timer
              </p>
              <input type="checkbox" name="" id="" />
            </div>
            <div className="p-3 rounded-2xl border border-gray-200">
              <div className="bg-[#28439D] p-20 rounded-2xl">
                <p className="uppercase text-2xl font-semibold text-white mb-3">
                  Out of time !
                </p>
                <Button
                  text="try again"
                  className="uppercase px-6 py-2 text-white font-medium rounded-lg bg-[#6F7FB3CC] text-lg"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 my-5">
            <div>
              <Button
                text="Cancel"
                className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs"
              />
            </div>
            <div>
              <Button
                text="Save Changes"
                className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
