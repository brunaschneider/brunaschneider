import * as style from './styles';
import bannerDesktop from '../../assets/banner-skills.png';
import bannerTablet from '../../assets/banner-skills-alternativo.png';
import bannerMobile from '../../assets/banner-skills-mobile.png';

const bannerAltText = "Banner ilustrativo para a seção de skills. Coding skills: JavaScript, TypeScript, HTML, CSS, React, NodeJs, C#, Cypress, SQL. Software skills: Visual Studio, Postman, Docker, Figma, Canva. Soft skills: Pensamento Analítico; Foco e Determinação; Flexibilidade e Resiliência; Inteligência Emocional; Orientação a Processos; Organização e Planejamento; Lealdade Processual; Comunicação Objetiva; Autonomia; Estabilidade.";

export const Skills = () => {
  return (
    <style.SkillsSection id="skills">
      <style.BannerWrapper>
        <picture>
          <source media="(min-width: 1025px)" srcSet={bannerDesktop} />
          <source media="(min-width: 601px)" srcSet={bannerTablet} />
          <style.BannerImage
            src={bannerMobile}
            alt={bannerAltText}
          />
        </picture>
      </style.BannerWrapper>
    </style.SkillsSection>
  );
};