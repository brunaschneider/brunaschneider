import * as S from './styles';

export const Experience = () => {
  const experiences = [
    {
      role: "Desenvolvedora de Sistemas",
      company: "Macroex, 11/2023 a 01/2026",
      desc: "Desenvolvimento de sistemas ponta a ponta, desde a prototipagem UX/UI no Figma até o frontend em React e JavaScript. Atuação em modelagem de dados e controle de versão via Git."
    },
    {
      role: "Suporte Técnico e Desenvolvedora",
      company: "Inove9, 08/2022 a 08/2023",
      desc: "Manutenção de softwares para clínicas, suporte técnico e treinamentos. Desenvolvimento com foco no refinamento de funcionalidades e melhorias contínuas utilizando C#."
    },
    {
      role: "Desenvolvedora Front-end",
      company: "Portall System, 02/2022 a 07/2022",
      desc: "Aplicação de sites em JS, HTML, CSS. Desenvolvimento de wireframes e protótipos pelo Figma. Criação de artes para redes sociais e reformulação de identidade visual."
    },
    {
      role: "Estagiária de TI",
      company: "Olho do Dono, 03/2020 a 02/2022",
      desc: "Suporte técnico e atendimento a clientes. Segmentação e análise de imagens para treinamento de redes neurais. Apoio técnico à equipe interna em demandas diversificadas."
    }
  ];

  return (
    <S.ExperienceContainer>
      <S.Title>EXPERIÊNCIA</S.Title>
      
      <S.TimelineWrapper>
        <S.CardsRow>
          {experiences.map((exp, index) => (
            <S.ExpCard key={index}>
              <h3>{exp.role}</h3>
              <span>{exp.company}</span>
              <p>{exp.desc}</p>
            </S.ExpCard>
          ))}
        </S.CardsRow>
      </S.TimelineWrapper>
    </S.ExperienceContainer>
  );
};