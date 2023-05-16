import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgb(27, 27, 27);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        © 2023 Web Perfection. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
