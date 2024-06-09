import React from "react";

const ProductCard = ({
  imageUrl,
  productName,
  price,
  decimalPoint,
  EditSVG,
  DeleteSVG,
  onDelete,
  borderColor,
}) => {
  const handleDelete = () => {
    // Call the onDelete function with the product information
    onDelete({ imageUrl, productName, price, decimalPoint });
  };
  return (
    <div
      className={`${
        borderColor === true
          ? "border border-[#3855B3]"
          : "border border-gray-200"
      } w-80 py-10 px-10 transform rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg overflow-hidden`}
    >
      <img
        className="h-48 w-full object-cover object-center"
        src={imageUrl}
        alt="Product"
      />
      <div className="p-1 md:p-4">
        <h2 className="mb-2 text-lg font-semibold dark:text-white text-gray-900">
          {productName}
        </h2>
        <p className="mb-2 text-2xl dark:text-gray-300 text-gray-700">
          <sup>$</sup>
          {price}
          <sup>.{decimalPoint}</sup>
        </p>
        {EditSVG && DeleteSVG && (
          <div className="flex items-center justify-center gap-2 md:mt-10">
            <img
              src={EditSVG}
              alt="Edit"
              className="shadow-icon p-3 cursor-pointer"
            />
            <img
              onClick={handleDelete}
              src={DeleteSVG}
              alt="Delete"
              className="shadow-icon p-3 cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
