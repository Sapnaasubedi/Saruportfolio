import { Button, Space } from "antd";
import "./hero.css";
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoTwitter } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="container">
      <Space direction="vertical" size="large">
        <h4 style={{ color: "white", textAlign: "center" }}>
          WELCOME TO MY WEBSITE
        </h4>
        <h1 className="type">I'am a Backend Developer</h1>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <li style={{ color: "white", listStyle: "none", fontSize: "24px" }}>
            <TiSocialFacebook />
          </li>
          <li style={{ color: "white", listStyle: "none", fontSize: "24px" }}>
            <BiLogoTwitter />
          </li>
          <li style={{ color: "white", listStyle: "none", fontSize: "24px" }}>
            <FaInstagram />
          </li>
          <li style={{ color: "white", listStyle: "none", fontSize: "24px" }}>
            <TiSocialFacebook />
          </li>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Button size="large" style={{ borderRadius: "30px" }}>
            View Work
          </Button>
          <Button style={{ borderRadius: "30px" }} size="large">
            Hire Me
          </Button>
        </div>
      </Space>
    </div>
  );
};

export default Hero;
