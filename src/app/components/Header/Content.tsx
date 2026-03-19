import { JSX } from "react";
import { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export type HeaderContentItem = {
    title: string;
    url?: string;
    icon?: IconType | JSX.Element;
};

export const items: HeaderContentItem[] = [
    {
        title: "Linkedin",
        url: "https://www.linkedin.com/in/bruna-schneider-fonseca-9065201a1/",
        icon: <FaLinkedin />
    },
    {
        title: "GitHub",
        url: "https://github.com/brunaschneider",
        icon: <FaGithub />
    },
    {
        title: "E-mail",
        url: "mailto:brunaschneiderhenke@gmail.com",
        icon: <FaEnvelope />
    },
]