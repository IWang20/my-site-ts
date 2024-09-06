import {ExperienceComponent} from './types';

export const Experience: ExperienceComponent = ({data}) => {
    // console.log(data)
    return (
        <div className="Experience">
            <h1 className="exp-h1">{data.role} | {data.skills}</h1>
            <h2 className="exp-h2">{data.company} - {data.location} | {data.dates}</h2>
            <ul>
                {data.description.map((content) => (
                    <li>{content}</li>
                ))}
            </ul>
        </div>
    );
}