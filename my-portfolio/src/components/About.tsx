import { Space, Typography, Image, Flex } from "antd";
import "./hero.css";
import AboutImage from "../assets/about.jpg";

const { Text } = Typography;
const About = () => {
  return (
    <Flex justify="center">
        <Space direction="vertical"><Text style={{ color: "white", fontSize: "28px", fontWeight: "bold" }}>
        About Me
      </Text>
      <Space direction="horizontal">
      <div className="about"> <Image width={200} src={AboutImage} /></div> 
      </Space></Space>
      
    </Flex>
  );
};

export default About;
