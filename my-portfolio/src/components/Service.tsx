import React from "react";
import { Space, Typography, Flex, Card, Image } from "antd";
import "./hero.css";
import { SwiperComponent } from "./swiper";

const { Text } = Typography;

const Service = () => {
  const testimonials = [
    {
      name: "Responsive Design",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjD7_2mqNjfUtcHH_rk-xkKxECZu7S4SpLiuk7cUhuDiK5Cl3IyiQdz2DhYPwlegxBbTdOfg57Eagf4QjCjPT3aLAlqu2eDMSMA-6uVk-9Xzx2QSVH7sf0y8SDEDbTFG2VR1q568BU7NdxzgoD_vOPcPRt5Sb-s_NfwgqnTvvc7LsKyvNyrZ56zcjwz/s16000/pexels-photo-265278.jpeg",
      bio: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      name: "Backend Development",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjGl4fuo1tZOynCGQ0iR2z3Gl8nCX_MDx95xxUrnV69GHl73SacIdD_dk4szzAGBDYA1QEm_BENDY4BHfR_brzCjyyUcrnnAVSr3vXRda880kAxV2uFPu_n_mxsBqVV-UA4XwvS3yU3QCMnNCaH4geII40oDOZgG4ZiEhDq_uccNlfbDCSWGew6aet/s16000/pexels-photo-1656663.jpeg",
      bio: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      name: "Backend Development",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjGl4fuo1tZOynCGQ0iR2z3Gl8nCX_MDx95xxUrnV69GHl73SacIdD_dk4szzAGBDYA1QEm_BENDY4BHfR_brzCjyyUcrnnAVSr3vXRda880kAxV2uFPu_n_mxsBqVV-UA4XwvS3yU3QCMnNCaH4geII40oDOZgG4ZiEhDq_uccNlfbDCSWGew6aet/s16000/pexels-photo-1656663.jpeg",
      bio: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      name: "Seo Optimization",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjGl4fuo1tZOynCGQ0iR2z3Gl8nCX_MDx95xxUrnV69GHl73SacIdD_dk4szzAGBDYA1QEm_BENDY4BHfR_brzCjyyUcrnnAVSr3vXRda880kAxV2uFPu_n_mxsBqVV-UA4XwvS3yU3QCMnNCaH4geII40oDOZgG4ZiEhDq_uccNlfbDCSWGew6aet/s16000/pexels-photo-1656663.jpeg",
      bio: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      name: "Fast Communication",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjGl4fuo1tZOynCGQ0iR2z3Gl8nCX_MDx95xxUrnV69GHl73SacIdD_dk4szzAGBDYA1QEm_BENDY4BHfR_brzCjyyUcrnnAVSr3vXRda880kAxV2uFPu_n_mxsBqVV-UA4XwvS3yU3QCMnNCaH4geII40oDOZgG4ZiEhDq_uccNlfbDCSWGew6aet/s16000/pexels-photo-1656663.jpeg",
      bio: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      name: "Market Analysis",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjGl4fuo1tZOynCGQ0iR2z3Gl8nCX_MDx95xxUrnV69GHl73SacIdD_dk4szzAGBDYA1QEm_BENDY4BHfR_brzCjyyUcrnnAVSr3vXRda880kAxV2uFPu_n_mxsBqVV-UA4XwvS3yU3QCMnNCaH4geII40oDOZgG4ZiEhDq_uccNlfbDCSWGew6aet/s16000/pexels-photo-1656663.jpeg",
      bio: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore.",
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
        <Space align="center" size="large" style={{ maxWidth: "1220px" }} ><SwiperComponent>
          {testimonials.map((testimonial) => (
            <Card hoverable style={{background:"black" , border:"none"}}>
              <Space direction="vertical" align="center" size="large" style={{padding:"25px"}}>
                <Image height={50} src={testimonial.image} />
                <Text style={{ color: "white" , fontSize:"20px"}} strong>{testimonial.name}</Text>
                <Text style={{ color: "white" , textAlign:"center"}}>{testimonial.bio}</Text>
              </Space>
            </Card>
          ))}</SwiperComponent></Space>
        
      </Space>
    </Flex>
  );
};

export default Service;
