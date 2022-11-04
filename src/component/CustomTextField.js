import { InputAdornment, TextField } from "@mui/material";
import { Colors, Fonts } from "other/customizeStyles";
import React, { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
export default function CustomTextField({
  placeholder,
  name,
  setvalue,
  getvalue,
  multiline = false
}) {


  
  const handelOnChange = (data) => {
    const { value, name } = data.target;

    setvalue({ ...getvalue, [name]: value });
  };

//   useEffect(() => {
//     console.log(allValues);
//   }, [allValues]);

  return (
    <TextField
     multiline= {multiline}
    
      name={name}
      value={getvalue[name]}
      onChange={handelOnChange}
      fullWidth
      placeholder={placeholder}
      InputProps={{
        
        endAdornment: getvalue[name] && (
          <InputAdornment position="start">
            <GiCancel
                cursor="pointer"
                size={15}
              onClick={(e) =>
                setvalue((prevState) => ({
                  ...prevState,
                  [name]: "",
                }))
              }
            />
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
}
