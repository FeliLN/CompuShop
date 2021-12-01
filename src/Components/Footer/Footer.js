import React from "react";
import {
  Box,
  Container,
  // Row,
  // Column,
  // FooterLink,
  // Heading,
} from "./FooterStyles";
import './Footer.css'
import Logo from '../img/on-logo3D-1.png'
// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab) 

const Footer = () => {

  return (
    <Box>
      {/* <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Compushop: Improving your setup
      </h1> */}
      <img src={Logo} alt="logo" style={{ width: "100px", display: "block", position: "absolute" }} />
      <Container>
        {/* <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>

          </Column>
          </Row> */}

      </Container>
      <section className="social-media">
          <FontAwesomeIcon icon={['fab', 'facebook-f']}  transform="shrink-6" className="facebook" />
          <FontAwesomeIcon icon={['fab', 'twitter']} transform="shrink-6" className="twitter" />
          <FontAwesomeIcon icon={['fab', 'instagram']} transform="shrink-6" className="instagram" />
          <FontAwesomeIcon icon={['fab', 'youtube']} transform="shrink-6" className="youtube" />
      </section>
    </Box>
  );
};

export default Footer;
