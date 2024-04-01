/* eslint-disable no-unused-vars */
import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../PopularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === "dessert");
  const soup = menu.filter(item => item.category === "soup");
  const pizza = menu.filter(item => item.category === "pizza");
  const salad = menu.filter(item => item.category === "salad")
  return (
    
    <div>
      <Helmet>
        <title>Island Food World | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={'Our Menu'}></Cover>
      <SectionTitle subHeading={"Don'tt miss"} heading={"Today's offer"}></SectionTitle>
    </div>
  );
};

export default Menu;
