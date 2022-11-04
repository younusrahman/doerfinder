import React from 'react'
import newspaperIcon from "other/images/newspaperIcon.png"
import logo from "other/images/home/Logo.png"
import "./CustomFooter.css"
import { Box, Button, TextField, Typography } from '@mui/material'
import { Colors, Fonts } from 'other/customizeStyles'
import { AiOutlineSend } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn, FaWordpress, FaBlogger} from "react-icons/fa";


export default function CustomFooter() {
  return (
    <footer className="footer" style={{marginTop:"15rem"}} >
        <div className="start-learning">
            <div className="footer-start" >
                <Box className="texts flex justify-center" sx={{ width:"100%"}}>
                    <Box>
                    <Typography component="div" className="section-title" sx={{fontFamily:Fonts.headline, fontSize:{sm:"1.5rem" ,lg:"2.3vw"} }} >Gå med i vårt nyhetsbrev</Typography>
                        <Box flexDirection={"column"} display="flex" alignItems={"end"}>
                        <TextField  fullWidth autoComplete='false'variant='standard' placeholder="Skriv din email address" inputProps={{ style: { fontFamily: 'Arial', color: 'white', textAlign:"center", borderBottom:"white 3px solid" }}}/>
                            <Button  sx={{ color:"white","&:hover": {backgroundColor:"transparent"}}} disableRipple >Skicka</Button>
                        </Box>
                    </Box>
                </Box>
                <img className="illustration" src={newspaperIcon} alt="illustration" width="120" height="94"/>
            </div>
        </div>

        <div className="inner">
            <div className="column is-logo flex justify-center">
                <a href="#" className="main-logo">
                    <div className="logo">
                        <img src={logo} alt="Doerfinder"/>
                    </div>
                    <div className="logo-info">
                        <div className="text">Doerfinder</div>
                        <span className="copyright">© 2022. All rights reserved.</span>
                    </div>
                </a>
            </div>
            <div className="column is-nav">
                <div className="column-title">Navigation</div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">RegisterForm</a></li>
                    <li><a href="#">Anslut Företag</a></li>
                </ul>
            </div>

            <div className="column is-nav">
                <div className="column-title">Contact</div>
                <ul>
                    <li>
                        <Box sx={{display:"flex" , alignItems:"center"}}>
                            <BsFillTelephoneFill color={Colors.primary} className="mr-3"/>
                            <Typography component={"p"} color="white" fontSize={12} fontWeight={"bolder"}>000-000-00-00</Typography>
                        </Box></li>
                        <li>  <Box sx={{display:"flex" , alignItems:"center"}}>
                            <MdAlternateEmail color={Colors.primary} className="mr-3"/>
                            <Typography component={"p"} color="white" fontSize={12} fontWeight={"bolder"}><a href="mailto:INFO@Doerfinder">Email</a></Typography>
                        </Box></li>
            
             </ul>
            </div>

            <div className="column is-nav footerAdress">
                <div className="column-title">Other</div>
                <ul>
                <li>
                        <Box sx={{display:"flex" , alignItems:"center"}}>
                            <FaBlogger color={Colors.primary} className="mr-3"/>
                            <Typography component={"p"} color="white" fontSize={12} fontWeight={"bolder"}>000-000-00-00</Typography>
                        </Box></li>
                        <li>  <Box sx={{display:"flex" , alignItems:"center"}}>
                            <FaWordpress color={Colors.primary} className="mr-3"/>
                            <Typography component={"p"} color="white" fontSize={12} fontWeight={"bolder"}><a href="mailto:INFO@Doerfinder">Email</a></Typography>
                        </Box></li>
                        <li>  <Box sx={{display:"flex" , alignItems:"center"}}>
                            <FaLinkedinIn color={Colors.primary} className="mr-3"/>
                            <Typography component={"p"} color="white" fontSize={14} fontWeight={"bolder"}><a href="https://www.linkedin.com/in/doerfinder">Linkedin</a> </Typography>
                        </Box></li>

                </ul>

            </div>
        </div>
    </footer>
  )
}
