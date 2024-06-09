import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import BackIcon from "../assets/backIcon.svg";
import RightArrow from "../assets/rightArrow.svg";
import YoutubeIcon from "../assets/youtubeIcon.svg";
import StoreItem from "../components/StoreItem/StoreItem";
import AmazonIcon from "../assets/amazon.svg";
import AddIcon from "../assets/addItem.svg";
import AddProduct from "../components/AddProduct/AddProduct";
import Loading from "../components/Loading/Loading";

const Store = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [productSelected, setProductSelected] = useState(false);
  const [showProductCard, setShowProductCard] = useState(false);
  const [selectedStore, setSelectedStore] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);


  useEffect(() => {
    // Simulate initial loading time
    const initialLoadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setShouldRenderUI(true);
    }, 1000);
    // Cleanup function to clear timeout
    return () => clearTimeout(initialLoadingTimeout);
  }, []);

  const handleBack = () => {
    // Move to the previous step only if the current step is not the first step (step 1)
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);

      // Reset productSelected and showProductCard states if moving back from step 3 to step 2
      if (currentStep === 3) {
        setProductSelected(true);
        setShowProductCard(false);
      }
    }
  };

  const handleSelect = (storeName) => {
    // Move to the next step when a store is selected
    setCurrentStep(2);
    // Set productSelected to true
    setProductSelected(true);
    // Set selected store
    setSelectedStore(storeName);
  };

  const handleAddProduct = () => {
    // Move to the next step when Add Product button is clicked
    setCurrentStep(3);
    // Set productSelected to false
    setProductSelected(false);
    // Set showProductCard to true
    setShowProductCard(true);
  };

  return (
    <>
      {isLoading && <Loading />}
      {shouldRenderUI && (
        <div className="relative">
          {/* divs for bg */}
          {currentStep !== 3 && (
            <div className="flex flex-col md:flex-col">
              <div className="flex flex-col items-start justify-start px-5 py-2 md:p-20 bg-white h-[60vh]">
                {/* Conditionally render based on the currentStep */}
                {currentStep === 1 && (
                  <>
                    <p className="text-2xl md:text-3xl ml-11 font-normal">Select Category</p>
                    <p className="my-2 md:my-3 ml-12 max-w-xs text-black/60 text-sm md:text-base font-normal leading-2">
                      Select the category where you want to add the link/lead magnets.
                    </p>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <p className="text-2xl md:text-4xl font-normal">
                      Current Products
                    </p>
                    <p className="my-4 md:my-9 max-w-xs text-black/60 text-sm md:text-base font-normal leading-6">
                      In the current free version, you can view your existing
                      products and can add maximum 3 products.{" "}
                    </p>
                  </>
                )}
              </div>
              <div className="bg-primary h-[60vh]"></div>
            </div>
          )}

          {/* Render steps based on the currentStep */}
          {currentStep === 1 && (
            <div className="absolute ml-20 mr-20 inset-0 flex flex-col md:flex-row items-center justify-center gap-6">
              <StoreItem
                icon={YoutubeIcon}
                title="Workout"
                onClickHandler={() => handleSelect("Simple Store")}
              />
              <StoreItem
                icon={AmazonIcon}
                title="Supplement"
                onClickHandler={() => handleSelect("Shopify")}
              />
              <StoreItem
                icon={YoutubeIcon}
                title="Music"
                onClickHandler={() => handleSelect("Amazon")}
              />
            </div>
          )}

          {currentStep === 2 && (
            <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Render StoreItem component with the Add Product button */}
              <div>
                <div className="p-5 w-[70%] flex flex-col items-center justify-center bg-white rounded-xl shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[413px] md:h-[413px] border border-gray-200">
                  <img src={AddIcon} alt="" />
                  <p className="text-center text-lg md:text-2xl font-medium my-2 md:my-3">
                    No Products created yet
                  </p>
                  <p className="text-center text-sm md:text-base font-normal text-black/50">
                    Simply create your first product.
                  </p>
                  <p className="text-center text-sm md:text-base font-normal text-black/50">
                    Just click on the button.
                  </p>
                  <button
                    onClick={handleAddProduct}
                    className="mt-2 md:mt-4 flex items-center text-white px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs bg-[#3855B3] hover:bg-[#3855b3da] duration-300"
                  >
                    + Add Product
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="absolute inset-0 flex gap-6">
              <AddProduct
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
              />
            </div>
          )}
          <div className="absolute bottom-4 md:bottom-16 right-10 md:right-20 flex gap-3">
            {currentStep <= 3 && (
              <>
                <Button
                  // onClick={handleBack}
                  text="Back"
                  src={BackIcon}
                  className="mt-2 md:mt-4 flex flex-row-reverse items-center text-white px-3 md:px-10 py-2 rounded-full font-medium text-sm md:text-xs bg-[#3855B3] hover:bg-[#3855b3da] duration-300"
                />
                <Button
                  // onClick={handleContinue}
                  text="Continue"
                  src={RightArrow}
                  className="mr-12 mt-2 md:mt-4 flex items-center text-black px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs bg-white"
                />
              </>
            )}
          </div>

        </div>
      )}
    </>
  );
};

export default Store;

