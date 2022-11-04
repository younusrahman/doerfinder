import {
    Chip,
      FormControl,
      Input,
      makeStyles,
      TextField,
  } from "@material-ui/core";
import { Fonts, Colors } from "other/customizeStyles";

  import React, { useEffect, useState } from "react";
  
  
  export default function CustomListWithTextField({  
    placeholder,
    name,
    setvalue,
    getvalue,
    }) {
      const classes = useStyles();
    //   const [values, setValues] = useState([]);
      const [currValue, setCurrValue] = useState("");

      function containsAnyLetters(str) {
        return /[a-zA-Z]/.test(str);
      }
  
      const handleKeyUp = (e) => {
        console.log(getvalue[name])
          if (e.keyCode == 13 && containsAnyLetters(e.target.value)) {
            console.log("dssdsd")
            //   setvalue((oldState) => [...oldState, e.target.value]);
              setvalue({ ...getvalue, [name]: [...getvalue[name],  e.target.value]})
              setCurrValue("");
          }
      };
  
     
      const handleChange = (e) => {
          setCurrValue(e.target.value);
    };



    
    const handleDelete = ( item, index) =>{
        console.log(getvalue[name])
    //   let arr = [...getvalue[name]]
    //   arr.splice(index,1)
    //   setvalue[name](arr)
    const arr = getvalue[name].filter(function(value) {
        return value !== item
    })

    setvalue({ ...getvalue, [name]: arr})
    
    }
  
      return (
          
              <FormControl classes={{ root: classes.formControlRoot }}>
                  <div className={"container"}>
                      {getvalue[name]?.map((item,index) => (
                          <Chip key={index} size="small" onDelete={()=>handleDelete(item,index)} label={item}/>
                      ))}
                  </div>
                  <TextField
                  
             
                    fullWidth
                    placeholder= {placeholder}
                      variant="standard"
                      value={currValue}
                      onChange={handleChange}
                      onKeyDown={handleKeyUp}
                      sx={{
                        input: {
                          color: Colors.primary,
                          backgroundColor: "white",
                          fontSize: "1.3rem",
                
                          fontFamily: Fonts.primary,
                          fontWeight: "bold",
                          borderBottom: "2px solid",
                        },
                      }}
           

                  />
              </FormControl>
         
      );
  }
  
  const useStyles = makeStyles((theme) => ({
      formControlRoot: {
        color: Colors.primary,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          width: "100%",
          flexWrap: "wrap",
      flexDirection: "row",

      padding:4,
      borderRadius:'4px',
          "&> div.container": {
              gap: "6px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap"
          },
          "& > div.container > span": {
              backgroundColor: "gray",
              padding: "1px 3px",
              borderRadius: "4px"
          }
      }
  }));
  