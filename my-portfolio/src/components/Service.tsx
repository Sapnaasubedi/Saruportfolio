import React from "react";
import { Space, Typography, Flex } from "antd";
import "./hero.css";
import { SwiperComponent } from "./swiper";

const { Text } = Typography;

const Service = () => {
  const testimonials = [
    {
      name: "Rose1",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjD7_2mqNjfUtcHH_rk-xkKxECZu7S4SpLiuk7cUhuDiK5Cl3IyiQdz2DhYPwlegxBbTdOfg57Eagf4QjCjPT3aLAlqu2eDMSMA-6uVk-9Xzx2QSVH7sf0y8SDEDbTFG2VR1q568BU7NdxzgoD_vOPcPRt5Sb-s_NfwgqnTvvc7LsKyvNyrZ56zcjwz/s16000/pexels-photo-265278.jpeg",
      bio: "This is a short bio about rose. This is a short bio about rose. This is a short bio about rose.",
    },
    {
      name: "Rose2",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjGl4fuo1tZOynCGQ0iR2z3Gl8nCX_MDx95xxUrnV69GHl73SacIdD_dk4szzAGBDYA1QEm_BENDY4BHfR_brzCjyyUcrnnAVSr3vXRda880kAxV2uFPu_n_mxsBqVV-UA4XwvS3yU3QCMnNCaH4geII40oDOZgG4ZiEhDq_uccNlfbDCSWGew6aet/s16000/pexels-photo-1656663.jpeg",
      bio: "This is a short bio about rose. This is a short bio about rose. This is a short bio about rose.",
    },
  ];
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
        <SwiperComponent>
        {testimonials.map((testimonial) => (
          <Flex>
            <Text>{testimonial.bio}</Text>
          </Flex>
        ))}
      </SwiperComponent>
      </Space>
    </Flex>
  );
};

export default Service;
