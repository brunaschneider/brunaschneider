import * as S from './styles';
import bannerDesktop from '../../assets/banner-inicio.png';
import bannerMobile from '../../assets/banner-inicio-mobile.png';

export const Hero = () => {
  return (
    <S.HeroSection>
      <picture>
        <source media="(min-width: 769px)" srcSet={bannerDesktop} />
        <S.HeroImage
          src={bannerMobile}
          alt="Bruna Schneider - Portfólio"
        />
      </picture>
    </S.HeroSection>
  );
};