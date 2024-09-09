import React from "react";
import { Space, Typography,  Flex } from "antd";
import "./hero.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const { Text } = Typography;

const Service = () => {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  };
  return (
    <Flex justify="center" style={{ margin: "50px" }}>
      <Space direction="vertical" size="large" align="center">
        <Text
          style={{
            color: "white",
            fontSize: "30px",
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          My Services <div className="gradient-divider"></div>
        </Text>
      </Space>
      <div className="wrapper">
      <h2>Slick Carousel Example</h2>
      <Slider {...settings} className="carousel">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i}>
            <div className="card">
              <div className="card-header">
                <img src={`https://lorempixel.com/200/200/abstract/${i}`} alt={`Slide ${i}`} />
              </div>
              <div className="card-body">
                <div className="card-content">
                  <div className="card-title">This is the {i} slider</div>
                  <div className="card-text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </Flex>
  );
};

export default Service;
