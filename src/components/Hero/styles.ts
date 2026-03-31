import styled from 'styled-components';

export const HeroSection = styled.section`
  width: 100%;
  background-color: var(--bg-dark);
  margin: 0;
  padding: 0;
  line-height: 0; /* Remove espaços fantasmas abaixo da imagem */
`;

export const HeroBannerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover; /* Garante que preencha tudo */
`;