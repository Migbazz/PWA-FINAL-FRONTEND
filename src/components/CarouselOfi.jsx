import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function CarouselOfi() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src="../../public/slider_1.png" /*1320px 583px*/
        alt="copa fifa"
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='../../public/slider_2.png'
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='../../public/slider_3.png'
        alt='...'
      >
      </MDBCarouselItem>
    </MDBCarousel>
  );
}