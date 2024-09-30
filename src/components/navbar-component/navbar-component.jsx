import './navbar-component.scss';
import Logo from './../../assets/Images/ProfilePic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({aboutRef, skillsRef, eduRef, expRef, projectRef, contactRef, onClickHandler}) => {
    return(
        <div className='navbar'>
            <div className='navbar-container'>
                <div className='profile'>
                    <div className='profile-pic-ring'>
                        <img src={Logo} />
                    </div>
                    <div className='profile-name'>Venkata Annabathina</div>
                </div>
                <div className='menu-icon'>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className='menu'>
                    <div className='menu-item' onClick={() => onClickHandler(aboutRef)}>About</div>
                    <div className='menu-item' onClick={() => onClickHandler(skillsRef)}>Skills</div>
                    <div className='menu-item' onClick={() => onClickHandler(eduRef)}>Education</div>
                    <div className='menu-item' onClick={() => onClickHandler(expRef)}>Experience</div>
                    <div className='menu-item' onClick={() => onClickHandler(projectRef)}>Projects</div>
                    <div className='menu-item' onClick={() => onClickHandler(contactRef)}>Contact</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;