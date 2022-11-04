import { Grid, Typography } from "@mui/material";
import React from "react";
import { Colors, Fonts } from "other/customizeStyles";
import { FaHandsHelping } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiHiking } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";

export default function HomeSection3() {
  function CreateCompanyInf0({ id, icon, greade, title }) {
    return (
      <Grid
        key={id}
        item
        xs={12}
        sm={6}
        lg={3}
      >
        <div
          className="flex justify-center"
          style={{ width: "5", margin: "1rem 0" }}
        >
          {icon}
        </div>
        <h2
          style={{
            textAlign:"center",
            color: "white",
            fontSize: "2rem",
            fontFamily: Fonts.primary,
          }}
        >
          {greade}
        </h2>
        <Typography
          sx={{
            fontSize: { xs: "1.3rem", md:"1.8rem" },
            textAlign:"center",
            color: "white",

            margin: "0rem 0 3rem 0",
            fontFamily: Fonts.primary,
          }}
        >
          {title}
        </Typography>
      </Grid>
    );
  }

  const CompanyInfo = [
    CreateCompanyInf0({
      id: 1,
      icon: <AiOutlineFundProjectionScreen color={Colors.primary} size={75} />,
      greade: 1000,
      title: "Projekt klart",
    }),
    CreateCompanyInf0({
      id: 2,
      icon: <FaHandsHelping color={Colors.primary} size={75} />,
      greade: 950,
      title: "Nöjda kunder",
    }),
    CreateCompanyInf0({
      id: 3,
      icon: <GiHiking color={Colors.primary} size={75} />,
      greade: 10,
      title: "År av erfarenhet",
    }),
    CreateCompanyInf0({
      id: 4,
      icon: <IoIosPeople color={Colors.primary} size={75} />,
      greade: 25,
      title: "Människor som arbetar",
    }),
  ];
  return (
    <Grid
      className="setionCutomer"
      container
      spacing={0}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {CompanyInfo}
    </Grid>
  );
}
