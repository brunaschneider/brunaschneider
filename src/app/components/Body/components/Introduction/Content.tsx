import { JSX } from "react"
import { IconType } from "react-icons"
import { FaCheckCircle, FaCode, FaDatabase, FaFlagUsa, FaGitAlt, FaLaptopCode, FaPaintBrush, FaProjectDiagram, FaUserGraduate } from "react-icons/fa"
import { LuMonitorStop } from "react-icons/lu"
import { MdWork } from "react-icons/md"
import { RiRobot2Fill } from "react-icons/ri"

export type IntroductionContent = {
    name: string,
    email: string,
    intro?: string,
    listTitle?: string,
    list: InfoList[],
    outro?: string
}

export type InfoList = {
    icon?: IconType | JSX.Element,
    text: string
}

const getYearsDiff = (year: number): number => {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
};

export const contentPTBR: IntroductionContent = {
    name: "Bruna Schneider Fonseca",
    email: "brunaschneiderhenke@gmail.com",
    intro: "Prazer, meu nome é Bruna e sou Desenvolvedora Front-end com forte atuação em UX/UI Design.",
    listTitle: "Algumas das minhas qualificações incluem:",
    list: [
        {
            icon: <MdWork />,
            text: "6 anos de experiência profissional em TI;"
        },
        {
            icon: <FaCode />,
            text: "3 anos atuando como desenvolvedora de sistemas;"
        },
        {
            icon: <FaLaptopCode />,
            text: "Desenvolvimento Front-end com ReactJS e JavaScript;"
        },
        {
            icon: <FaLaptopCode />,
            text: "Desenvolvimento de Testes Automatizados com Cypress;"
        },
        {
            icon: <FaPaintBrush />,
            text: "Prototipagem de alta fidelidade e UX/UI Design no Figma;"
        },
        {
            icon: <FaDatabase />,
            text: "Modelagem de dados e suporte a métodos CRUD em APIs;"
        },
        {
            icon: <FaCheckCircle />,
            text: "Garantia de Qualidade (QA) e documentação técnica;"
        },
        {
            icon: <FaUserGraduate />,
            text: "Graduada em Análise e Desenvolvimento de Sistemas;"
        },
        {
            icon: <FaUserGraduate />,
            text: "Cursando MBA em Gestão de Projetos e Metodologias Ágeis;"
        },
        {
            icon: <FaGitAlt />,
            text: "Controle de versão eficiente via Git."
        }
    ],
    outro: "e muito mais..."
}

export const contentEN: IntroductionContent = {
    name: "Bruna Schneider Fonseca",
    email: "brunaschneiderhenke@gmail.com",
    intro: "Nice to meet you, my name is Bruna and I am a Front-end Developer with strong experience in UX/UI Design.",
    listTitle: "Some of my qualifications include:",
    list: [
        {
            icon: <MdWork />,
            text: "6 years of professional experience in IT;"
        },
        {
            icon: <FaCode />,
            text: "3 years working as a systems developer;"
        },
        {
            icon: <FaLaptopCode />,
            text: "Front-end development with ReactJS and JavaScript;"
        },
        {
            icon: <FaLaptopCode />,
            text: "Automated testing development with Cypress;"
        },
        {
            icon: <FaPaintBrush />,
            text: "High-fidelity prototyping and UX/UI Design using Figma;"
        },
        {
            icon: <FaDatabase />,
            text: "Data modeling and support for CRUD methods in APIs;"
        },
        {
            icon: <FaCheckCircle />,
            text: "Quality Assurance (QA) and technical documentation;"
        },
        {
            icon: <FaUserGraduate />,
            text: "Associate degree in Systems Analysis and Development;"
        },
        {
            icon: <FaUserGraduate />,
            text: "Currently pursuing an MBA in Project Management and Agile Methodologies;"
        },
        {
            icon: <FaGitAlt />,
            text: "Efficient version control using Git."
        }
    ],
    outro: "and much more..."
}