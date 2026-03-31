import * as S from './styles';
import qrWhatsappImg from '../../assets/QRCode-whatsapp.png';
import qrFigmaImg from '../../assets/QRCode-figma.png';
import perfilFinalImg from '../../assets/perfil-final.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const qrItems = [
  {
    image: qrFigmaImg,
    alt: 'QR Code Figma',
    label: 'Compilado de Projetos Vitrine',
    type: 'Figma',
  },
  {
    image: qrWhatsappImg,
    alt: 'QR Code WhatsApp',
    label: 'Entre em Contato',
    type: 'WhatsApp',
  },
];

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.ContactSection id="contact">
      <S.DesktopGrid>
        <S.LeftColumn>
          <S.Title>Saiba mais...</S.Title>

          <S.QrCodesRow>
            {qrItems.map((item) => (
              <S.QrCodeCard key={item.type}>
                <S.QrCodeImage src={item.image} alt={item.alt} />
                <S.QrCodeLabel>{item.label}</S.QrCodeLabel>
                <S.QrCodeType>{item.type}</S.QrCodeType>
              </S.QrCodeCard>
            ))}
          </S.QrCodesRow>
        </S.LeftColumn>

        <S.RightColumn>
          <S.ProfileImage src={perfilFinalImg} alt="Bruna Schneider - UX/UI" />
        </S.RightColumn>
      </S.DesktopGrid>

      <S.FooterContainer>
        <S.SocialLinks>
          <S.SocialAnchor
            href="https://linkedin.com/in/brunaschneider"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </S.SocialAnchor>

          <S.SocialAnchor
            href="https://github.com/brunaschneider"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </S.SocialAnchor>

          <S.SocialAnchor
            href="mailto:brunaschneiderhenke@gmail.com"
            title="Enviar e-mail"
            aria-label="Enviar e-mail"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </S.SocialAnchor>
        </S.SocialLinks>

        <S.Copyright>
          &copy; {currentYear} Bruna Schneider. Todos os direitos reservados.
        </S.Copyright>
      </S.FooterContainer>
    </S.ContactSection>
  );
};