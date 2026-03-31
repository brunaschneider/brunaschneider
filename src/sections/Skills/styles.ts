import styled from 'styled-components';

export const SkillsSection = styled.section`
  width: 100%;
  background-color: var(--bg-deep);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  padding: 40px 0;

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

  picture {
    width: 100%;
    display: block;
  }

  @media (min-width: 601px) {
    padding-right: 60px;
  }

  @media (min-width: 1025px) {
    padding-right: 8%;
  }
`;

export const BannerImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;

  @media (min-width: 1025px) {
    margin-left: -2px;
  }
`;