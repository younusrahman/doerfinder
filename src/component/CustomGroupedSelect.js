import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CustomGroupedSelect({ placeholder,name,setvalue,getvalue,items}) {

  const handelOnChange = (data) => {
   
    const { value } = data.target;
    console.log(value)
    setvalue({ ...getvalue, [name]: value });
  };


  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel htmlFor="grouped-select">{placeholder}</InputLabel>
        <Select
          variant="standard"
          defaultValue=""
          id="grouped-select"
          label="Grouping"

         
          value={getvalue[name]}
          onSelect={handelOnChange}
         
        >
          {items.map((currElement) => {
            return<div key={currElement.id}>
            <ListSubheader key={currElement.id}>{currElement.name}</ListSubheader>
            {currElement.subItems.map((subitem, index) => {
              return <MenuItem  key={index} value={subitem}>{subitem}</MenuItem>
              
            })}
            
            </div>
             


          })}

        </Select>
      </FormControl>
    </div>
  );
}
