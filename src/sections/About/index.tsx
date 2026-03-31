import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faCode,
  faPenNib,
  faVial,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import avatarPng from '../../assets/avatar.png';

const aboutItems = [
  {
    icon: faBriefcase,
    text: '6 anos de experiência como profissional de TI',
  },
  {
    icon: faCode,
    text: '3 anos de experiência com desenvolvimento de sistemas',
  },
  {
    icon: faPenNib,
    text: 'Prototipagem de alta fidelidade e UX/UI design no Figma',
  },
  {
    icon: faVial,
    text: 'Testes automatizados, garantia de qualidade (QA) e documentação técnica',
  },
  {
    icon: faCodeBranch,
    text: 'Controle de versão eficiente via GitHub',
  },
];

export const About = () => {
  return (
    <S.AboutSection id="about">
      <S.ContentWrapper>
        <S.TextContent>
          <S.Title>Olá, mundo...</S.Title>

          <S.Presentation>
            Prazer, meu nome é Bruna e sou Desenvolvedora Front-end com forte atuação em UX/UI Design.
          </S.Presentation>

          <S.AboutList>
            {aboutItems.map((item) => (
              <S.AboutListItem key={item.text}>
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.text}</span>
              </S.AboutListItem>
            ))}
          </S.AboutList>
        </S.TextContent>

        <S.ImageWrapper>
          <S.AvatarImage src={avatarPng} alt="Avatar de Bruna Schneider" />
        </S.ImageWrapper>
      </S.ContentWrapper>
    </S.AboutSection>
  );
};