// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styled from "styled-components";
import { useState, useEffect } from "react";

const CardSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  const carouselSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const images = [
    "assets/pharm1.png",
    "assets/pharm2.png",
    "assets/pharm3.png",
    "assets/pharm4.png",
    "assets/pharm1.png",
    "assets/pharm2.png",
    "assets/pharm3.png",
    "assets/pharm4.png",
  ];

  //making the slider responsive

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    };
    // Set initial value based on current screen size
    handleResize();

    // Add event listener to handle screen size changes
    window.addEventListener("resize", handleResize);
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Div>
      <Slider {...carouselSettings} className="slid">
        {images.map((images, index) => (
          <div key={index}>
            <img src={images} alt={`Image ${index + 1}`} className="myimage" />
          </div>
        ))}
      </Slider>
    </Div>
  );
};

export default CardSlider;

const Div = Styled.div`
border:none;
box-sizing:border-box;

.slid{
  border:none;
  margin:0;
  padding: 0;
}

.slick-slide{
  margin:0;
  padding:0;
  border:none;
}


.myimage{
  object-fit:cover;
  max-width:100%;
  border:none;
  height:400px;

   }




}

`;
