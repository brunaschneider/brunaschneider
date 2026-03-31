import styled from 'styled-components';

export const SkillsSection = styled.section`
  width: 100%;
  background-color: #08060d;
  padding: 0;
  margin-top: -30px; 
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1024px) {
    margin-top: 0;
    padding-top: 30px; 
    padding-bottom: 50px;
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-right: 8%; 
`;

export const ResponsiveImage = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: -2px;
`;