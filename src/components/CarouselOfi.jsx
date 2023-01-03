import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import slider1 from '../../public/slider_1.png'
import slider2 from '../../public/slider_2.png'
import slider3 from '../../public/slider_3.png'

export default function CarouselOfi() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={slider1} /*1320px 583px*/
        alt="copa fifa"
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={slider2}
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={slider3}
        alt='...'
      >
      </MDBCarouselItem>
    </MDBCarousel>
  );
}