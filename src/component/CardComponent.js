import React from "react";
import "component/CardComponent.css";

import { Link } from "react-router-dom";
import { Colors } from "other/customizeStyles";
import ModalComponent from "component/ModalComponent";

import CraftsForm from "form/CraftsForm";
 

export default function CardComponent({ title, sub, img, form }) {
  return (
    
      <div className="CardMainDiv" style={{ zIndex: 1, width:"100%" }}>
        <figure className="imghvr-slide-right">
          <img src={img} id="cardImage" alt="example-image" />
          <figcaption>
            <h1 className="CardTitel" style={{ color: Colors.primary }}>
              {title}
            </h1>
            <p className="Cardsub">{sub}</p>
            <div style={{textAlign: "right" }}>
              <ModalComponent text="Gå vidare" icon="" CustomizeForm={CraftsForm}/>
            </div>
          </figcaption>
        </figure>
      </div>
    
  );
}
