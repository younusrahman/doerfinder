import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import React from "react";

export default function CustomSelect({
  placeholder,
  name,
  setvalue,
  getvalue,
  items,
}) {

    const handelOnChange = (data) => {
        const { value } = data.target;
    
        setvalue({ ...getvalue, [name]: value });
      };


  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel id="demo-simple-select-standard-label" sx={{color:"#a2a2a2"}}>
       {  placeholder}
      </InputLabel>
      <Select
        required
        value={getvalue[name]}
        onChange={handelOnChange}
        label={placeholder}
        fullWidth        
      >
   

        {items?.map((item) => {
          return (
            <MenuItem key={item.id} value={item.name}>
              {item.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
