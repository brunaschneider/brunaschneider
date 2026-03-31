import styled from 'styled-components';

export const AboutSection = styled.section`
  width: 100%;
  background-color: var(--bg-dark);
  padding: 60px 8%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 40px 5%;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr; 
  width: 100%;
  max-width: 1400px;
  gap: 40px;
  align-items: center;

  @media (max-width: 1024px) {
    /* Muda para uma coluna só no mobile/tablet */
    grid-template-columns: 1fr; 
    gap: 50px;
    justify-items: center; /* Centraliza a div da imagem e do texto na grade */
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left; /* Padrão desktop: esquerda */

  h2 {
    font-family: 'Antonio', sans-serif;
    font-size: 85px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 0.9;
    margin-bottom: 20px;
    color: var(--text-white);
  }

  .presentation {
    font-family: 'Antonio', sans-serif;
    font-size: 28px;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 30px;
    max-width: 550px;
    color: var(--text-white);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 300;
      color: var(--text-white);
      
      svg {
        width: 18px;
        color: var(--text-white);
      }
    }
  }

  /* VARIAÇÃO PARA TELAS MENORES */
  @media (max-width: 1024px) {
    align-items: center; /* Centraliza o conteúdo da div */
    text-align: center; /* Centraliza o texto */
    
    h2 { 
      font-size: 55px; 
    }

    .presentation {
      font-size: 22px;
      max-width: 100%;
    }

    ul li {
      justify-content: center; /* Centraliza os ícones com o texto na lista */
    }
  }
`;

export const RightDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    justify-content: center; /* Imagem centralizada no mobile */
    order: -1; /* Opcional: coloca a imagem em cima do texto no mobile */
    
    img {
      max-width: 350px; /* Reduz um pouco o avatar no mobile */
    }
  }
`;