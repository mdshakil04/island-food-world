/* eslint-disable no-unused-vars */
import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className=" featured-item  bg-fixed text-white">
      <div className=" bg-slate-700 bg-opacity-60">
        <SectionTitle
          subHeading={"Check it out"}
          heading={"From Our Menu"}
        ></SectionTitle>
        <div className=" mb-4 ">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={featuredImg}
                className=" md:w-1/2  mb-24 "
              />
              <div className=" w-1/2">
                <h1 className="text-3xl font-bold">March 20, 2024</h1>
                <h1 className="text-2xl font-bold">WHERE CAN I GET SOME?</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn bg-transparent uppercase text-slate-100300 border-b-white border-b-4 hover:bg-[#1F2937] text-white">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
