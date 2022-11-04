import React from 'react'
import {
    Box,
    Button,
    Grid,
  } from "@mui/material";
  import { Stack } from "@mui/system";
  import HubRoundedIcon from "@mui/icons-material/HubRounded";
  import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
  import CottageIcon from "@mui/icons-material/Cottage";
import { Colors } from 'other/customizeStyles';

export default function HomeMiddleBar() {
  return (
    <Box component="nav" id="middleBarInfo" sx={{ zIndex: 5 ,
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px;",
      
            
            paddingTop: { xs: "1rem", md: "0rem" },
        
        
        }} className="mt-5 ">
          <Grid container className="h-full">
            <Grid item xs={4} className="flex items-center justify-around">
              <Stack
                direction={{ xs: "col", md: "row" }}
                alignItems="center"
                justifyContent="center"
              >
                <CottageIcon sx={{ color: Colors.primary }} />
                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    },
                    color: Colors.primary,
                    fontWeight: "bold",
  
                    fontSize: { xs: "0.7rem", md: "1rem" },
                  }}
                >
                  Hitta proffs
                </Button>
              </Stack>
            </Grid>
            <Grid
              item
              xs={4}
              className="flex items-center flex-col justify-around"
            >
              <Stack
                direction={{ xs: "col", md: "row" }}
                alignItems="center"
                justifyContent="center"
              >
                <HubRoundedIcon sx={{ color: Colors.primary }} />
                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    },
                    color: Colors.primary,
                    fontWeight: "bold",
  
                    fontSize: { xs: "0.7rem", md: "1rem" },
                  }}
                >
                  Anslut företag
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={4} className="flex items-center justify-around">
              <Stack
                direction={{ xs: "col", md: "row" }}
                alignItems="center"
                justifyContent="center"
              >
                <VpnKeyRoundedIcon sx={{ color: Colors.primary }} />
                <Button
                  sx={{
                    "&:hover": {
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    },
                    color: Colors.primary,
                    fontWeight: "bold",
  
                    fontSize: { xs: "0.7rem", md: "1rem" },
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
  )
}
