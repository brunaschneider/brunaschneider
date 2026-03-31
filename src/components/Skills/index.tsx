import * as S from './styles';
import bannerDesktop from '../../assets/banner-skills.png'; 
import bannerAlternativo from '../../assets/banner-skills-alternativo.png';
import bannerMobile from '../../assets/banner-skills-mobile.png'; 

export const Skills = () => {
  return (
    <S.SkillsSection>
      <S.BannerWrapper>
        <S.ResponsiveImage 
          src={bannerDesktop} 
          alt="Skills Desktop" 
          className="desktop-banner" 
        />
        <S.ResponsiveImage 
          src={bannerAlternativo} 
          alt="Skills Tablet" 
          className="alternativo-banner" 
        />
        <S.ResponsiveImage 
          src={bannerMobile} 
          alt="Skills Mobile" 
          className="mobile-banner" 
        />
      </S.BannerWrapper>
    </S.SkillsSection>
  );
};