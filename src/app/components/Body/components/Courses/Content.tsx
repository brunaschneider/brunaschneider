import { IconType } from "react-icons"
import { FaClock, FaDatabase, FaLightbulb, FaPaintBrush, FaUsers } from "react-icons/fa"
import { FaLaptopCode } from "react-icons/fa6"
import { TbCloudComputing } from "react-icons/tb"
import { JSX } from "react/jsx-dev-runtime"

export type CoursesContent = {
    title?: string,
    list?: CoursesList[]
}

export type CoursesList = {
    icon?: IconType | JSX.Element,
    title?: string,
    platform?: string,
    start?: string,
    end?: string,
    description?: string
}

export const contentPTBR: CoursesContent = {
    title: "Cursos e Especializações",
    list: [
        {
            icon: <FaUsers />,
            title: "Liderando Equipes de Alta Performance",
            platform: "PUCRS",
            start: "2026",
            end: "2026",
            description: "Curso de extensão focado em liderança e gestão de equipes de alto desempenho."
        },
        {
            icon: <FaClock />,
            title: "Gestão de Tempo",
            platform: "Solides Escola de Pessoas",
            start: "2025",
            end: "2025",
            description: "Desenvolvimento de competências para otimização de produtividade e organização pessoal."
        },
        {
            icon: <FaLightbulb />,
            title: "Criatividade e Inovação",
            platform: "Solides Escola de Pessoas",
            start: "2025",
            end: "2025",
            description: "Estratégias para transformação de negócios através de processos criativos e inovadores."
        },
        {
            icon: <FaPaintBrush />,
            title: "UI Design, Design de Interface de Usuário",
            platform: "Udemy",
            start: "2024",
            end: "2024",
            description: "Especialização em criação de interfaces visuais modernas e funcionais para produtos digitais."
        },
        {
            icon: <FaLaptopCode />,
            title: "C# COMPLETO Programação Orientada a Objetos + Projetos",
            platform: "Udemy",
            start: "2024",
            end: "2024",
            description: "Especialização em C# e Programação Orientada a Objetos, abrangendo desde fundamentos até o desenvolvimento de projetos práticos."
        }
    ]
}

export const contentEN: CoursesContent = {
    title: "Courses and Specializations",
    list: [
        {
            icon: <FaUsers />,
            title: "Leading High-Performance Teams",
            platform: "PUCRS",
            start: "2026",
            end: "2026",
            description: "Extension course focused on leadership and management of high-performance teams."
        },
        {
            icon: <FaClock />,
            title: "Time Management",
            platform: "Solides Escola de Pessoas",
            start: "2025",
            end: "2025",
            description: "Development of skills to optimize productivity and personal organization."
        },
        {
            icon: <FaLightbulb />,
            title: "Creativity and Innovation",
            platform: "Solides Escola de Pessoas",
            start: "2025",
            end: "2025",
            description: "Strategies for business transformation through creative and innovative processes."
        },
        {
            icon: <FaPaintBrush />,
            title: "UI Design, User Interface Design",
            platform: "Udemy",
            start: "2024",
            end: "2024",
            description: "Specialization in creating modern and functional visual interfaces for digital products."
        },
        {
            icon: <FaLaptopCode />,
            title: "Complete C# Object-Oriented Programming + Projects",
            platform: "Udemy",
            start: "2024",
            end: "2024",
            description: "Specialization in C# and Object-Oriented Programming, covering from fundamentals to the development of practical projects."
        }
    ]
}