import GridComponent from 'component/GridComponent'
import React from 'react'


import category1 from "other/images/categoryImages/category1.jpg";
import category2 from "other/images/categoryImages/category2.png";
import category3 from "other/images/categoryImages/category3.jpg";
import category4 from "other/images/categoryImages/category4.png";
import category5 from "other/images/categoryImages/category5.png";
import category6 from "other/images/categoryImages/category6.jpg";
import category7 from "other/images/categoryImages/category7.png";
import category8 from "other/images/categoryImages/category8.jpg";
import category9 from "other/images/categoryImages/category9.jpg";
import category10 from "other/images/categoryImages/category10.jpg";
import category11 from "other/images/categoryImages/category11.jpg";
import category12 from "other/images/categoryImages/category12.jpg";
import category13 from "other/images/categoryImages/category13.jpg";
import category14 from "other/images/categoryImages/category14.jpg";
import { Grid } from '@mui/material';
import CardComponent from 'component/CardComponent';
import CraftsForm from 'form/CraftsForm';


export default function HomeSection4() {
    function CreateCategorys({ title, sub, img, id, path }) {
        return (
          <Grid key={id} item xs={12}  sx={{ display: "flex", justifyContent: "center" }}>
            {<CardComponent title={title} sub={sub} img={img} path={path} />}
          </Grid>
        );
      }


      const Categorysitems = [
        CreateCategorys({
          title: "Hantverkare",
          sub: "Målning, tapetsering, badrum",
          img: category1,
          id: 1,
          form: CraftsForm
        }),
        CreateCategorys({
          title: "Städning",
          sub: "Hemstädning, flyttstädning",
          img: category2,
          id: 2,
          form: CraftsForm
        }),
        CreateCategorys({
          title: "Mark & trädgård",
          sub: "Trädfällning, trädgårdsarbete-",
          img: category3,
          id: 3,
          path:"assignmentform"
        }),
        CreateCategorys({
          title: "Administration",
          sub: "Juridik, revision..",
          img: category4,
          id: 4,
          path:"assignmentform"
        }),
        CreateCategorys({
          title: "Hus & hem",
          sub: "Husbesiktning, värmepump",
          img: category5,
          id: 5,
          path:"assignmentform"
        }),
        CreateCategorys({
          title: "Flytt & transport",
          sub: "Flytthjälp, utlandstransport",
          img: category6,
          id: 6,
          path:"assignmentform"
        }),
        CreateCategorys({
          title: "Webb & IT",
          sub: "Webbdesign, programmering.",
          img: category7,
          id: 7,
          path:"assignmentform"
        }),
        CreateCategorys({
          title: "Tryckeri & reklam",
          sub: "Tryckeri & reklam",
          img: category8,
          id: 8,
          path:"assignmentform"
        }),
        CreateCategorys({
          title: "Foto & bild",
          sub: "Bildredigering, fotograf",
          img: category9,
          id: 9,
          path:"assignmentform"
        }),
        CreateCategorys({
          title: "Catering & event",
          sub: "Musiker, övrigt",
          img: category10,
          id: 10,
          path:"assignmentform"
        }),
        CreateCategorys({
          title: "Utbildning",
          sub: "Ledarskapsutbildning, språk_",
          img: category11,
          id: 11,
          path:"assignmentform"
        }),
        CreateCategorys({
          title: "Hälsovård",
          sub: "Estetisk kirurgi, SPA",
          img: category12,
          id: 12,
          path:"assignmentform"
        }),
        CreateCategorys({
          title: "Bil, båt & motor",
          sub: "Bilmekaniker, bilglas..",
          img: category13,
          id: 13,
          path:"assignmentform"
        }),
        CreateCategorys({
          title: "Övriga tjänster",
          sub: "Övrigt, vetrinär..",
          img: category14,
          id: 14,
          path:"assignmentform"
        }),
      ];
    
  return (
    <GridComponent items={Categorysitems} />
  )
}
