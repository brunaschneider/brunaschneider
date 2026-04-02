import * as style from './styles';
import qrWhatsappImg from '../../assets/QRCode-whatsapp.png';
import qrFigmaImg from '../../assets/QRCode-figma.png';
import perfilFinalImg from '../../assets/perfil-final.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const qrItems = [
  {
    image: qrFigmaImg,
    alt: 'QRCode link para o Figma',
    label: 'Compilado de Projetos Vitrine',
    type: 'Figma',
    url: 'https://www.figma.com/design/xsnAnR8wRaGBLnjgBG1YWx/Biblioteca-de-trabalhos?m=auto&t=uFtEk7sGhNOoK1lK-6',
  },
  {
    image: qrWhatsappImg,
    alt: 'QRCode link para o WhatsApp',
    label: 'Entre em Contato',
    type: 'WhatsApp',
    url: 'https://w.app/pthx7k',
  },
];

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <style.ContactSection id="contact">
      <style.DesktopGrid>
        <style.LeftColumn>
          <style.Title>Saiba mais...</style.Title>
          <style.QrCodesRow>
            {qrItems.map((item) => (
              <style.QrCodeCard key={item.type}>
                <style.QrCodeImage src={item.image} alt={item.alt} />
                <style.QrCodeLabel>
                  <a href={item.url} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {item.label} <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginLeft: '4px' }} />
                  </a>
                </style.QrCodeLabel>
                <style.QrCodeType>{item.type}</style.QrCodeType>
              </style.QrCodeCard>
            ))}
          </style.QrCodesRow>
        </style.LeftColumn>
        <style.RightColumn>
          <style.ProfileImage src={perfilFinalImg} alt="Foto de Bruna Schneider" />
        </style.RightColumn>
      </style.DesktopGrid>
      <style.FooterContainer>
        <style.SocialLinks>
          <style.SocialAnchor
            href="https://linkedin.com/in/brunaschneider"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </style.SocialAnchor>
          <style.SocialAnchor
            href="https://github.com/brunaschneider"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </style.SocialAnchor>
          <style.SocialAnchor
            href="mailto:brunaschneiderhenke@gmail.com"
            title="Enviar e-mail"
            aria-label="Enviar e-mail"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </style.SocialAnchor>
        </style.SocialLinks>
        <style.Copyright>
          &copy; {currentYear} Bruna Schneider. Todos os direitos reservados.
        </style.Copyright>
      </style.FooterContainer>
    </style.ContactSection>
  );
};