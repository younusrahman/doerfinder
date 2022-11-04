import React, { useEffect, useState } from "react";
import { purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import SaveIcon from "@mui/icons-material/Save";

import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { Colors } from "other/customizeStyles";
import CustomTextField from "component/CustomTextField";
import CustomSelect from "component/CustomSelect";
import CustomListWithTextField from "component/CustomListWithTextField";
import CustomGroupedSelect from "component/CustomGroupedSelect";

export default function CraftsForm() {
  const initialValues = {
    assignmentTitle: "",
    underCategory: "",
    description: "",
    subItems: [],
    place: "",
    kommun: "",
    assignmentLastDate: "",
  };

  const [allValues, setAllValues] = useState(initialValues);

  const handelOnChange = (data) => {
    const { value, name } = data.target;

    setAllValues({ ...allValues, [name]: value });
  };

  const CustomersFormHeader = (theme) => ({
    backgroundColor: Colors.primary,
    color: "white",
    padding: "0.5rem",
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#163b60 ",
      },
    },
  });



  const handelSubmitForm = (e) => {
    //Button status disable and loading animation on

    //Send item to DB

    //Button status enable and loading animation off

    //Close PopUp Form

    e.preventDefault();
  };

  const items = [
    { id: 1, name: "målning", title: "Målning" },
    { id: 2, name: "tapetsering", title: "Tapetsering" },
  ];

  const GroupingItems = [
    {id:1 , name:"Skåne", subItems:["Malmö"]},
    {id:2 , name:"Kronoberg", subItems:["Växjö", "Älmhult"]},

  ]

  return (
    <>
      <form onSubmit={handelSubmitForm}>
        <ThemeProvider theme={theme}>
          <Typography variant="h5" sx={CustomersFormHeader}>
            Hantverkare
          </Typography>
          <Card className="mt-2" sx={{ border: `${Colors.primary} solid 2px`, width:"85vw" }}>
            <CardContent className="flex justify-center">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CustomSelect
                    placeholder="Välj underkategori"
                    name="underCategory"
                    setvalue={setAllValues}
                    getvalue={allValues}
                    items={items}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    placeholder="Titel"
                    name="assignmentTitle"
                    setvalue={setAllValues}
                    getvalue={allValues}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    placeholder="Beskriv vad det är du vill ha hjälp med"
                    name="description"
                    setvalue={setAllValues}
                    getvalue={allValues}
                    multiline = {true}
                  />
                </Grid>
      
                <Grid item xs={12}>
                  <CustomListWithTextField
                    placeholder="Lista över delmoment som din förfrågan inkluderar (separera med Enter)"
                    name="subItems"
                    setvalue={setAllValues}
                    getvalue={allValues}
                    items={items}
                  />
                </Grid>
                <Grid item xs={12}>
                <CustomGroupedSelect
                    placeholder="Plats"
                    name="place"
                    setvalue={setAllValues}
                    getvalue={allValues}
                    items={GroupingItems}
                  />
                </Grid>
                <Grid item xs={12}>
                
                </Grid>
                
              </Grid>
            </CardContent>
          </Card>
        </ThemeProvider>
      </form>
    </>
  );
}
