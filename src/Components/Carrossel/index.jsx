import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.scss";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";




//imagens

import Perfil1 from '../../stylesheet/assents/perfil1.jpg'
import Image1 from '../../stylesheet/assents/tattoo1.jpg'
import Image2 from '../../stylesheet/assents/tattoo2.jpg'
import Image3 from '../../stylesheet/assents/tattoo3.jpg'
import Image4 from '../../stylesheet/assents/tattoo4.jpg'
import Image5 from '../../stylesheet/assents/tattoo5.jpg'
import Image6 from '../../stylesheet/assents/tattoo6.jpg'
import Perfil2 from '../../stylesheet/assents/perfil2.jpg'
import Perfil3 from '../../stylesheet/assents/perfil3.jpg'
import Perfil4 from '../../stylesheet/assents/perfil4.jpg'
import Image7 from '../../stylesheet/assents/tattoo7.jpg'
import Image8 from '../../stylesheet/assents/tattoo8.jpg'
import Image9 from '../../stylesheet/assents/tattoo9.jpg'
import Image10 from '../../stylesheet/assents/tattoo10.jpg'
import Image11 from '../../stylesheet/assents/tattoo11.jpg'
import Image12 from '../../stylesheet/assents/tattoo12.jpg'
import Image13 from '../../stylesheet/assents/tattoo13.jpg'
import Image14 from '../../stylesheet/assents/tattoo14.jpg'
import Image15 from '../../stylesheet/assents/tattoo15.jpg'
import Image16 from '../../stylesheet/assents/tattoo16.jpg'
import Back from '../../stylesheet/assents/cruz.png'

export default function SliderComponent() {
  return (
    <div  className="carrossel">
    <img className="back-slid" src={Back}/>
      <Swiper
       slidesPerView={1}
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
           <SwiperSlide><img className="primary" src={Perfil1} />
      <img className="secundary1" src={Image1} />
      <img  className="secundary2" src={Image2}/>
      <img className="tertiary1" src={Image3} />
      <img  className="tertiary2" src={Image4}/></SwiperSlide>
       
      <SwiperSlide><img className="primary" src={Perfil2} />
      <img className="secundary1" src={Image5} />
      <img  className="secundary2" src={Image6}/>
      <img className="tertiary1" src={Image7} />
      <img  className="tertiary2" src={Image8}/></SwiperSlide>

      <SwiperSlide><img className="primary" src={Perfil3} />
      <img className="secundary1" src={Image9} />
      <img  className="secundary2" src={Image10}/>
      <img className="tertiary1" src={Image11} />
      <img  className="tertiary2" src={Image12}/></SwiperSlide>

      <SwiperSlide><img className="primary" src={Perfil4} />
      <img className="secundary1" src={Image13} />
      <img  className="secundary2" src={Image14}/>
      <img className="tertiary1" src={Image16} />
      <img  className="tertiary2" src={Image15}/></SwiperSlide>
        
        
      </Swiper>
    </div>
  );
}



