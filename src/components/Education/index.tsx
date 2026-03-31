import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export const Education = () => {
  const educations = [
    {
      title: "MBA em Gestão de Projetos e Metodologias Ágeis - PUCRS",
      info: "Pós-Graduação, Cursando, 2025-2026"
    },
    {
      title: "Análise Desenvolvimento de Sistemas - Multivix",
      info: "Graduação, 2024-2025"
    },
    {
      title: "Sistemas de Informação - UCL",
      info: "Graduação, 2022-2024"
    },
    {
      title: "Técnico em Informática - IFES",
      info: "Técnico, 2019-2022"
    }
  ];

  return (
    <S.EducationSection>
      <S.Title>EDUCAÇÃO</S.Title>
      
      <S.EducationRow>
        {educations.map((edu, index) => (
          <S.Card key={index}>
            <FontAwesomeIcon icon={faGraduationCap} className="icon-cap" />
            <h3>{edu.title}</h3>
            <p className="details">{edu.info}</p>
          </S.Card>
        ))}
      </S.EducationRow>
    </S.EducationSection>
  );
};