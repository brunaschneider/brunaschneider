import * as S from './styles';
import qrWhatsappImg from '../../assets/QRCode-whatsapp.png';
import qrFigmaImg from '../../assets/QRCode-figma.png';
import perfilFinalImg from '../../assets/perfil-final.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.ContactSection>
      <S.DesktopGrid>
        <S.LeftColumn>
          <S.Title>SAIBA MAIS...</S.Title>
          <S.QrCodesRow>
            <S.QrCodeContainer>
              <img src={qrFigmaImg} alt="QR Code Figma" />
              <span>Ver mais projetos no Figma</span>
              <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>Figma</span>
            </S.QrCodeContainer>
            <S.QrCodeContainer>
              <img src={qrWhatsappImg} alt="QR Code Whatsapp" />
              <span>Compilado de Projetos Vitrine</span>
              <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>WhatsApp</span>
            </S.QrCodeContainer>
          </S.QrCodesRow>
        </S.LeftColumn>

        {/* COLUNA DIREITA: Sua Foto (Avatar Final) */}
        <S.RightColumn>
          <img src={perfilFinalImg} alt="Bruna Schneider - UX/UI" />
        </S.RightColumn>
      </S.DesktopGrid>
      <S.FooterContainer>
        <S.SocialLinks>
          <a href="https://linkedin.com/in/brunaschneider" target="_blank" rel="noreferrer" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/brunaschneider" target="_blank" rel="noreferrer" title="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="mailto:seu-email@dominio.com" title="Enviar E-mail"><FontAwesomeIcon icon={faEnvelope} /></a>
        </S.SocialLinks>
        <S.Copyright>
          &copy; {currentYear} Bruna Schneider. Todos os direitos reservados.
        </S.Copyright>
      </S.FooterContainer>
    </S.ContactSection>
  );
};