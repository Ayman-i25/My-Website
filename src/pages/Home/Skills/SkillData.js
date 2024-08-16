import { GrHtml5, GrCss3, GrReactjs } from "react-icons/gr";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";
import { FaGitSquare } from "react-icons/fa";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { SiMicrosoftexcel, SiMicrosoftword,SiMui  } from "react-icons/si";
import { MdDraw } from "react-icons/md";

export const skillData = [
    {
        title: 'HTML',
        icone: <GrHtml5 style={{ color: '#ff4444 ' }} />,
    },
    {
        title: 'CSS',
        icone: <GrCss3 style={{ color: '#007bff' }} />,
    },
    {
        title: 'JavaScript',
        icone: <BiLogoJavascript style={{ color: 'yellow' }} />,
    },
    {
        title: 'Bootstrap',
        icone: <FaBootstrap style={{ color: '#8800ff' }} />,
    },
    {
        title: 'Material-UI',
        icone: <SiMui style={{ color: '#1976d2' }} />,
    },
    {
        title: 'React.js',
        icone: <GrReactjs style={{ color: '#6c6cff' }} />,
    },
    {
        title: 'TypeScript',
        icone: <BiLogoTypescript style={{ color: '#06d9d9' }} />,
    },
    {
        title: 'Git & GitHub',
        icone: <FaGitSquare style={{ color: '#515151' }} />,
    },
    {
        title: 'Photoshop',
        icone: <DiPhotoshop style={{ color: '#3333ff' }} />,
    },
    {
        title: 'Illustrator',
        icone: <DiIllustrator style={{ color: '#ff6c00' }} />,
    },
    {
        title: 'CorelDRAW',
        icone: <MdDraw style={{ color: 'green' }} />,
    },
    {
        title: 'Excel',
        icone: <SiMicrosoftexcel style={{ color: '#4bf14b' }} />,
    },
    {
        title: 'Word',
        icone: <SiMicrosoftword style={{ color: '#007bff' }} />,
    },

]