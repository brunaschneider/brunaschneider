import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavbarContainer, SocialLink } from './SocialNavbar.styles';

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/bruna-schneider-fonseca-9065201a1/",
    icon: faLinkedin,
    label: "LinkedIn"
  },
  {
    href: "https://github.com/brunaschneider",
    icon: faGithub,
    label: "GitHub"
  },
  {
    href: "mailto:brunaschneiderhenke@gmail.com",
    icon: faEnvelope,
    label: "Email"
  },
  {
    href: "/CV-BRUNASCHNEIDER.pdf",
    icon: faFileDownload,
    label: "Portfólio PDF",
    isDownload: true
  }
];

export const SocialNavbar = () => {
  return (
    <NavbarContainer>
      {socialLinks.map((link) => (
        <SocialLink
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          download={link.isDownload ? "Bruna-Schneider-CV.pdf" : undefined}
        >
          <FontAwesomeIcon icon={link.icon} />
          {link.label}
        </SocialLink>
      ))}
    </NavbarContainer>
  );
};