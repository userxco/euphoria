import React, { useState } from "react";
import Header from './components/Header.jsx';
import NavMobile from './components/NavMobile.jsx';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import BestSeller from "./components/BestSeller.jsx";
import Brands from "./components/Brands.jsx";
import Discount from "./components/Discount.jsx";
import Reviews from "./components/Reviews.jsx";
import Stranger from "./components/Stranger.jsx";
import Update from "./components/Update.jsx";

import ForYou from "./components/ForYou.jsx";
import Ring from "./components/Ring.jsx";
import Footer from "./components/Footer.jsx";
import Copy from "./components/Copy.jsx";




function App() {
  const [navMobile, setNavMobile] = useState(true);
  return (
    <div>
      <Navbar />
      <Header setNavMobile={setNavMobile}/>
      {/* nav mobile */}
      <div className={`${navMobile ?   'right-0' : '-left-full'} absolute top-0 bottom-0 w-[340px] transition-all`}>
        <NavMobile setNavMobile={setNavMobile}/>
      </div>
      <Hero />
      <BestSeller />
      <Brands />
      <Discount />
      <Reviews />
      <Stranger />
      <Update />

      <Ring />
      <ForYou />
      <Footer />
      <Copy />  
    </div>
  );
}

export default App;
