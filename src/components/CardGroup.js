import React from 'react';
import { Button } from 'react-bootstrap'
import { SiDiscord, SiTwitter } from "react-icons/si";
import Typical from 'react-typical'
function CardGroups() {
    return (
        <div className='yazi' >

            <div >
                {/* w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center */}

                <h1 >Decentralized</h1>
                <h1 className='py-2'>
                    <span className='blue'>Trading</span> Protocol
                </h1>
                <p className='text-xl py-4'>
                    Guaranteed liquidity trading for millions of users and top Ethereum
                    applications.
                </p>
                <div >
                    <Button className="mb-2" variant="dark" type="submit">MAGIC EDEN</Button>
                   
                </div>
                <ul className='cardbutton'>
                    <li class="nav-itema" >
                        <a href="https://www.linkedin.com/in/bkabatas/" target="_blank" rel="noreferrer"><SiDiscord className="sharea" /></a>
                    </li>
                    <li class="nav-itema">
                        <a href="https://www.linkedin.com/in/bkabatas/" target="_blank" rel="noreferrer"><SiTwitter className="sharea" /></a>
                    </li>
                   
                </ul>

            </div>

            <p style={({ fontSize: '20px', fontFamily: 'Dela Gothic One', color: 'white', textAlign: 'center', marginTop: '5%' })}>Smilinft is {''}
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'aaaaaaaaaa.',
                        4000,
                        'bbbbbbbbbbbb.',
                        4000,
                        'cccccccccccccc.',
                        4000,
                        'ddddddddddd.',
                        5000
                    ]} >

                </Typical>

            </p>
        </div>

    )

}

export default React.memo(CardGroups);
