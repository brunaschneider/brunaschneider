import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const educations = [
  {
    title: 'MBA em Gestão de Projetos e Metodologias Ágeis - PUCRS',
    info: 'Pós-Graduação, Cursando, 2025-2026',
  },
  {
    title: 'Análise e Desenvolvimento de Sistemas - Multivix',
    info: 'Graduação, 2024-2025',
  },
  {
    title: 'Sistemas de Informação - UCL',
    info: 'Graduação, 2022-2024',
  },
  {
    title: 'Técnico em Informática - IFES',
    info: 'Técnico, 2019-2022',
  },
];

export const Education = () => {
  return (
    <S.EducationSection id="education">
      <S.Title>Educação</S.Title>
      <S.EducationGrid>
        {educations.map((education) => (
          <S.Card key={education.title}>
            <S.IconWrapper>
              <FontAwesomeIcon icon={faGraduationCap} />
            </S.IconWrapper>

            <S.CardTitle>{education.title}</S.CardTitle>
            <S.CardInfo>{education.info}</S.CardInfo>
          </S.Card>
        ))}
      </S.EducationGrid>
    </S.EducationSection>
  );
};