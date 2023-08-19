import React, { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import NavMobile from './NavMobile';
import Hero from './Hero';
import OurOffices from './OurOffices';
import SendMessage from './SendMessage';
import Footer from './Footer';
import Copy from './Copy';


const Gift = () => {
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
      <SendMessage />
      <OurOffices />
      <Footer />
      <Copy />
    </div>
  )
}



export default Gift