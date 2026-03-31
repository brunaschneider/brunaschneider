import { useState, useEffect } from 'react';
import * as S from './styles';
import bannerDesktop from '../../assets/banner-skills.png';
import bannerMobile from '../../assets/banner-skills-alternativo.png';

export const Skills = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <S.SkillsSection>
      <S.BannerWrapper>
        <S.ResponsiveImage 
          src={isMobile ? bannerMobile : bannerDesktop} 
          alt="Minhas Skills Profissionais" 
        />
      </S.BannerWrapper>
    </S.SkillsSection>
  );
};