import React from 'react';
import Blink from 'react-blink-text';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiDiscord } from "react-icons/si";

function MiniCard() {
    return (
        <div id="roadmap" className='roadmapA'>
            <h1 className='road'>ROADMAP</h1>
            <br></br> <br></br> <br></br>
            <VerticalTimeline className='roadmapback'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<SiDiscord />}
                >
                    <h3 className="vertical-timeline-element-title">Community Giveaways</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={ {color : 'rgb(33, 150, 243)'} }>The Start</h4>
                    <p className='asdasd'>
                    Distributing Free NFT, SOL and WL to community members via Twitter and Discord.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<SiDiscord />}
                >
                    <h3 className="vertical-timeline-element-title">Sneak Peeks</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={ {color : 'rgb(33, 150, 243)'} }>The Start</h4>
                    <p className='asdasd'>
                    Sharing unique pieces of the collection with the community.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<SiDiscord />}
                >
                    <h3 className="vertical-timeline-element-title">Introduction Of Our P2E Game</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={ {color : 'rgb(33, 150, 243)'} }>The Start</h4>
                    <p className='asdasd'>
                    Introducing the game for monetization of our ecosystem.
                    </p>
                </VerticalTimelineElement> 
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SiDiscord />}
                >
                    <h3 className="vertical-timeline-element-title">Open Discord For Public</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={ {color : 'rgb(233, 30, 99)'} }>The Mint</h4>
                    <p>
                    Making our Discord server public.
                    </p>
                </VerticalTimelineElement>    
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SiDiscord />}
                >
                    <h3 className="vertical-timeline-element-title">Listing On Secondary Marketplaces</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={ {color : 'rgb(233, 30, 99)'} }>The Mint</h4>
                    <p>
                    Publishing in major marketplaces on the SOLANA blockchain network immediately after the end of Mint
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SiDiscord />}
                >
                    <h3 className="vertical-timeline-element-title">Implementation Of Rarity Tools</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={ {color : 'rgb(233, 30, 99)'} }>The Mint</h4>
                    <p>
                    Publish systems where you can see the rarity rate of the NFTs you have or want to buy in our collection.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SiDiscord />}
                >
                    <h3 className="vertical-timeline-element-title">Holders Verification</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={ {color : 'rgb(233, 30, 99)'} }>The Mint</h4>
                    <p>
                    Identifying our holders, creating a special environment for them and getting them ready for airdrops.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(0, 255, 128)', color: '#fff' }}
                    icon={<SiDiscord />}
                >
                    <h3 className="vertical-timeline-element-title">Publishing Our P2E Game</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={ {color : 'rgb(0, 255, 128)'} }>After Mint</h4>
                    <p>
                    To publish the latest version of our game in a way that everyone can access.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(0, 255, 128)', color: '#fff' }}
                    icon={<SiDiscord />}
                >
                    <h3 className="vertical-timeline-element-title">Airdropping <span style={ {color : '#b9f2ff'} }>"TEETH"</span> To Holders</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={ {color : 'rgb(0, 255, 128)'} }>After Mint</h4>
                    <p>
                    Distributing TEETH to our holders that they can use in our game and ecosystem.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(0, 255, 128)', color: '#fff' }}
                    icon={<SiDiscord />}
                >
                    <h3 className="vertical-timeline-element-title">Creating 3D Smiles</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={ {color : 'rgb(0, 255, 128)'} }>After Mint</h4>
                    <p>
                    Creating more advanced 3D Smiles as a continuation of the first collection
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(0, 255, 128)', color: '#fff' }}
                    icon={<SiDiscord />}
                >
                    <h3 className="vertical-timeline-element-title">Roadmap 2.0</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={ {color : 'rgb(0, 255, 128)'} }>After Mint</h4>
                    <p>
                    <Blink color='blue' text='Blinking to the future.' fontSize='20'></Blink>
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )

}

export default React.memo(MiniCard);
