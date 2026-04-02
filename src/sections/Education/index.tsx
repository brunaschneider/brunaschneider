import * as style from './styles';
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
    <style.EducationSection id="education">
      <style.Title>Educação</style.Title>
      <style.EducationGrid>
        {educations.map((education) => (
          <style.Card key={education.title}>
            <style.IconWrapper>
              <FontAwesomeIcon icon={faGraduationCap} />
            </style.IconWrapper>
            <style.CardTitle>{education.title}</style.CardTitle>
            <style.CardInfo>{education.info}</style.CardInfo>
          </style.Card>
        ))}
      </style.EducationGrid>
    </style.EducationSection>
  );
};