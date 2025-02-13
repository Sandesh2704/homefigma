import { TbTarget } from "react-icons/tb"
import { LuBookOpen } from "react-icons/lu"
import { CiCalendarDate } from "react-icons/ci"
import { VscGraph } from "react-icons/vsc"

const services = [
    {
        title: "Understanding Your Goals",
        description:
            "We begin by learning about your child's unique learning requirements, academic goals, and preferred teaching style to ensure a customized tutoring experience",
        icon: <TbTarget />,
        imageUrl: "/assests/help/07446903b07a56a8f431d15375c66be3.png",
    },
    {
        title: "Finding the Perfect Tutor",
        description:
            "Based on your preferences, we pair your child with an experienced tutor who specializes in the subject and grade level, ensuring the perfect match.",
        icon: <LuBookOpen />,
        imageUrl: "/assests/help/8cf5a92713f114f959795a7de6b73dca.png",
    },
    {
        title: "Personalized Learning Sessions",
        description:
            "Our tutors deliver tailored lessons, focusing on building understanding and confidence while addressing key areas for improvement.",
        icon: <CiCalendarDate />,
        imageUrl: "/assests/help/ca7b69c39f5863c6d90999b27501e9f4.png",
    },
    {
        title: "Tracking Progress & Feedback",
        description:
            "We provide regular progress updates and encourage open communication to ensure your child is thriving and achieving their academic goals.",
        icon: <VscGraph />,
        imageUrl: "/assests/help/07446903b07a56a8f431d15375c66be3.png",
    },
]

export default services;