import {ProjectComponent} from './types';

export const Project: ProjectComponent = ({data}) => {
    console.log(data)
    return (
        <div className="Project">
            <h1 className="exp-h1">{data.title} | {data.technologies}</h1>
            <h2 className="exp-h2">{data.dates}</h2>
            <ul>
                {data.description.map((content) => (
                    <li>{content}</li>
                ))}
            </ul>
        </div>
    );
}