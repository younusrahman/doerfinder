import React from 'react'
import {
    Box,
    InputAdornment,
    TextField,
    Typography,
  } from "@mui/material";
  import { Colors, Fonts } from "other/customizeStyles";
import { BiSearchAlt } from "react-icons/bi";
import BigLogo from "other/images/home/Logo.png"
import { HiOutlineArrowCircleRight } from 'react-icons/hi';


  

export default function HomeSection1({setvalue, getvalue, onClick}) {

  const handelOnChange = (e) => {
    setvalue(e.target.value)
  }
  
  return (
    <>
      <Box
        sx={{
          zIndex: 5,
          boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
          height: { xs: "100vh" },
          display: "flex",
          flexDirection: "column",
        }}
        component="header"
        className="home-section-1 flex justify-center items-center  "
      >
        <Box component="span" sx={{width:{xs:"3.5rem", sm:"5rem"}  ,position:"absolute", top:"5%", left:"5%"}} >
                  <img src={BigLogo} style={{width:"100%"}}/>

        </Box>
        <Box component="span" sx={{position:"absolute", top:{xs:"20%", md:"5%"}}} >
                <Typography component="span" variant="h5" fontFamily={Fonts.styling} sx={{color:"white", fontSize:{xs:"3rem", sm:"4rem"} ,textDecoration: "underline", textUnderlineOffset:{xs:"0.5rem", sm:"1rem"}, textDecorationColor:Colors.primary}}>
                  Doerfinder
                </Typography>

        </Box>
        <Box
          component="div"
          sx={{
            backgroundColor: "white",
            width: { xs: "80%", lg: "50%" },
            borderRadius: "50px",
          }}
          className="flex justify-center p-2"
        >
          <TextField
            fullWidth
            onChange={handelOnChange}
            sx={{
              input: {
                color: Colors.primary,
                backgroundColor: "white",
                fontSize: "1.4rem",
                textAlign: "center",
                fontFamily: Fonts.primary,
                fontWeight: "bold",
              },
            }}
            placeholder="Sök"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <BiSearchAlt
                    color={Colors.primary}
                    style={{ borderBottom: "0 solid red" }}
                    size={30}
                  />
                </InputAdornment>
              ),       
              
              endAdornment: getvalue && (
                <InputAdornment position="start">
                  <HiOutlineArrowCircleRight
                   color={Colors.primary}
                      cursor="pointer"
                      size={30}
                    onClick={ onClick}
                  />
                </InputAdornment>
              )
            }}
          />
        </Box>
        <Box component="div" sx={{position:"absolute", bottom:"0" }}>
          
            <Box component="blockquote" className='homeQuote' sx={{
            
            }}>
              Hitta rätt städfirma för din hemstädning
              <Box component="footer" className='homeQuoteAutor'  sx={{
              
            }}>
                <cite>Younus Rahman</cite>
              </Box>
            </Box>
    
        </Box>
      </Box>
    </>
  );
}
