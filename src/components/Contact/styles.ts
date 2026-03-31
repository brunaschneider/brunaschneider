import styled from 'styled-components';

export const ContactSection = styled.section`
  width: 100%;
  background-color: #08060d;
  padding: 60px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;

  @media (min-width: 1025px) {
    padding: 80px 5% 0px 5%;
  }
`;

export const Title = styled.h2`
  font-family: 'Antonio', sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: #FFFFFF;
  text-transform: uppercase;
  margin-bottom: 30px;
  line-height: 0.9;
  text-align: center;

  @media (min-width: 601px) {
    font-size: 60px;
  }

  @media (min-width: 1025px) {
    font-size: 85px;
    text-align: left;
  }
`;

export const DesktopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-items: center;
  margin-bottom: 60px;

  @media (min-width: 1025px) {
    grid-template-columns: minmax(400px, 500px) minmax(400px, 600px);
    justify-content: center;
    margin-bottom: 80px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  order: 1;

  @media (min-width: 1025px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const QrCodesRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  width: 100%;

  @media (min-width: 601px) {
    gap: 50px;
  }

  @media (min-width: 1025px) {
    gap: 40px;
    justify-content: flex-start;
  }
`;

export const QrCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 140px;
    height: 140px;
    object-fit: contain;
    margin-bottom: 10px;

    @media (min-width: 601px) {
      width: 220px;
      height: 220px;
    }
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 300;
    color: #FFFFFF;
    opacity: 0.8;

    @media (min-width: 601px) {
      font-size: 1rem;
    }
  }

  @media (min-width: 1025px) {
    img {
      width: 200px;
      height: 200px;
    }
    span {
      font-size: 0.9rem;
    }
  }
`;

export const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  order: 2;

  img {
    width: 100%;
    max-width: 280px;
    height: auto;
    object-fit: contain;
    border-radius: 50%;

    @media (min-width: 601px) {
      max-width: 400px;
    }
  }

  @media (min-width: 1025px) {
    justify-content: flex-start;
    img {
      max-width: 550px;
    }
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #08060d;
  padding: 40px 0 60px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  a {
    color: #FFFFFF;
    font-size: 1.4rem;
    opacity: 0.7;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      transform: translateY(-3px);
      color: #8B0000;
    }
  }
`;

export const Copyright = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 0.8rem;
  font-weight: 300;
  color: #FFFFFF;
  opacity: 0.5;
  text-align: center;
`;