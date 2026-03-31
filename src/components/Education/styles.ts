import styled from 'styled-components';

export const EducationSection = styled.section`
  width: 100%;
  background-color: #F7C5C5;
  padding: 60px 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Antonio', sans-serif;
  font-size: 85px;
  font-weight: 700;
  color: #8B0000;
  text-transform: uppercase;
  margin-bottom: 50px;
  text-align: center;
  line-height: 0.9;
`;

export const EducationRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  justify-content: space-between;
  align-items: flex-start; /* Alinha todos os cards pelo topo */
  gap: 20px;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;

export const Card = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .icon-cap {
    font-size: 1.5rem;
    color: #000000;
    margin-bottom: 15px;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #000000;
    line-height: 1.2;
    margin-bottom: 5px; /* Bem grudadinho no detalhe */
    /* Reserva espaço para o título não empurrar o de baixo */
    min-height: 2.5em; 
    display: flex;
    align-items: center;
  }

  .details {
    font-family: 'Roboto', sans-serif;
    font-size: 0.85rem;
    font-weight: 300;
    font-style: italic;
    color: #000000;
    opacity: 0.8;
    margin: 0;
  }
`;