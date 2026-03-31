import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.nav`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 40px; 
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-white);
  font-size: 0.85rem;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s ease;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    color: var(--secondary-pink);
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.1rem;
  }
`;

export const SocialNavbar = () => {
  return (
    <NavbarContainer>
      <SocialLink 
        href="https://www.linkedin.com/in/bruna-schneider-fonseca-9065201a1/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        Linkedin
      </SocialLink>
      <SocialLink 
        href="https://github.com/brunaschneider" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
        GitHub
      </SocialLink>
      <SocialLink href="mailto:brunaschneiderhenke@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
        Email
      </SocialLink>
    </NavbarContainer>
  );
};