import * as style from './styles';
import bannerDesktop from '../../assets/banner-inicio.png';
import bannerMobile from '../../assets/banner-inicio-mobile.png';

export const Hero = () => {
  return (
    <style.HeroSection>
      <picture>
        <source media="(min-width: 769px)" srcSet={bannerDesktop} />
        <style.HeroImage
          src={bannerMobile}
          alt="Banner: Portfólio deBruna Schneider - Dev Front-End e UX/UI Designer"
        />
      </picture>
    </style.HeroSection>
  );
};