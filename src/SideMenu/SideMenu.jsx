import { BsTree, BsTreeFill } from 'react-icons/bs';
import classes from './SideMenu.module.scss';
import { useState } from 'react';
const SideMenu = ({ setContentLbl }) => {
    const [selected, setSelected] = useState('About Us');
    const [hoveredElement, setHoveredELement] = useState('');
    const handleSelect = (content) => {
        setSelected(content);
        setContentLbl(content);
    }
    return (
        <div className={classes.menu_wrapper}>
            <div onMouseEnter={() => setHoveredELement('About Us')} onMouseLeave={() => setHoveredELement('')} className={selected === 'About Us' ? classes.first : selected === 'Free Quote' ? classes.third : classes.second}>
                <button style={{ color: [selected, hoveredElement].includes('About Us') ? 'whitesmoke' : 'darkgray' }} onClick={() => handleSelect('About Us')}>
                    {selected === 'About Us' ? <BsTreeFill /> : <BsTree />} About Us
                </button>
            </div>
            <div onMouseEnter={() => setHoveredELement('Free Quote')} onMouseLeave={() => setHoveredELement('')}  className={selected === 'Free Quote' ? classes.first : selected === 'About Us' ? classes.second : classes.third}>
                <button style={{ color: [selected, hoveredElement].includes('Free Quote') ? 'whitesmoke' : 'darkgray' }} onClick={() => handleSelect('Free Quote')}>
                {selected === 'Free Quote' ? <BsTreeFill /> : <BsTree />}  Free Quote
                </button>
            </div>
            <div onMouseEnter={() => setHoveredELement('Services')} onMouseLeave={() => setHoveredELement('')} className={selected === 'Services' ? classes.first : selected === 'Free Quote' ? classes.second : classes.third}>
                <button style={{ color: [selected, hoveredElement].includes('Services') ? 'whitesmoke' : 'darkgray' }} onClick={() => handleSelect('Services')}>
                {selected === 'Services' ? <BsTreeFill /> : <BsTree />}  Services
                </button>
            </div>
        </div>
    );
}
export default SideMenu;