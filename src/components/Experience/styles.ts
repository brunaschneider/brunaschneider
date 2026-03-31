import styled from 'styled-components';

export const ExperienceContainer = styled.section`
  width: 100%;
  background-color: #08060d;
  padding: 60px 5% 0px 5%; /* Padding inferior zerado para o banner subir */
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Antonio', sans-serif;
  font-size: 85px;
  font-weight: 700;
  color: #FFFFFF !important;
  text-transform: uppercase;
  margin-bottom: 50px;
  line-height: 0.9;
`;

export const TimelineWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    z-index: 1;
  }

  @media (max-width: 1024px) {
    &::before { display: none; }
  }
`;

// O COMPONENTE QUE ESTAVA FALTANDO:
export const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ExpCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 25px;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  text-align: center;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    border-color: #8B0000;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff; /* Cor do cargo em vermelho */
    margin-bottom: 5px;
    min-height: 2.4em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.85rem;
    color: #FFFFFF;
    opacity: 0.8;
    display: block;
    margin-bottom: 15px;
    font-style: italic;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.85rem;
    font-weight: 300;
    line-height: 1.5;
    color: #FFFFFF;
    opacity: 0.9;
    min-height: 8.5em;
  }
`;