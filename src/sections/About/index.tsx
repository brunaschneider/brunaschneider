import * as style from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faCode,
  faPenNib,
  faCodeBranch,
  faFileCircleCheck,
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
    icon: faFileCircleCheck,
    text: 'Testes automatizados, garantia de qualidade (QA) e documentação técnica',
  },
  {
    icon: faCodeBranch,
    text: 'Controle de versão eficiente via GitHub',
  },
];

export const About = () => {
  return (
    <style.AboutSection id="about">
      <style.ContentWrapper>
        <style.TextContent>
          <style.Title>Olá, mundo...</style.Title>
          <style.Presentation>
            Prazer, meu nome é Bruna e sou Desenvolvedora Front-end com forte atuação em UX/UI Design.
          </style.Presentation>
          <style.AboutList>
            {aboutItems.map((item) => (
              <style.AboutListItem key={item.text}>
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.text}</span>
              </style.AboutListItem>
            ))}
          </style.AboutList>
        </style.TextContent>
        <style.ImageWrapper>
          <style.AvatarImage src={avatarPng} alt="Avatar de Bruna Schneider" />
        </style.ImageWrapper>
      </style.ContentWrapper>
    </style.AboutSection>
  );
};