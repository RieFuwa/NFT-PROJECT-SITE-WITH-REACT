import React from 'react';
import AccordionWrapper from './AccordionWrapper';
import AccordionItem from './AccordionItem';
import './Accordion.css';
import './Styles.css';
import { Button } from 'react-bootstrap'
function Faq() {
  const data = [
    {
      "title": "Item 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat nibh. Mauris suscipit arcu at fermentum convallis. Pellentesque consectetur mi in felis maximus posuere."
    },
    {
      "title": "Item 2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie tellus a maximus tempus. Duis vel leo iaculis, porttitor erat et, posuere erat. Ut blandit."
    },
    {
      "title": "Item 3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, nibh imperdiet tempus pharetra, arcu risus aliquet arcu, a auctor ex lacus efficitur purus. Morbi."
    },
    {
      "title": "Item 4",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
    },
    {
      "title": "Item 5",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
    },
    {
      "title": "Item 6",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
    },
    {
      "title": "Item 7",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
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
