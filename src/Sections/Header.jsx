import React from "react";
import styled from "styled-components";
import bg from "../assets/img/bg.svg";
import HeaderContent from "../components/HeaderContent";
import Navigation from "../components/Navigation";

const Header = () => {
  return (
    <HeaderStyled id='header'>
      <div className="header-content">
        <Navigation />
        <HeaderContent />
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%);
  background-image: linear-gradient(135deg, rgba(30, 27, 75, 0.95) 0%, rgba(49, 46, 129, 0.9) 50%, rgba(76, 29, 149, 0.85) 100%), url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.3), transparent);
    pointer-events: none;
  }

  .header-content {
    padding: 0 clamp(2rem, 8vw, 10rem);
    position: relative;
    z-index: 1;

    @media screen and (max-width: 1347px) {
      padding: 5rem clamp(2rem, 6vw, 8rem);
    }
    @media screen and (max-width: 990px) {
      padding: 3rem clamp(1.5rem, 4vw, 4rem);
    }
  }
`;

export default Header;
