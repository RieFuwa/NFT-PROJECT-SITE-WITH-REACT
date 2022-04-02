import React from 'react';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import AboutCard from './AboutCard';
function Brand() {
  return (
    <div id="about" className='abouts'>
      <h1 className='road'>ABOUT</h1>
      <br></br>  
      <div className=' px-4 py-0'>
        <div>
          <p className='py-4 text-xl'>
            The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <AboutCard icon={<SiHiveBlockchain size={40} />} heading='Reliable, tamper-proof network' text='Use decentralization, trusted nodes, premium data, and
          cryptographic proofs to connect highly accurate and available
          data/APIs to any smart contract.' />
            <AboutCard icon={<SiFsecure size={40} />} heading='Seamless connection to any API' text='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.' />
            <AboutCard icon={<SiStrapi size={40} />} heading='Proven, ready-made solutions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.' />
            <AboutCard icon={<VscServerProcess size={40} />} heading='Secure off-chain computation' text='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.' />
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
