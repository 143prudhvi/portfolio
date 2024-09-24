import './skill-component.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillComponent = ({name, rating, icon}) => {
    return (
        <div className='skill'>
            <div className='skill-content'>
                <FontAwesomeIcon className='icon' icon={icon} />
                <div className='skill-detail'>
                    <div className='skill-name'>{name}</div>
                    <div className="skill-bar">
                        <div
                            className="skill-bar-fill"
                            style={{ width: `${rating * 10}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillComponent;