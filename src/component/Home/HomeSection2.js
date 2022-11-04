import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import { Colors, Fonts } from "other/customizeStyles";
import section2Img1 from "other/images/home/section2Img1.jpg"

import { GiCutDiamond } from "react-icons/gi";
import { BsUmbrellaFill } from "react-icons/bs";
import { MdOutlineElectricalServices } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";



 
export default function HomeSection2() {
  return (
    <Grid container sx={{ backgroundColor: "#f1f1f1",}}>
          <Grid item xs={12} md={6}  sx={{display:"flex", justifyContent:"center", }} >
          <img
                src={section2Img1}
                style={{
                  height: "100%",
                  objectFit: "cover"
              
                }}
              />
          </Grid>
          <Grid item xs={12} md={6} className="flex">
            <Box component="div" sx={{        
         
          margin: { xs: "1rem 1rem", md:"0 2rem" },
        }}>
                <Box component="div" className="flex">
                  <GiCutDiamond size={35} color={Colors.primary} />
                  <Box component="div" className="ml-3">
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      fontFamily={Fonts.primary}
                    >
                      Glittrande ren
                    </Typography>
                    <Typography variant="subtitle1" fontFamily={Fonts.primary}>
                      Vi håller ditt hem gnistrande rent och bakteriefritt. Vår
                      desinfektionsprocess dödar 99 % av vanliga bakterier och
                      virus.
                    </Typography>
                  </Box>
                </Box>
                <Box component="div" className="flex mt-4">
                  <BsUmbrellaFill size={35} color={Colors.primary} />
                  <Box component="div" className="ml-3">
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      fontFamily={Fonts.primary}
                    >
                      Försäkrad & Förbindad
                    </Typography>
                    <Typography variant="subtitle1" fontFamily={Fonts.primary}>
                      Våra tjänster är försäkrade och bundna så du behöver inte
                      oroa dig för din lägenhet, kontor eller trädgård.
                    </Typography>
                  </Box>
                </Box>
                <Box component="div" className="flex mt-4">
                  <MdOutlineElectricalServices
                    size={40}
                    color={Colors.primary}
                  />
                  <Box component="div" className="ml-3">
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      fontFamily={Fonts.primary}
                    >
                      Ledande Tekniker
                    </Typography>
                    <Typography variant="subtitle1" fontFamily={Fonts.primary}>
                      Vi använder säkra desinfektionsmedel av sjukhuskvalitet,
                      HEPA-filtrering och rengöringsdukar av mikrofiber för att
                      minska korskontaminering.
                    </Typography>
                  </Box>
                </Box>
                <Box component="div" className="flex mt-4 mb-4">
                  <FaHandsHelping size={35} color={Colors.primary} />
                  <Box component="div" className="ml-3">
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      fontFamily={Fonts.primary}
                    >
                      Pålitliga besättningar
                    </Typography>
                    <Typography variant="subtitle1" fontFamily={Fonts.primary}>
                      Våra pålitliga och stabila besättningar förstår dina
                      specifika behov.
                    </Typography>
                  </Box>
                </Box>
              </Box>
          </Grid>
        </Grid>
  )
}
