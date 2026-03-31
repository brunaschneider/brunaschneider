import * as S from './styles';
import bannerDesktop from '../../assets/banner-skills.png';
import bannerTablet from '../../assets/banner-skills-alternativo.png';
import bannerMobile from '../../assets/banner-skills-mobile.png';

export const Skills = () => {
  return (
    <S.SkillsSection id="skills">
      <S.BannerWrapper>
        <picture>
          <source media="(min-width: 1025px)" srcSet={bannerDesktop} />
          <source media="(min-width: 601px)" srcSet={bannerTablet} />
          <S.BannerImage
            src={bannerMobile}
            alt="Tecnologias e habilidades de Bruna Schneider"
          />
        </picture>
      </S.BannerWrapper>
    </S.SkillsSection>
  );
};