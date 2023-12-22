import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/slider_idego.jpg'
import img2 from '../img/SLIDER-DECO.jpg'
function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img width={1920} height={700} alt="900x500" src={img1} />
            </Carousel.Item>

            <Carousel.Item>
            <img width={1920} height={700} alt="900x500" src={img2} />
       </Carousel.Item>

       <Carousel.Item>
            <img width={1920} height={700} alt="900x500" src={img2} />
       </Carousel.Item>

    </Carousel>
  );
}



export default Slider