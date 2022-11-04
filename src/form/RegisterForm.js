import { FormGroup } from "@material-ui/core";
import { Button, Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomTextField from "component/CustomTextField";
import React, { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { Colors, Fonts } from "other/customizeStyles";
import CustomButton from "component/CustomButton";

export default function RegisterForm() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    password: "",
    rePasswoed: "",
    conditions: false,
  };

  const [allValues, setAllValues] = useState(initialValues);

  return (
    <>
    <Typography component="div"  sx={{marginBottom:"2rem",backgroundColor:Colors.primary,color:"white", display:"flex", fontFamily:Fonts.headline, justifyContent:"center",
    fontSize:{xs:"1.5rem", md:"2.5rem"}
  }} >
    skapa konto
    </Typography>
    <Box
      component="main"
      sx={{
        display: "flex",
        width: "80vw",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CustomTextField
            placeholder="Förnamn"
            name="firstname"
            setvalue={setAllValues}
            getvalue={allValues}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField
            placeholder="Efternamn"
            name="lastname"
            setvalue={setAllValues}
            getvalue={allValues}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField
            placeholder="Password"
            name="password"
            setvalue={setAllValues}
            getvalue={allValues}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField
            placeholder="Repetera lösenord"
            name="rePasswoed"
            setvalue={setAllValues}
            getvalue={allValues}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField
            placeholder="Telefonnummer"
            name="telephone"
            setvalue={setAllValues}
            getvalue={allValues}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField
            placeholder="E-mail"
            name="email"
            setvalue={setAllValues}
            getvalue={allValues}
          />
        </Grid>
        <Grid item>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Jag accepterar konsumentvilkoren"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <CustomButton text="Skicka" icon={<SendIcon/>}/>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
