import * as S from './styles';
import bannerDesktop from '../../assets/banner-inicio.png'; 
import bannerMobile from '../../assets/banner-inicio-mobile.png'; 

export const Hero = () => {
  return (
    <S.HeroSection>
      <S.HeroBannerImage 
        src={bannerDesktop} 
        alt="Bruna Schneider - Portfólio Desktop" 
        className="desktop-banner"
      />
      <S.HeroBannerImage 
        src={bannerMobile} 
        alt="Bruna Schneider - Portfólio Mobile" 
        className="mobile-banner"
      />
    </S.HeroSection>
  );
};