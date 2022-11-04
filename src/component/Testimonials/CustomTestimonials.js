import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./CustomTestimonials.css"
import pic1 from "other/images/testimonia/pic1.png"
import pic2 from "other/images/testimonia/pic2.png"
import pic3 from "other/images/testimonia/pic3.png"
import { Typography } from "@mui/material";
import { Colors, Fonts } from "other/customizeStyles";
import { MdStarHalf, MdStarPurple500, MdStar} from "react-icons/md";
import { Box } from "@mui/system";

export default function CustomTestimonials() {
  const usernameFont = Fonts.headline;
  const commentsFont = Fonts.primary;

  const usernameColor = Colors.primary

  return (
    <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        
      >
        <div>
          <img src={pic1} />
          <div className="myCarousel">
            <Typography variant="h3" sx={{color:usernameColor , fontFamily:usernameFont}}>Sebastian</Typography>
            <Box Component="span" className="flex justify-center" >
                <MdStar color={Colors.primary} />
                <MdStar color={Colors.primary} />
                <MdStar color={Colors.primary} />
                <MdStar color={Colors.primary} />
                <MdStarHalf color={Colors.primary} />
            </Box>
            <Typography variant="p" sx={{fontFamily:commentsFont }}>
              "Briljant städ! Snabb och effektivt utan något slarv. Bra
              kommunikation och inga konstigheter. Rekommenderas!"
            </Typography>
          </div>
        </div>

        <div>
          <img src={pic2} />
          <div className="myCarousel">
          <Typography variant="h3" sx={{color:usernameColor , fontFamily:usernameFont}}>Daniel Keystone</Typography>
          <Box Component="span" className="flex justify-center" >
          <MdStar color={Colors.primary} />
                <MdStar color={Colors.primary} />
                <MdStar color={Colors.primary} />
                <MdStarHalf color={Colors.primary} />
                <MdStarPurple500 color={Colors.primary} />
            </Box>
            <Typography variant="p" sx={{fontFamily:commentsFont }}>
              "Jag har upplevt en alldeles utomordentlig service, närhet och ett
              fint ompysslande av själva städpersonalen! Rekommenderas!"
            </Typography>
          </div>
        </div>

        <div>
          <img src={pic3} />
          <div className="myCarousel">
          <Typography variant="h3" sx={{color:usernameColor , fontFamily:usernameFont}}>Emil</Typography>
          <Box Component="span" className="flex justify-center" >
          <MdStar color={Colors.primary} />
                <MdStar color={Colors.primary} />
                <MdStarHalf color={Colors.primary} />
                <MdStarPurple500 color={Colors.primary} />
                <MdStarPurple500 color={Colors.primary} />
            </Box>
            <Typography variant="p" sx={{fontFamily:commentsFont }}>
              "Vi är mycket nöjda med Alberts Städservice! De har en mycket bra
              kundservice, är seriösa, professionella och städpersonalen har en
              yrkesstolthet. Det är rent och fint när vi kommer hem vilket
              underlättar vår vardag mycket. Rekommenderar sta rkt Alberts till
              alla."
            </Typography>
          </div>
        </div>
      </Carousel>
    
  )
}


