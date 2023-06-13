import { NewArrivals } from "./components/newArrivals/NewArrivals";
import { Header } from "./components/ui/Header";
import { randomDate } from "./helpers/randomDate";
import { Footer } from "./components/ui/Footer";
import { CookiesAd } from "./components/ui/CookiesAd";

import "./app.css";
import { Outlet } from "react-router-dom";

export const App = () => {
  const date = randomDate();
  console.log(date);
  return (
    <>
      <div className="bg_color_orange">
        <div className="container px-5 text-center">
          <p className="text-light font_quicksand ">
            20% off all kidswear + free shipping when you spend $60 or more
          </p>
        </div>
      </div>
      <div className="container mx-5 px-5">
        <Header />

        <div className="container">
        <Outlet />
         
        </div>
      </div>

      <Footer />
      <CookiesAd />
      <div className="mt-5">
        <h1 className="font_gilda_display"> font_gilda_display</h1>
        <h1 className="font_francois_one"> font_francois_one</h1>
        <h1 className="font_quicksand"> font_quicksand</h1>
      </div>
    </>
  );
};
