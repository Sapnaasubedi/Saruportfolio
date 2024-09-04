import { Space, Typography, Image, Flex, Button } from "antd";
import "./hero.css";
import AboutImage from "../assets/about.jpg";

const { Text } = Typography;
const About = () => {
  return (
    <Flex justify="center">
      <Space direction="vertical">
        <Text style={{ color: "white", fontSize: "28px", fontWeight: "bold" }}>
          About Me
        </Text>
        <Space direction="horizontal">
          <div className="about">
            <Image width={300} src={AboutImage} />
          </div>

          <Space>
            <Text style={{ color: "white", fontSize: "18px" }}>I am Saraswati Niroula</Text>
            <Text style={{ color: "white", fontSize: "18px" }}>Backend Developer</Text>

            <Text>
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
