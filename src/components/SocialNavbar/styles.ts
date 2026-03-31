import styled from 'styled-components';

export const NavContainer = styled.nav`
  /* ... seus estilos de posição ... */
  display: flex;
  gap: 30px;
  padding: 20px 5%;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #FFFFFF;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  transition: opacity 0.3s;

  svg {
    font-size: 1.1rem; /* Tamanho do ícone */
  }

  &:hover {
    opacity: 0.7;
    color: var(--primary-red);
  }
`;