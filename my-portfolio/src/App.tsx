import { Header } from "antd/es/layout/layout";
import { Flex,Avatar,Typography  } from "antd";

const { Text, Link } = Typography;
function App() {
  return (
    <Header >
    <Flex align="center" gap="middle">
      <Link href="/">
        SARu
      </Link>


    </Flex>

    <Flex gap="large">
      <Flex align="center" gap="small">
        <Text>Home </Text>

        
      </Flex>

      <Flex align="center" gap="middle">
      
        <Text>About</Text>

      
      </Flex>
    </Flex>
  </Header>
  );
}

export default App;
