import React, { useState } from "react";
import { Reviews } from "./Reviews";
import { AddInformation } from "./AddInformation";
import { ProductList } from "../../ProductList";

export const ProductScreenFooter = ({
  title,
  category,
  description,
  information,
  reviews,
}) => {
  const [visibleSection, setVisibleSection] = useState("one");

  const handleSetVisible = (section) => {
    if (visibleSection === section) {
      setVisibleSection(section); // Ocultar la sección si se hace clic nuevamente en el botón de la sección actualmente visible
    } else {
      setVisibleSection(section); // Mostrar la sección seleccionada
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="p-4">
          <div>
            <button
              type="button"
              className={`btn border-0 ${
                visibleSection === "one" ? "active" : ""
              }`}
              onClick={() => handleSetVisible("one")}
            >
              <h4 className="font_francois_one color_mate_blue">DESCRIPTION</h4>
            </button>
          </div>

          {visibleSection === "one" && (
            <img
              src={`${process.env.PUBLIC_URL}/assets/main/home-8.png`}
              className="img mb-5"
              alt="page_mark"
            />
          )}
        </div>
        <div className="p-4">
          <div>
            <button
              type="button"
              className={`btn border-0 ${
                visibleSection === "two" ? "active" : ""
              }`}
              onClick={() => handleSetVisible("two")}
            >
              <h4 className="font_francois_one color_mate_blue">
                ADDITIONAL INFORMATION
              </h4>
            </button>
          </div>

          {visibleSection === "two" && (
            <img
              src={`${process.env.PUBLIC_URL}/assets/main/home-8.png`}
              className="img mb-5"
              alt="page_mark"
            />
          )}
        </div>
        <div className="p-4">
          <div>
            <button
              type="button"
              className={`btn border-0 ${
                visibleSection === "three" ? "active" : ""
              }`}
              onClick={() => handleSetVisible("three")}
            >
              <h4 className="font_francois_one color_mate_blue">
                REVIEWS ({reviews.length})
              </h4>
            </button>
          </div>

          {visibleSection === "three" && (
            <img
              src={`${process.env.PUBLIC_URL}/assets/main/home-8.png`}
              className="img mb-5"
              alt="page_mark"
            />
          )}
        </div>
      </div>

      <div className="mb-5">

      
      {visibleSection === "one" && (
        <p className="text-start text-dark mb-3 font_quicksand">
          {description}
        </p>
      )}

      {visibleSection === "two" && <AddInformation information={information} />}

      {visibleSection === "three" && (
        <Reviews title={title} reviews={reviews} />
      )}
      </div>


      <div className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
        <h4 className="font_francois_one color_mate_blue">RELATED PRODUCTS</h4>
        <img src={`${process.env.PUBLIC_URL}/assets/main/home-8.png`} className="img" alt="" />
      </div>

      <div className="container p-5">
        <ProductList 
        category={category} 
        amount={4}
        size={'col-xl-3'}
        />
      </div>

    </div>
  );
};
