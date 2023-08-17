import React, { useState } from "react";
import { products } from "./productsList";
import { ProductType } from "./types";
import Image from "next/image";
import IntroDot from "@/assets/IntroDot.svg";
import SelectedDot from "@/assets/SelectedIntroDot.svg";
import CustomButton from "../CustomButton";
import ContactUsIcon from "@/assets/contactUsIcon.svg";
import ArrowRightIcon from "@/assets/arrow-right-icon.svg";

const OurProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(
    products[0]
  );

  return (
    <div className="flex flex-col xl:flex-row mx-5 xl:mx-20" id="/products">
      <span className="xl:hidden block">
        <div className="gradient-accent-color font-black text-3xl mb-5">
          Our products
        </div>
      </span>

      <div className="w-[800px] mt-10 hidden xl:block">
        <div className="absolute z-10 ">
          <div className="gradient-accent-color font-black text-2xl mb-5">
            Our products
          </div>
          <div className="text-dark-blue font-black z-10 w-12 text-4xl h-32">
            {selectedProduct.productName}
          </div>
          <div>
            <div className="flex gap-5 m-5">
              {products.map((item, index) =>
                item.productName === selectedProduct.productName ? (
                  <Image
                    key={index}
                    src={SelectedDot}
                    alt={""}
                    width={15}
                    height={15}
                    onClick={() => setSelectedProduct(item)}
                    className="cursor-pointer"
                  />
                ) : (
                  <Image
                    key={index}
                    src={IntroDot}
                    alt={""}
                    width={15}
                    height={15}
                    onClick={() => setSelectedProduct(item)}
                    className="cursor-pointer"
                  />
                )
              )}
            </div>

            <CustomButton
              text="Contact us"
              type={"gradient"}
              icon={ContactUsIcon}
            />
          </div>
        </div>
      </div>
      <div className="gcr-rounded-products-wrapper gcr-rounded-wrapper border border-gray-900 lg:mb-16 bg-light-grey flex flex-col py-5 px-8 xl:px-12 md:h-[520px] lg:pt-14 relative  lg:grow lg:gap-8 ">
        <div className="gcr-products-top-description text-xl lg:text-2xl text-[#3C3F40]">
          At <b>Greencare Rwanda Ltd</b>, we offer a range of competitive
          products that provide solutions to the agricultural sector,
          environmental protection, and construction projects. Our products are
          designed to promote a greener future while meeting the highest quality
          standards.
        </div>
        <div className="flex flex-col md:flex-row top-52 left-0 lg:px-4 xl:gap-14 xl:px-18">
          {products.map((product, index) => {
            return (
              <div
                key={index}
                onClick={() => setSelectedProduct(product)}
                className={`flex flex-col flex-1 cursor-pointer ${
                  selectedProduct.productName === product.productName &&
                  `gap-4 bg-white gcr-rounded-product-wrapper mt-5 mb-6 xl:mb-12 h-fit`
                }`}
              >
                <div className="flex flex-col items-center gap-4 px-5 pt-5">
                  <Image src={product.image} alt={product.productName} />
                  <div className="gcr-products-product-name">
                    {product.productName}
                  </div>
                  <div
                    className={`gcr-products-product-description ${
                      selectedProduct.productName === product.productName
                        ? `block`
                        : `hidden`
                    }`}
                  >
                    {product.description}
                  </div>
                </div>
                <div
                  className={`grid justify-items-stretch pb-5 pr-10 ${
                    selectedProduct.productName === product.productName
                      ? `block`
                      : `hidden`
                  }`}
                >
                  <Image
                    className="justify-self-end"
                    src={ArrowRightIcon}
                    alt="Arrow Right icon"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
