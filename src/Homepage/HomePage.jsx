import { useState, useEffect } from 'react';
import classes from './Homepage.module.scss';
import Logo from './Logo/Logo';
import Services from '../Services/Services';
import AboutUs from '../AboutUs/AboutUs';
import FreeQuote from '../FreeQuote/FreeQuote';
import SideMenu from '../SideMenu/SideMenu';

const Homepage = () => {
  const [contentLbl, setContentLbl] = useState('About Us');
  const [delayAnimation, setDelayAnimation] = useState(true);

  useEffect(() => {
    if (contentLbl !== 'About Us') setDelayAnimation(false);
  }, [contentLbl]);

  return (
    <div className={classes.home}>
      <div className={classes.menu_logo_grid}>
        <Logo backgroundText="BB" subText={"Benson Brothers"} contentLbl={contentLbl} />
        <div>
          <SideMenu setContentLbl={setContentLbl} />
        </div>
      </div>
      <div
        style={{
          animationDelay: delayAnimation ? '3s' : '0s',
          animationDuration: delayAnimation ? '2s' : '.8s'
        }}
        key={contentLbl}
        className={classes.content_container}
      >
        {
          contentLbl === 'About Us' ? <AboutUs />
            : contentLbl === 'Services' ? <Services />
              : <FreeQuote />
        }
      </div>
      <div className={classes.trunk} />
      <div className={classes.tree}>
        <div className={classes.tree_top} />
      </div>
    </div>
  );
}
export default Homepage;