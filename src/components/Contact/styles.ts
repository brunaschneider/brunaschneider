import styled from 'styled-components';

export const ContactSection = styled.section`
  width: 100%;
  background-color: #08060d; /* Fundo escuro */
  padding: 80px 5% 0px 5%; /* Padding inferior zerado (controlamos no footer) */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
`;

export const Title = styled.h2`
  font-family: 'Antonio', sans-serif;
  font-size: 85px;
  font-weight: 700;
  color: #FFFFFF;
  text-transform: uppercase;
  margin-bottom: 30px;
  line-height: 0.9;
  /* Garante que não haja nenhum padding interno empurrando o texto */
  padding: 0;
  margin-left: 0; 

  @media (max-width: 1024px) {
    font-size: 48px;
    text-align: center;
  }
`;

export const DesktopGrid = styled.div`
  display: grid;
  /* Definimos larguras máximas para as colunas não se afastarem */
  grid-template-columns: minmax(400px, 500px) minmax(400px, 600px); 
  /* Reduzi o gap para os elementos ficarem próximos */
  gap: 40px; 
  width: 100%;
  max-width: 1200px; /* Reduzi o max-width para "fechar" o layout no centro */
  align-items: center;
  justify-content: center; /* Centraliza o conjunto todo na tela */
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
    justify-items: center;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  /* Alinha tudo à esquerda para o título e o QR code começarem no mesmo ponto */
  align-items: flex-start; 
  text-align: left;

  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
`;

export const QrCodesRow = styled.div`
  display: flex;
  gap: 40px;
  /* Garante que o primeiro QR code não tenha margem esquerda */
  justify-content: flex-start; 
  width: 100%;

  @media (max-width: 1024px) {
    gap: 30px;
    justify-content: center;
  }
`;

export const QrCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Ícone/Texto centralizados entre si */
  text-align: center;

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    margin-bottom: 15px;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    color: #FFFFFF;
    opacity: 0.8;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  justify-content: flex-start; /* Alinha a imagem para encostar no meio */
  width: 100%;

  img {
    width: 100%;
    max-width: 550px; 
    height: auto;
    object-fit: contain;
    border-radius: 50%;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    img { max-width: 320px; }
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #08060d;
  padding: 40px 0 60px 0; /* padding bottom de 60px para o respiro final */
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