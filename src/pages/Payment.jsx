import UserIcon from "../assets/userPic.svg";
import AISVG from "../assets/aisvg.svg";
import React, { useState, useEffect } from "react";
import ChatBot from "../components/ChatBox/ChatBox";
import Loading from "../components/Loading/Loading";
import { CiCreditCard1 } from "react-icons/ci";
import { FaCheckCircle, FaPaypal } from "react-icons/fa";
import { FaCcMastercard, FaCcVisa, FaCreditCard } from 'react-icons/fa';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import LockIcon from '@mui/icons-material/Lock';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';


const Payment = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [activeButton, setActiveButton] = useState('monthly');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    const formattedInput = input.match(/.{1,4}/g)?.join(' ') || '';
    setCardNumber(formattedInput);
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
            <div className="flex-grow bg-[#f6f7fa] px-2 lg:px-16 pt-10">
              <div className="">
                  <div className="mt-2 mb-2 font-semibold text-[20px] text-black/70">
                    <h1>Start Your Free Trial</h1>
                  </div>
                  <div className="mt-5 bg-white">
                  <Timeline position="alternate">
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="primary">
                          <LockIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <h3 className="font-semibold">Unlock Now</h3>
                        <p className="text-black/70">Get instant access to all Pro features</p>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="secondary">
                          <AccessAlarmIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <h3 className="font-semibold">Day 28</h3>
                        <p className="text-black/70">We'll send a reminder email that your trial is ending soon</p>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot color="info">
                          <BatteryChargingFullIcon />
                        </TimelineDot>
                      </TimelineSeparator>
                      <TimelineContent>
                        <h3 className="font-semibold">Day 30</h3>
                        <p className="text-black/70">Your Pro plan starts and your credit card will be charged. Cancel anytime before.</p>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>

                  </div>
              </div>

                  <div className="mt-4 mb-4 font-semibold text-[20px] text-black/70">
                    <h1>Payment Method</h1>
                  </div>
                  <div className="bg-white p-5 rounded-t-xl flex items-center space-x-4">
                    <h5 className="text-[30px]"><CiCreditCard1 /></h5>
                    <h5 className="font-semibold">Registered Cards</h5>
                  </div>

                  <div className="bg-white flex flex-wrap justify-between border-t-2 p-4 rounded-b-xl">
                    <div className="flex-grow mx-2 w-full sm:w-1/2 lg:w-auto ml-0 sm:ml-14">
                      <h5 className="check-icon font-semibold text-[20px]"><FaCheckCircle /></h5>
                      <h5 className="text-[30px] mt-4"><CiCreditCard1 /></h5>
                    </div>
                    <div className="flex-grow mx-2 w-full sm:w-1/2 lg:w-auto">
                      <h5 className="font-semibold text-[16px]">Bank</h5>
                      <h5 className="text-[16px] mt-4">Bank of America</h5>
                    </div>
                    <div className="flex-grow mx-2 w-full sm:w-1/2 lg:w-auto">
                      <h5 className="font-semibold text-[16px]">Last Four Digits</h5>
                      <h5 className="text-[16px] mt-4">1234</h5>
                    </div>
                    <div className="flex-grow mx-2 w-full sm:w-1/2 lg:w-auto">
                      <h5 className="font-semibold text-[16px]">Name on the Card</h5>
                      <h5 className="text-[16px] mt-4">Hiszi Kocaman</h5>
                    </div>
                    <div className="flex-grow mx-2 w-full sm:w-1/2 lg:w-auto">
                      <h5 className="font-semibold text-[16px]">Expiry Date</h5>
                      <h5 className="text-[16px] mt-4">12/04</h5>
                    </div>
                  </div>

                  <div className="p-4 rounded-md space-y-4 mt-8 bg-green-300 bg-opacity-10">
                    <div className="flex justify-between items-center p-4">
                      <div className="flex items-center">
                        <input type="radio" id="payment-option" name="payment" className="mr-2" />
                        <label htmlFor="payment-option" className="font-medium text-lg">
                          Add New Card
                        </label>
                      </div>
                      <div className="flex space-x-4">
                        <FaCcMastercard className="text-3xl text-orange-500" />
                        <FaCcVisa className="text-3xl text-primary" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h3 className="text-md font-bold text-black/80">Card Number</h3>
                          <p className="text-gray-600 hidden sm:block">Enter the 16-digit card number on the card</p>
                        </div>
                        <div className="relative w-1/2">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaCreditCard className="text-gray-500 w-5 h-5" />
                          </span>
                          <input
                            type="text"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            className="border-none rounded-xl p-1 pl-10 w-full focus:outline-none"
                            maxLength="19" // Max length to account for spaces
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h1 className="text-md font-bold text-black/80">Card Owner</h1>
                          <p className="text-gray-600 hidden sm:block">Enter the name on the card</p>
                        </div>
                        <input
                          type="text"
                          className="border-none rounded-xl p-1 w-1/2 focus:outline-none"
                          style={{ paddingLeft: "20px" }}
                        />
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <div className="flex flex-col">
                          <h1 className="text-md font-bold text-black/80">Expiry Date</h1>
                          <p className="text-gray-600 hidden sm:block">Enter the card's expiry date</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            placeholder="MM"
                            className="border-none rounded-xl p-1 w-16 text-center focus:outline-none"
                          />
                          <span>/</span>
                          <input
                            type="text"
                            placeholder="YY"
                            className="border-none rounded-xl p-1 w-16 text-center focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <div className="flex flex-col">
                          <h1 className="text-md font-bold text-black/80">Security Code</h1>
                          <p className="text-gray-600 hidden sm:block">Enter the 3-digit code on the back of the card</p>
                        </div>
                        <input
                          type="text"
                          placeholder="CVC"
                          className="border-none rounded-xl p-1 w-16 text-center focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

              <div className="p-4  rounded-md space-y-4 mt-8 bg-white">
                <div className="flex justify-between items-center p-4">
                  <div className="flex items-center">
                    <input type="radio" id="payment-option" name="payment" className="mr-2" />
                    <label htmlFor="payment-option" className="font-medium text-lg">
                      Paypal
                    </label>
                  </div>
                  <div className="flex space-x-4">
                    <FaPaypal className="text-3xl text-primary" />
                  </div>
                </div>
                </div>
                <div className="">
                  <div className="mt-4 mb-4 font-semibold text-[20px] text-black/70 ">
                    <h1>Billing Details</h1>
                  </div>
                  <div className="bg-white rounded-xl">
                  <div className="flex items-center rounded-md p-8 ml-12">
                    <button
                        className={`px-8 py-1 rounded-full focus:outline-none ${
                            activeButton === 'monthly'
                            ? 'bg-primary text-white'
                            : 'bg-white text-black/80 border border-2 border-grey-300'
                        }`}
                        onClick={() => handleButtonClick('monthly')}
                    >
                        Monthly
                    </button>
                    <button
                        className={`px-8 py-1 rounded-full focus:outline-none ${
                            activeButton === 'yearly'
                            ? 'bg-primary text-white'
                            : 'bg-white text-black/80 border border-2'
                        }`}
                        onClick={() => handleButtonClick('yearly')}
                    >
                        Yearly
                    </button>
                  </div>

                  <div class="grid gap-6 mb-2 md:grid-cols-1 pl-20 pr-20">
                    <div class="relative">
                        <input type="email" id="email" class="block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email Address</label>
                    </div>
                    <div class="relative">
                        <input type="text" id="zip_code" class="block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="zip_code" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Zip Code/ Postal Code</label>
                    </div>
                    <div class="relative">
                      <select id="county" class="block rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                          <option value="" disabled selected hidden></option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="India">India</option>
                          <option value="Afghanistan">Afghanistan</option>
                      </select>
                      <label for="county" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Select a County</label>
                  </div>


                  </div>


                </div>
                </div>
            </div>

            <div className="w-full lg:w-[350px] p-5 bg-white">
              <div className="flex justify-end">
                <button className="shadow-icon p-3">
                  <img src={AISVG} alt="" />
                </button>
              </div>
              <div className="flex flex-col gap-3 items-center relative">
                <img src={UserIcon} width={60} alt="" />
                <p className="font-semibold">@harrison123</p>
                <p className="text-[14px] text-black/80">Business Analyst</p>
              </div>
              
              <div className="border-primary mt-12">  
                <div className="bg-primary rounded-t-3xl p-8">
                  <h1 className="text-[22px] text-white">Your Trial Subscription</h1>
                </div>
                <div class="flex flex-col border-l-2 border-r-2 border-primary">
                  <div class="flex items-center p-4">
                    <h1 class="mr-4 text-primary font-semibold">Link in Bio Pro <span class="block">annual</span></h1>
                    <p class="text-primary text-[14px]">$7.50 USD per month, billed <span class="block">annually Free for 7 days</span></p>
                  </div>
                  <div class="ml-4 mb-4">
                    <p class="rounded-full border border-primary p-1 w-50 text text-red-500">Saving 17% on annual</p>
                    <p class="mt-4 font-bold text-primary underline">Add coupon code</p>
                  </div>
                </div>

              <div className="border-2 border-primary rounded-b-3xl">
                <div className="flex justify-between pt-8 pl-4">
                  <div className="flex-1 mr-4">
                    <p style={{whiteSpace: 'nowrap'}} className="font-semibold text-black/80">Due on Jan 1st, 2024</p>
                    <p style={{whiteSpace: 'nowrap'}} className="font-semibold text-black/80">Due Today</p>
                  </div>
                  <div className="flex-1">
                    <p style={{whiteSpace: 'nowrap'}}>$90 USD/year</p>
                    <p style={{whiteSpace: 'nowrap'}}>$0</p>
                  </div>
                </div>
                <a href="your_link_here">
                    <p className="cursor-pointer rounded-full pl-12 text-[18px] p-1 text-white bg-primary w-60 ml-8 mt-8">
                        Start your free trial
                    </p>
                </a>
                <p className="text-[14px] p-4 text-center">
                    Your subscription will start on the Dec 21st, unless you cancel. You can cancel anytime.
                </p>

              </div>







              </div>  

            </div>
          </div>
          <div>
            <ChatBot />
          </div>
        </>
      )}
    </>
  );
};

export default Payment;


