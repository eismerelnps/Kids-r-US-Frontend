import React from "react";
import { NavLink } from "react-router-dom";

const imagesSRC = require.context('../../../assets')

export const CardCircle = ({ id, title, navTo }) => {
  return (
    <div className=" card  border-0 mx-xl-5">
      <div className="card-body text-center">
     
            <NavLink
              className={({ isActive }) =>
                "font_francois_one color_mate_blue text-decoration-none" +
                (isActive ? "actives text-decoration-none" : "")
              }
              to={navTo}
            >
              <img
                src={`.${imagesSRC(`./main/navbar/${id}.png`)}`}
                className="card-img-top"
                alt={title}
              />

              {title}
            </NavLink>
          </div>
       
    </div>
  );
};
