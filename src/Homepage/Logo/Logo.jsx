import { useState, useEffect } from 'react';
import classes from './Logo.module.scss'

export default function Logo({ backgroundText, subText, contentLbl }) {
    const [intervalSecond, setIntervalSecond] = useState(0);
    const [logoSubValue, setLogoSubValue] = useState(subText);

    const handleLogoClick = () => {
        setIntervalSecond((prevSecond) => prevSecond + 1);
        if (intervalSecond % 2 === 0) {
            setLogoSubValue('Tree Services');
        } else {
            setLogoSubValue(subText);
        }
    };

    useEffect(() => {
        if (!(intervalSecond === 0 && contentLbl === 'About Us')) handleLogoClick();
    }, [contentLbl]);

    return (
        <div
            onClick={handleLogoClick}
            className={classes.logo_main}
            style={intervalSecond > 0 ? { animationDelay: '0s' } : {}}
            key={intervalSecond}
        >{backgroundText}
            <div
                style={intervalSecond > 0 ? { animationDelay: '.5s' } : {}}
                className={classes.logo_sub}
            >{logoSubValue}
            </div>
        </div>
    );
}