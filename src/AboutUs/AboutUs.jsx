import classes from './AboutUs.module.scss';
import { PiTreeFill } from "react-icons/pi";

const AboutUs = () => {
    return (
        <div className={classes.about_us_cntnr} style={{ padding: '5%' }}>
            <p style={{ fontSize: '4.5cqh', color: '#98FF98'}}>We are Two Brothers, and We Kindly Remove Trees <PiTreeFill /></p>
            <p style={{ fontSize: '3cqh', fontWeight: 400}}>But, We Can Do So Much More...</p>
            <p style={{ fontSize: '3cqh', fontWeight: 400}}>Be it Furniture, Lumber, Firewood or Mulch.</p>
            <p style={{ fontSize: '3cqh', fontWeight: 400}}>We Convert Your Tree Into Any Form You Choose.</p>
            <p style={{ fontSize: '3cqh', fontWeight: 400}}>Let This 2-Brother-Business Help You Retain the Value of Your Tree <PiTreeFill /> </p>
        </div>
    );
}
export default AboutUs;