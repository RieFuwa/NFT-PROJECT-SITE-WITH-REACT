import React from 'react';
import Brand from '../components/Brand.js';
import CardGroup from '../components/CardGroup.js';
import Header from '../components/Header.js'
import MiniCard from '../components/MiniCard.js';
import Teams from '../components/Teams.js';
import Footer from '../components/Footer.js';
import Faq from '../components/Faq.js';



function Home() {
  return <div className='home'>
    <Header></Header>
    <CardGroup></CardGroup>
    <Brand></Brand>
    <MiniCard></MiniCard>
    <Teams></Teams>
     <Faq></Faq>
    <Footer></Footer>
  </div>;
}

export default React.memo(Home);
