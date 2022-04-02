import React from 'react'
import { Card, Button } from 'react-bootstrap'
import m from '../assets/m.png'


function Teams() {

    return (
        <div id="teampage" className='teamA'>
            <h1 className='road'>TEAM</h1>
            <br></br> <br></br> <br></br>
            <ul>
                <li className='teams'>
                    <Card style={{ width: '16rem', backgroundColor: 'transparent' }}>
                        <Card.Img variant="top" src={m} />
                        <Card.Body style={{ backgroundColor: 'transparent' }}>
                            <Card.Title className='text'>Card Title</Card.Title>
                            <Button className='mb-2' variant="dark">Twitter</Button>
                        </Card.Body>
                    </Card>
                </li>
                <li className='teams'>
                    <Card style={{ width: '16rem', backgroundColor: 'transparent' }}>
                        <Card.Img variant="top" src={m} />
                        <Card.Body style={{ backgroundColor: 'transparent' }}>
                            <Card.Title>Card Title</Card.Title>
                            <Button className='mb-2' variant="dark">Twitter</Button>
                        </Card.Body>
                    </Card>
                </li>
                <li className='teams'>
                    <Card style={{ width: '16rem', backgroundColor: 'transparent' }}>
                        <Card.Img variant="top" src={m} />
                        <Card.Body style={{ backgroundColor: 'transparent' }}>
                            <Card.Title>Card Title</Card.Title>
                            <Button className='mb-2' variant="dark">Twitter</Button>
                        </Card.Body>
                    </Card>
                </li>
                <li className='teams'>
                    <Card style={{ width: '16rem', backgroundColor: 'transparent' }}>
                        <Card.Img variant="top" src={m} />
                        <Card.Body style={{ backgroundColor: 'transparent' }}>
                            <Card.Title>Card Title</Card.Title>
                            <Button className='mb-2' variant="dark">Twitter</Button>
                        </Card.Body>
                    </Card>
                </li>
                <li className='teams'>
                    <Card style={{ width: '16rem', backgroundColor: 'transparent' }}>
                        <Card.Img variant="top" src={m} />
                        <Card.Body style={{ backgroundColor: 'transparent' }}>
                            <Card.Title>Card Title</Card.Title>
                            <Button className='mb-2' variant="dark">Twitter</Button>
                        </Card.Body>
                    </Card>
                </li>
                <li className='teams'>
                    <Card style={{ width: '16rem', backgroundColor: 'transparent' }}>
                        <Card.Img variant="top" src={m} />
                        <Card.Body style={{ backgroundColor: 'transparent' }}>
                            <Card.Title>Card Title</Card.Title>
                            <Button className='mb-2' variant="dark">Twitter</Button>
                        </Card.Body>
                    </Card>
                </li>
            </ul>


        </div>
    )



};

export default Teams