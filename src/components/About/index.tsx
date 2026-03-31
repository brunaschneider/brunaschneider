import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase, 
  faCode, 
  faPenNib, 
  faVial, 
  faCodeBranch 
} from '@fortawesome/free-solid-svg-icons';
import avatarPng from '../../assets/avatar.png'; 

export const About = () => {
  return (
    <S.AboutSection>
      <S.ContentWrapper>
        
        <S.LeftDiv>
          <h2>Olá, mundo...</h2>
          <p className="presentation">
            Prazer, meu nome é Bruna e sou Desenvolvedora Front-end com forte atuação em UX/UI Design.
          </p>
          
          <ul>
            <li><FontAwesomeIcon icon={faBriefcase} /> 6 anos de experiência como profissional de TI</li>
            <li><FontAwesomeIcon icon={faCode} /> 3 anos de experiência com desenvolvimento de sistemas</li>
            <li><FontAwesomeIcon icon={faPenNib} /> Prototipagem de alta fidelidade e UX/UI design no Figma</li>
            <li><FontAwesomeIcon icon={faVial} /> Testes automatizados, garantia de qualidade (QA) e documentação técnica</li>
            <li><FontAwesomeIcon icon={faCodeBranch} /> Controle de versão eficiente via GitHub</li>
          </ul>
        </S.LeftDiv>

        <S.RightDiv>
          <img src={avatarPng} alt="Avatar Bruna Schneider" />
        </S.RightDiv>

      </S.ContentWrapper>
    </S.AboutSection>
  );
};