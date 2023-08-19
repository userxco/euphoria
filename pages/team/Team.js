import React, { useState } from 'react'
import OurTeam from './OurTeam'
import Header from './Header'
import Navbar from './Navbar'
import NavMobile from '../team/NavMobile';
import Brands from './Brands';
import Quote from './Quote';
import Footer from './Footer';
import Copy from './Copy';

const Team = () => {
    const [navMobile, setNavMobile] = useState(true);
  return (
    <div>
        <Navbar />
        <Header setNavMobile={setNavMobile}/>
        {/* nav mobile */}
        <div className={`${navMobile ?   'right-0' : '-left-full'} absolute top-0 bottom-0 w-[340px] transition-all`}>
           <NavMobile setNavMobile={setNavMobile}/>
        </div>
        <Brands />
        <Quote />
        <OurTeam />
        <Footer />
        <Copy />
    </div>
  )
}

export default Team