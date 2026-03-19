import { title } from "process"

export type ExperienceContent = {
    title?: string,
    list?: ExperienceList[]
}

export type ExperienceList = {
    title?: string,
    company?: string,
    start?: string,
    end?: string,
    description?: string
}

// content must have a final empty object to fit the timeline structure

export const contentPTBR: ExperienceContent = {
    title: "Experiência Profissional",
    list: [
        {
            title: "Estagiária de TI", 
            company: "Olho Do Dono S/A", 
            start: "Março de 2020", 
            end: "Fevereiro de 2022", 
            description: "Suporte técnico, manutenção de hardware e software, atendimento a clientes e análise/tratamento de imagens." 
        },
        {
            title: "Desenvolvedor Front-end Júnior e Designer", 
            company: "Portall System", 
            start: "Fevereiro de 2022", 
            end: "Junho de 2022", 
            description: "Desenvolvimento de sites em JavaScript, HTML e CSS. Criação de wireframes e protótipos no Figma, além de artes para redes sociais e mockups." 
        },
        {
            title: "Suporte Técnico e Programador de Sistemas", 
            company: "Inove9 Soluções", 
            start: "Agosto de 2022", 
            end: "Agosto de 2023", 
            description: "Aplicação e manutenção em software para cartórios e clínicas, suporte técnico, atendimento ao cliente e treinamentos direcionados ao usuário." 
        },
        {
            title: "Desenvolvedor de Sistemas", 
            company: "Macroex Comercial Importadora e Exportadora", 
            start: "Novembro de 2023", 
            end: "Janeiro de 2026", 
            description: "Desenvolvimento de sistemas ponta a ponta, desde a prototipagem UX/UI no Figma até o frontend em React e JavaScript. Atuação em modelagem de dados, suporte a APIs, QA e documentação." 
        },
    ]
}

export const contentEN: ExperienceContent = {
    title: "Professional Experience",
    list: [
        {
            title: "IT Intern", 
            company: "Olho Do Dono S/A", 
            start: "March 2020", 
            end: "February 2022", 
            description: "Technical support, hardware and software maintenance, customer service, and image analysis/processing." 
        },
        {
            title: "Junior Front-end Developer and Designer", 
            company: "Portall System", 
            start: "February 2022", 
            end: "June 2022", 
            description: "Website development using JavaScript, HTML, and CSS. Creation of wireframes and prototypes in Figma, as well as social media designs and mockups." 
        },
        {
            title: "Technical Support and Systems Programmer", 
            company: "Inove9 Soluções", 
            start: "August 2022", 
            end: "August 2023", 
            description: "Implementation and maintenance of software for notary offices and clinics, technical support, customer service, and user-focused training." 
        },
        {
            title: "Systems Developer", 
            company: "Macroex Comercial Importadora e Exportadora", 
            start: "November 2023", 
            end: "January 2026", 
            description: "End-to-end system development, from UX/UI prototyping in Figma to frontend development using React and JavaScript. Experience in data modeling, API support, QA, and documentation." 
        },
    ]
}