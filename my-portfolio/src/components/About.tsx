import { Typography } from "antd";
import "./hero.css";

const { Text } = Typography;
const About = () => {
  return (
    <div className="about">
      <Text style={{ color: "white" ,fontSize:"28px", fontWeight:"bold"}}>About Me </Text>
    </div>
  );
};

export default About;
