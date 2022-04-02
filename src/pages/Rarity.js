import React from 'react';
import Header from '../components/Header';
import './Styles.css';
function Rarity() {
    return <div id="rarity" className='rarity'>
         <Header></Header>
    </div>;
}

export default React.memo(Rarity);
