import React from 'react'
import { Card, Button } from 'react-bootstrap'
import iclal from '../assets/iclal.png'
import omer from '../assets/ömer.jpeg'
import ali from '../assets/ali.png'
import mert from '../assets/mert.jpeg'
import hilal from '../assets/hilal.png'
import emirhan from '../assets/emirhan.png'





function Teams() {

    return (
        <div id="teampage" className='teamA'>
            <h1 className='road'>TEAM</h1>
            <br></br> <br></br> <br></br>
            <ul>
                <li className='teams'>
                    <Card style={{ width: '16rem', backgroundColor: 'transparent' }}>
                        <Card.Img variant="top" src={omer} />
                        <Card.Body style={{ backgroundColor: 'transparent' }}>
                            <Card.Title className='text'>omaraga</Card.Title>
                        </Card.Body>
                    </Card>
                </li>
                <li className='teams'>
                    <Card style={{ width: '16rem', backgroundColor: 'transparent' }}>
                        <Card.Img variant="top" src={emirhan} />
                        <Card.Body style={{ backgroundColor: 'transparent' }}>
                            <Card.Title>Nawa</Card.Title>
                        </Card.Body>
                    </Card>
                </li>
                <li className='teams'>
                    <Card style={{ width: '16rem', backgroundColor: 'transparent' }}>
                        <Card.Img variant="top" src={ali} />
                        <Card.Body style={{ backgroundColor: 'transparent' }}>
                            <Card.Title>MrProjector</Card.Title>
                        </Card.Body>
                    </Card>
                </li>
                <li className='teams'>
                    <Card style={{ width: '16rem', backgroundColor: 'transparent' }}>
                        <Card.Img variant="top" src={hilal} />
                        <Card.Body style={{ backgroundColor: 'transparent' }}>
                            <Card.Title>hilla</Card.Title>
                        </Card.Body>
                    </Card>
                </li>
                <li className='teams'>
                    <Card style={{ width: '16rem', backgroundColor: 'transparent' }}>
                        <Card.Img variant="top" src={iclal} />
                        <Card.Body style={{ backgroundColor: 'transparent' }}>
                            <Card.Title>icos</Card.Title>
                        </Card.Body>
                    </Card>
                </li>
                <li className='teams'>
                    <Card style={{ width: '16rem', backgroundColor: 'transparent' }}>
                        <Card.Img variant="top" src={mert} />
                        <Card.Body style={{ backgroundColor: 'transparent' }}>
                            <Card.Title>Toks</Card.Title>
                        </Card.Body>
                    </Card>
                </li>
            </ul>


        </div>
    )



};

export default Teams