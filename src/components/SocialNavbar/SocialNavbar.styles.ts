import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 40px;

  @media (max-width: 1024px) {
    position: static;
    transform: none;
    width: 100%;
    justify-content: center;
    gap: 18px;
    padding: 12px 14px;
    flex-wrap: wrap;
    background-color: var(--bg-dark);
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-white);
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s ease;
  opacity: 0.9;
  white-space: nowrap;

  &:hover {
    opacity: 1;
    color: var(--secondary-pink);
    transform: translateY(-2px);
  }

  svg {
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    gap: 6px;

    svg {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    gap: 6px;

    svg {
      font-size: 14px;
    }
  }
`;