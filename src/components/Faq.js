import React from 'react';
import AccordionWrapper from './AccordionWrapper';
import AccordionItem from './AccordionItem';
import './Accordion.css';
import './Styles.css';
import { Button } from 'react-bootstrap'
function Faq() {
  const data = [
    {
      "title": "What is SmiliNFT?",
      "description": "SmiliNFT is an ecosystem that includes an NFT collection and P2E game in Solana Blockchain."
    },
    {
      "title": "What do we do here?",
      "description": "We create a community where people can come together and spend time. People in this community will be able to benefit from the deals our project will make and generate passive income from the NFTs it has."
    },
    {
      "title": "What will we do?",
      "description": "We will step into the world of Meta with the development of our community. We will adapt our holders to this community and make the 3D Smiles we create interesting in the Meta world."
    },
    {
      "title": "What is supply & mint date?",
      "description": "The first collection includes 777 Smile NFT. The mint date is in May."
    },
    {
      "title": "What is $TEETH?",
      "description": "$TEETH is the core cryptocurrency of the SmiliNFT ecosystem. It is distributed to holders on a weekly basis."
    },
    {
      "title": "What is SmiliN Game?",
      "description": "SmiliN Game is a play-to-earn game. People will use $TEETH to play. The main purpose is to make people earn $SOL."
    },
    {
      "title": "How will we use funds?",
      "description": "Airdrops, game development, and advertisement."
    }
  ];
  return <div id="faq" className='faq'>

    <div className='faqss'>
      <div>

        <h1 className='road'>FAQs</h1>
        <bR></bR><bR></bR>

      </div>
      <AccordionWrapper>
        {data.map((item, index) => (
          <AccordionItem key={index} index={index} title={item.title} description={item.description} />
        ))}
      </AccordionWrapper>
    </div>
    <div className='faqbutton' >
      <Button className='mb-3' variant="dark" href="#home"> UP </Button>
    </div>
  </div >;

}

export default React.memo(Faq);
