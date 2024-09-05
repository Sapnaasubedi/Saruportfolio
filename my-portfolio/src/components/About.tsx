import { Space, Typography, Image, Flex, Divider } from "antd";
import "./hero.css";
import AboutImage from "../assets/about.jpg";

const { Text } = Typography;
const About = () => {
  return (
    <Flex justify="center" style={{ margin: "50px" }}>
      <Space direction="vertical" size="large" align="center">
        <Text style={{ color: "white", fontSize: "30px", fontWeight: "bold" ,alignSelf: "center"}}>
          About Me
          <div className="gradient-divider"></div>
          </Text>
        
        <Space direction="horizontal" size={50}>
          <div className="about">
            <Image width={550} src={AboutImage} />
          </div>

          <Space direction="vertical" style={{maxWidth: "600px"}}>
            <Text style={{ color: "white", fontSize: "30px", fontWeight: "bold" }}>I am  <span style={{ color: "#dbd56e" }}>Saraswati Niroula</span></Text>
            <Text style={{ color: "#c3c3c3", fontSize: "18px", letterSpacing: "5px" }}>BACKEND DEVELOPER</Text>

            <Text style={{ color: "#c5c5c5", fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation laboris nisi ut
              aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation laboris nisi ut aliquip ex ea commodo
              consequat.
            </Text>
          </Space>
        </Space>
      </Space>
    </Flex>
  );
};

export default About;
