import { Flex, Typography } from "antd";
const { Text, Link } = Typography;

const NavBar = () => {
  return (
    <Flex style={{ justifyContent: "space-around" }}>
      <Flex>
        {" "}
        <Text strong style={{ fontSize: "30px", color: "white" }}>
          Sa Ru
        </Text>
      </Flex>
      <Flex>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "20px",
            justifyContent: "flex-end",
          }}
        >
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "16px",
              }}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "16px",
              }}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "16px",
              }}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </Flex>
    </Flex>
  );
};

export default NavBar;
