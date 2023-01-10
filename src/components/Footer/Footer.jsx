import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/">Главная</FooterLink>
            <FooterLink href="/products">Продукты</FooterLink>
            <FooterLink href="/about-us">О нас</FooterLink>
          </Column>

          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/rog.central.asia/?brand_redir=405774002387">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/ASUSROG/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/ASUS_ROG">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/channel/UCAaMgASV4htjw3KNqh_vQvA">
              <i className="fab fa-youtube">
                <span
                  style={{ marginLeft: "10px" }}
                  url="https://youtu.be/0dOSLhPzSGI"
                >
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
