import { Flex, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react'
const { Text, Link } = Typography;

const NavBar = () => {
  return (
  <Flex >
    <ul >
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </Flex>
  )
}

export default NavBar