import { FunctionComponent } from "react"

export type ExperienceData = { 
    role: string,
    skills: string, 
    company: string,
    location: string,
    dates: string,
    description: string[]
}

export type ProjectData = {
    title: string,
    technologies: string,
    dates: string,
    description: string[]
}
type ExperienceProps = {data: ExperienceData}
export type ExperienceComponent = FunctionComponent<ExperienceProps>

type ProjectProps = {data: ProjectData}
export type ProjectComponent = FunctionComponent<ProjectProps>