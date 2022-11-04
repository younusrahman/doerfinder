import { createTheme, Grid, Stack, ThemeProvider, useMediaQuery } from "@mui/material";
import { grid } from "@mui/system";
import React from "react";
import CardComponent from "./CardComponent";

export default function GridComponent({items}) {
  // const bigDevice = useMediaQuery("(min-width:1500px)");
  // const mediumDevice = useMediaQuery("(min-width:990px)");
  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 690,
        laptop: 990,
        desktop: 1500,
      },
    },
  });

  return (
  <ThemeProvider theme={theme}>
     <Grid
      container
      spacing={1.5}
      direction="row"

      sx={{
        display:"flex", justifyContent:"center"}}>
      {
        items
      }
    </Grid> 
    </ThemeProvider>
    
  );
}
