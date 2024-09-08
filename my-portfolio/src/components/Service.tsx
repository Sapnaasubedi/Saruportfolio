import React from 'react'
import { Space, Typography, Image, Flex, Button } from "antd";
import "./hero.css";

const { Text } = Typography;

const Service = () => {
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
My Services        <div className="gradient-divider"></div>
      </Text>

     
    </Space>
  </Flex>
  )
}

export default Service