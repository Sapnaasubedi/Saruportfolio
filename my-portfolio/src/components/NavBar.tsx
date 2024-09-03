import React, { useEffect, useState } from "react";
import { Flex, Typography } from "antd";
import "./navbar.css"; // Import the CSS file for the scroll effect

const { Text, Link } = Typography;

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      className={`navbar ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
      style={{ justifyContent: "space-around" }}
    >
      <Flex>
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
              href="/service"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "16px",
              }}
              href="/resume"
            >
              Resume
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
