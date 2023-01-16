import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <Row>
          <FooterLink href="#">
            <i class="fab fa-facebook-f"></i>
            <span style={{ marginLeft: "10px" }}>Facebook</span>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-instagram">
              <span style={{ marginLeft: "10px" }}>Instagram</span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-twitter">
              <span style={{ marginLeft: "10px" }}>Twitter</span>
            </i>
          </FooterLink>
          <FooterLink href="#">
            <i className="fab fa-youtube">
              <span style={{ marginLeft: "10px" }}>Youtube</span>
            </i>
          </FooterLink>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
