import React from "react";
import { MdOutlinePhone, MdEmail, } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { Box, Grid, Typography } from "@mui/material";
import { Colors } from "other/customizeStyles";



export default function HomeSection5() {
  return (

      <Grid container
      marginTop={"2rem"}
      padding={"1rem"}
      minHeight={"10rem"}
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center">

        <Grid item xs={12} sm={6} md={4} className="flex justify-center items-center" color="white" sx={{flexDirection:"column"}}>
         <MdEmail fontSize={50} color={Colors.primary}/>
         <Typography variant={"h6"}>INFO@Doerfinder.com</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className="flex justify-center items-center " color="white" sx={{flexDirection:"column", marginTop:{xs:"2rem", sm:"0rem"}}}>
          <MdOutlinePhone fontSize={50} color={Colors.primary}/>
          <Typography variant={"h6"}>000-000-00-00</Typography>
        </Grid>
        <Grid item xs={12} md={4} className="flex justify-center items-center" color="white" sx={{flexDirection:"column", marginTop:{xs:"2rem", sm:"0rem"}}}>
         <FaAddressCard fontSize={50} color={Colors.primary}/>
         <Typography variant={"h6"}>000-000-00-00</Typography>
        </Grid>
      </Grid>

  );
}
