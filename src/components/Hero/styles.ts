import styled from 'styled-components';

export const HeroSection = styled.section`
  width: 100%;
  background-color: var(--bg-dark);
  margin: 0;
  padding: 0;
  line-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const HeroBannerImage = styled.img`
  display: block;
  height: auto;

  &.mobile-banner {
    display: block;
    width: 100%;
    max-width: 480px; 
    object-fit: contain;
  }

  &.desktop-banner {
    display: none;
  }

  @media (min-width: 769px) {
    &.mobile-banner {
      display: none;
    }

    &.desktop-banner {
      display: block;
      width: 100%;
      max-width: 100%;
      object-fit: cover;
      object-position: center top;
    }
  }
`;

export const NavWrapper = styled.nav`
  display: none;

  @media (min-width: 769px) {
    display: flex;
    position: absolute;
    top: 20px;
    right: 5%;
    gap: 20px;
    z-index: 10;
  }
`;