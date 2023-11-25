
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { useLoaderData } from "react-router-dom";


const Banner = () => {

   const bannerData = useLoaderData()
   console.log(bannerData)
  
  
    return (
      
       <div>
     
     <Carousel>
        {bannerData &&
          bannerData.map((item, index) => (
            <div key={`carousel-item${index + 1}`} style={{ position: 'relative', height: '530px' }}>
              <img src={item.image} alt={`Item ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div className="legend-container" style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', padding: '10px' }}>
                <p className="legend">{`Topics ${index + 1}`}</p>
              </div>
            </div>
          ))}
      </Carousel>

         
       </div>
  
    );
};

export default Banner;