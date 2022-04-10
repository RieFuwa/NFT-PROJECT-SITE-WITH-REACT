import React from 'react';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { FaShoppingCart, FaHandHoldingUsd, FaParachuteBox, FaLock } from 'react-icons/fa';
import { VscServerProcess } from 'react-icons/vsc';
import AboutCard from './AboutCard';
import marketplaceicon from '../assets/marketplace.png'

function Brand() {
  return (
    <div id="about" className='abouts'>
      <h1 className='road'>To Be Participate</h1>
      <br></br>  
      <div className=' px-4 py-0'>
        <div>
          <p className='py-4 text-xl'>
          How to get involved in the SmiliNFT ecosystem and everything that awaits you once you get involved.
          </p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <AboutCard icon={<FaShoppingCart size={40} />}  heading='How To Have' text='If you missed the mint day, you can buy a Smile directly from the popular secondary markets. If you can find people willing to sell :)' />
            <AboutCard icon={<FaHandHoldingUsd size={40} />} heading='Holder Benefits' text='The SmiliNFT ecosystem is a pro-user ecosystem and spends all of its earnings on self-improvement. Income and promotions from all deals made are distributed to holders.' />
            <AboutCard icon={<FaParachuteBox size={40} />} heading='Airdrops' text='Every wallet that contains any item from the SmiliNFT collection earns $TEETH per week in direct proportion to the number of Smiles it holds. In addition, we should not ignore the many $SOL prizes we will distribute to the holders.' />
            <AboutCard icon={<FaLock size={40} />} heading='Staking' text='The stake application   locks your Smile NFT for a while. During the staking period, it is not impossible for you to sell the NFT and the NFT remains yours during this period. Each holder who contributes to the Staking application is rewarded with extra airdrops.' />
          </div>
        </div>
        <a style={({ fontSize: '18px', fontFamily: 'Dela Gothic One', marginTop:'5%'})} href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          SmiliNft Whitepaper
        </a>
      </div>
    </div>
  )
}
export default React.memo(Brand);
