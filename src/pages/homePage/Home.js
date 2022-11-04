import "pages/homePage/Home.css";
import React, { useEffect, useState } from "react";
import { Box, Grid, Modal, Typography } from "@mui/material";

import { Colors, Fonts } from "other/customizeStyles";
import HomeSection1 from "component/Home/HomeSection1";
import HomeMiddleBar from "component/Home/HomeMiddleBar";
import HomeSection2 from "component/Home/HomeSection2";

import ModalComponent from "component/ModalComponent";

import { AiOutlineForm } from "react-icons/ai";
import RegisterForm from "form/RegisterForm";
import HomeSection3 from "component/Home/HomeSection3";
import HomeSection4 from "component/Home/HomeSection4";
import HomeSection5 from "component/Home/HomeSection5";
import CustomTestimonials from "component/Testimonials/CustomTestimonials";
import lineimg from "other/images/home/sectionLine.svg"

export default function Home() {
  const [getSearchValue, SetSearchValue] = useState("");
  function SectionTitle(titel) {
    return (
      <Box
        component="div"
        className=" flex justify-center items-center flex-col"
        sx={{
          zIndex: 5,
          marginBottom: "1rem",
        }}
      >
                <img src={lineimg} color="green" width="380" />
        <Typography
          className="home-section-2-Titel"
          
          sx={{
            color: Colors.primary,
            fontFamily: Fonts.headline,
            fontSize: { xs: "1rem", md: "1.8rem" },
          }}
        >
          {titel}
        </Typography>
      </Box>
    );
  }

  const handelOnClick = () => {
    console.log(getSearchValue);
  };

  return (
    <>
      <HomeSection1
        getvalue={getSearchValue}
        setvalue={SetSearchValue}
        onClick={handelOnClick}
      />
      <HomeMiddleBar />
      <Box component="div"></Box>
      <Box
        className="home-section-2"
        component="section"
        sx={{ zindex: -15,  marginTop: "5rem" }}
      >
        {SectionTitle("Värför välja oss")}
        <HomeSection2 />
      </Box>
      <Box component="section" className="home-section-3" sx={{marginTop:"5rem"}}>
        <Box component="div" sx={{ backgroundColor: "rgba(0, 0, 0, 0.748)" }}>
          <HomeSection3 />
        </Box>
      </Box>
      <Box component="section" className="home-section-4">
        <Box
          component="section"
          sx={{
            width: "85%",
            boxSizing: "border-box",
            marginTop:"5rem"
          }}
        >
          {SectionTitle("Våra tjänster")}
          <HomeSection4 />
        </Box>
      </Box>

      <Box component={"section"} className="home-section-5" sx={{marginTop:"5rem"}}> 
        <Box component="div" sx={{ backgroundColor: "rgba(0, 0, 0, 0.748)" }}>
          <HomeSection5 />
        </Box>
      </Box>
      <Box component={"section"} className="home-section-6" sx={{marginTop:"5rem"}}>
      {SectionTitle("VAD TYCKER VÅRA KUNDER")}
        <CustomTestimonials/>
      </Box>
      <ModalComponent
          text="Registera dig"
          icon={<AiOutlineForm />}
          CustomizeForm={RegisterForm}
        />
    </>
  );
}

// ---------------------
{
  /* <div className="home-section-1"></div>

<div className="home-section-2"></div>

<div className="home-section-3"></div>

<div className="home-section-4"></div> */
}
