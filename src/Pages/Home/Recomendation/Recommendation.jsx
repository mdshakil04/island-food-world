/* eslint-disable no-unused-vars */
import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import cartImg1 from "../../../assets/home/slide1 - Copy.jpg";

const Recommendation = () => {
  return (
    <div>
      <div>
        <SectionTitle
          subHeading={"Should Try"}
          heading={"Chef Recommends"}
        ></SectionTitle>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 gap-4 my-8 ">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              src={cartImg1}
              className=" w-full "
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.If a dog chews shoes whose shoes does he choose</p>
            <div className="card-actions justify-center">
              <button className="btn uppercase text-[#BB8506] hover:bg-[#1F2937] border-b-4 border-b-[#BB8506] ">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              src={cartImg1}
              className=" w-full "
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.If a dog chews shoes whose shoes does he choose</p>
            <div className="card-actions justify-center">
              <button className="btn uppercase text-[#030302] hover:bg-[#1F2937] border-b-4 border-b-[#BB8506] ">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              src={cartImg1}
              className=" w-full "
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.If a dog chews shoes whose shoes does he choose</p>
            <div className="card-actions justify-center">
              <button className="btn uppercase text-[#BB8506] hover:bg-[#1F2937] border-b-4 border-b-[#BB8506] ">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// hover:bg-[1F2937]
export default Recommendation;
