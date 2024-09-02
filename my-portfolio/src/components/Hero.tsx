
import { Space } from 'antd';
import './hero.css'
import { TiSocialFacebook } from "react-icons/ti";
const Hero = () => {
  return (
    <div className="container">
    <Space direction='vertical' size="large">
      <h4 style={{ color: "white" , textAlign: "center"}}>WELCOME TO MY WEBSITE</h4>
      <h1 className="type">I'am a Backend Developer</h1>
      <ul><li style={{color: "white" , listStyle: "none" , fontSize: "24px"}}><TiSocialFacebook /></li></ul>
    </Space>
  </div>
  )
}

export default Hero