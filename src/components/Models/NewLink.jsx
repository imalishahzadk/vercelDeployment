import React, { useState } from "react";
import CloseSVG from "../../assets/close.svg";
import DeleteSVG from "../../assets/deleteIcon.svg";
import EditSVG from "../../assets/editIcon.svg";
import Button from "../Button/Button";
import { FaAngleDown } from "react-icons/fa";
import LinkImg from "../../assets/linkImg.svg";

const NewLinkModel = ({ openLinkModel, onClose }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [manageLinksOpen, setManageLinksOpen] = useState(false);

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setImage(file);
  // };

  // const openFilePicker = () => {
  //   const elem = document.getElementById("filepicker");
  //   elem.click();
  // };

  return (
    <>
      <div className={`fixed inset-0 z-50 ${openLinkModel ? "" : "hidden"}`}>
        <div className="flex items-center justify-center min-h-screen px-4 pt-6 pb-4 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div>
              {/* <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4"> */}
              <div>
                {/* <div className="sm:flex sm:items-start"> */}
                <div className="p-3 md:p-5 sm:mt-0 sm:text-left">
                  <h3 className="text-lg font-medium text-gray-900">
                    Create a Link
                  </h3>
                </div>
                <div className="h-1 border-b border-b-[#D9D9D9]" />
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    onClick={() => {
                      onClose();
                      setManageLinksOpen(false);
                    }}
                  >
                    <img src={CloseSVG} alt="Close" />
                  </button>
                </div>
              </div>
              <div className="mt-5 p-3 md:p-5">
                <label
                  htmlFor="title"
                  className="block font-semibold text-black/70"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  // onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                />
                <div className="mt-5 relative">
                  <p className="font-semibold text-black/70">Basic Link *</p>
                  <div className="relative mt-3">
                    <input
                      id="title"
                      type="text"
                      placeholder="Instagram"
                      className="pl-2 pr-8 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <FaAngleDown className="text-gray-400 h-5 w-5" />{" "}
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-black/70">Link</p>
                    <p className="text-[#B2B2B2]">
                      Example: https://portfolio.com
                    </p>
                  </div>
                  <input
                    id="title"
                    type="text"
                    className="mt-3 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>
              <p className="font-semibold text-black/70 mx-5">Preview</p>
              <div className="mt-5 mx-5 border-2 border-[#E5E7EB] py-8 flex justify-center rounded-xl">
                <div className="py-6 px-9 sm:px-14 rounded-3xl flex items-center gap-5 border border-[#28439D]">
                  <div>
                    <img src={LinkImg} alt="" />
                  </div>
                  <div>
                    <p className="my-2">Linktree</p>
                    <p className="text-gray-400">https://linktr.ee</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 px-4 py-3 bg-gray-50 sm:px-6 flex items-center gap-3 flex-row-reverse">
              <Button
                text="Save"
                onClick={() => {
                  onClose();
                  setManageLinksOpen(false);
                }}
                className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-3xl sm:mt-0 sm:w-auto sm:text-sm hover:bg-[#3855b3da] duration-300"
              />
              <Button
                text="Manage Link"
                onClick={() => setManageLinksOpen(true)}
                className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium bg-transparent border-2 border-gray-300 rounded-3xl sm:mt-0 sm:w-auto sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Manage Links Open Modal */}
      {manageLinksOpen && (
        <div className="fixed md:top-36 right-[3%] md:right-[14%] z-50 md:w-[400px]">
          <div className="flex items-center justify-center min-h-screen">
            {/* <div className="flex items-center justify-center min-h-screen px-4 pt-6 pb-4 text-center sm:block sm:p-0"> */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div>
                <div className="sm:flex sm:items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900 p-5">
                    Manage Links
                  </h3>
                  <div className="absolute top-0 right-0 pt-5 pr-4">
                    <button onClick={() => setManageLinksOpen(false)}>
                      <img src={CloseSVG} alt="Close" />
                    </button>
                  </div>
                </div>
                <div className="h-1 border-b border-b-[#D9D9D9]" />
                <div className="p-5">My Links</div>
                <div className="mx-5 py-6 px-8 rounded-3xl flex items-center justify-between border border-[#28439D]">
                  <div className="flex items-center gap-5">
                    <div>
                      <img src={LinkImg} alt="" />
                    </div>
                    <div>
                      <p className="my-2">Linktree</p>
                      <p className="text-gray-400">https://linktr.ee</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <img src={EditSVG} alt="" className="shadow-icon p-2" />
                    <img src={DeleteSVG} alt="" className="shadow-icon p-2" />
                  </div>
                </div>
              </div>
              <div className="px-4 py-4 bg-gray-50">
                <Button
                  text="+ Add New Link"
                  onClick={() => setManageLinksOpen(true)}
                  className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-3xl sm:mt-0 sm:w-auto sm:text-sm"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewLinkModel;
