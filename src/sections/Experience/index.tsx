import * as S from './styles';

const experiences = [
  {
    role: 'Desenvolvedora de Sistemas',
    company: 'Macroex',
    period: '11/2023 a 01/2026',
    desc: 'Desenvolvimento de sistemas ponta a ponta, desde a prototipagem UX/UI no Figma até o frontend em React e JavaScript. Atuação em modelagem de dados e controle de versão via Git.',
  },
  {
    role: 'Suporte Técnico e Desenvolvedora',
    company: 'Inove9',
    period: '08/2022 a 08/2023',
    desc: 'Manutenção de softwares para clínicas, suporte técnico e treinamentos. Desenvolvimento com foco no refinamento de funcionalidades e melhorias contínuas utilizando C#.',
  },
  {
    role: 'Desenvolvedora Front-end',
    company: 'Portall System',
    period: '02/2022 a 07/2022',
    desc: 'Aplicação de sites em JS, HTML e CSS. Desenvolvimento de wireframes e protótipos no Figma. Criação de artes para redes sociais e reformulação de identidade visual.',
  },
  {
    role: 'Estagiária de TI',
    company: 'Olho do Dono',
    period: '03/2020 a 02/2022',
    desc: 'Suporte técnico e atendimento a clientes. Segmentação e análise de imagens para treinamento de redes neurais. Apoio técnico à equipe interna em demandas diversificadas.',
  },
];

export const Experience = () => {
  return (
    <S.ExperienceSection id="experience">
      <S.Title>Experiência</S.Title>

      <S.TimelineWrapper>
        <S.CardsGrid>
          {experiences.map((experience) => (
            <S.ExperienceCard key={`${experience.company}-${experience.period}`}>
              <S.CardTitle>{experience.role}</S.CardTitle>
              <S.CardSubtitle>
                {experience.company}, {experience.period}
              </S.CardSubtitle>
              <S.CardDescription>{experience.desc}</S.CardDescription>
            </S.ExperienceCard>
          ))}
        </S.CardsGrid>
      </S.TimelineWrapper>
    </S.ExperienceSection>
  );
};