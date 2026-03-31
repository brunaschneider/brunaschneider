import styled from 'styled-components';

export const SkillsSection = styled.section`
  width: 100%;
  background-color: #08060d;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  padding: 40px 0;
  margin: 0;

  @media (min-width: 1025px) {
    margin-top: -30px;
    padding: 0;
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-right: 40px;

  @media (min-width: 601px) {
    padding-right: 60px;
  }

  @media (min-width: 1025px) {
    padding-right: 8%;
  }
`;

export const ResponsiveImage = styled.img`
  display: block;
  height: auto;
  
  &.mobile-banner {
    display: block;
    width: 100%;
    max-width: 480px;
    object-fit: contain;
  }

  &.alternativo-banner, 
  &.desktop-banner {
    display: none;
  }

  @media (min-width: 601px) {
    &.mobile-banner {
      display: none;
    }
    &.alternativo-banner {
      display: block;
      width: 100%;
      max-width: 100%;
    }
  }

  @media (min-width: 1025px) {
    &.alternativo-banner {
      display: none;
    }
    &.desktop-banner {
      display: block;
      width: 100%;
      max-width: 100%;
      margin-left: -2px;
    }
  }
`;