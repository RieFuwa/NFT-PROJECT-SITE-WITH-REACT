import React from 'react';
import { Button } from 'react-bootstrap'
import { SiDiscord, SiTwitter } from "react-icons/si";
import Typical from 'react-typical'
function CardGroups() {
    return (
        <div className='yazi' >

            <div >
                {/* w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center */}

                <h1 >Powered by <span className='blue'>$TEETH</span> </h1>
                <h1 className='py-2'>
                    SMILINFT
                </h1>
                <p className='text-m py-4'>
                    on Solana Blockchain
                </p>
                <div >
                    <Button className="mb-2" variant="dark" type="submit" href="https://www.magiceden.io/marketplace/smilinft">MAGIC EDEN</Button>
                    <Button className="mb-2" variant="dark" type="submit" href="https://solanart.io/collections/smilinft">SOLANART</Button>
                   
                </div>
                <ul className='cardbutton'>
                    <li class="nav-itema" >
                        <a href="https://www.twitter.com/nftsmilin/" target="_blank" rel="noreferrer"><SiDiscord className="sharea" /></a>
                    </li>
                    <li class="nav-itema">
                        <a href="https://www.twitter.com/nftsmilin/" target="_blank" rel="noreferrer"><SiTwitter className="sharea" /></a>
                    </li>
                   
                </ul>

            </div>

            <p style={({ fontSize: '20px', fontFamily: 'Dela Gothic One', color: 'white', textAlign: 'center', marginTop: '5%' })}>SmiliNFT to {''}
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'participate.',
                        4000,
                        'stake.',
                        4000,
                        'earn.',
                        4000,
                        'be different.',
                        5000
                    ]} >
                </Typical>

            </p>
        </div>

    )

}

export default React.memo(CardGroups);
