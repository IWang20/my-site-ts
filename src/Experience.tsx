import './Experience.css';
import {ExperienceComponent} from './types';

export const Experience: ExperienceComponent = ({data}) => {
    console.log(data)
    return (
        <div className="Experience">
            <div className="exp-h1">{data.role} | test</div>
        </div>
    );
}