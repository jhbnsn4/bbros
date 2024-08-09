import { useState } from 'react';
import classes from './FreeQuote.module.scss';
import { BsPerson, BsTree, BsTreeFill } from 'react-icons/bs';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
const FreeQuote = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [size, setSize] = useState('');
    const [obstructed, setObscructed] = useState('');
    return (
        <div style={{ padding: '2.5%' }}>
            <p style={{ fontSize: '2cqh' }}>Just A Few Questions.</p>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ fontSize: name ? '3cqh' : '1.5cqh' }}
                placeholder='Name'
                className={classes.free_quote_input}
            />
            <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                style={{ fontSize: number ? '3cqh' : '1.5cqh' }}
                required
                type='tel'
                pattern='[0-9] {3}-[0-9]{3}-[0-9]{4}'
                placeholder='Number'
                className={classes.free_quote_input}
            />
            <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ fontSize: address ? '3cqh' : '1.5cqh' }}
                placeholder='Address'
                className={classes.free_quote_input}
            />
            <p style={{ fontSize: '12px' }}>Your Best Guess.</p>
            <div style={{ display: 'inline-flex', cursor: 'pointer', alignItems: 'baseline', width: '55%', justifyContent: 'space-between' }}>
                <div><BsTreeFill onClick={() => setSize('small')} color={size === 'small' ? '#98FF98' : 'whitesmoke'} size={8} />
                    <p onClick={() => setSize('small')} style={{ fontSize: '10px', color: size === 'small' ? '#98FF98' : 'whitesmoke' }}>Small</p>
                </div>
                <div>
                    <BsTreeFill onClick={() => setSize('medium')} color={size === 'medium' ? '#98FF98' : 'whitesmoke'} size={16} />
                    <p onClick={() => setSize('medium')} style={{ fontSize: '10px', color: size === 'medium' ? '#98FF98' : 'whitesmoke' }}>Medium</p>
                </div>
                <div>
                    <BsTreeFill onClick={() => setSize('large')} color={size === 'large' ? '#98FF98' : 'whitesmoke'} size={24} />
                    <p onClick={() => setSize('large')} style={{ fontSize: '10px', color: size === 'large' ? '#98FF98' : 'whitesmoke' }}>Large</p>
                </div>
            </div>
            <p style={{ fontSize: '12px' }}>Will the tree fall on anything?</p>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                style={{ display: 'inline-flex' }}
                onChange={(e) => setObscructed(e.target.value)}
                row
            >
                <FormControlLabel
                    value="yes"
                    control={<Radio checked={obstructed === 'yes'} sx={{ '& .MuiSvgIcon-root': { fontSize: 8, color: 'whitesmoke' }, }} />}
                    label={<span style={{ fontSize: '8px' }}>Yes</span>}
                />
                <FormControlLabel
                    value="maybe"
                    control={<Radio checked={obstructed === 'maybe'} sx={{ '& .MuiSvgIcon-root': { fontSize: 8, color: 'whitesmoke' }, }} />}
                    label={<span style={{ fontSize: '8px' }}>Not Sure</span>}
                />
                <FormControlLabel
                    value="no"
                    control={<Radio checked={obstructed === 'no'} sx={{ '& .MuiSvgIcon-root': { fontSize: 8, color: 'whitesmoke' }, }} />}
                    label={<span style={{ fontSize: '8px' }}>No</span>}
                />
            </RadioGroup>
            <div>
            <button className={classes.submit_btn}>Submit</button>
            </div>
        </div>
    );
}
export default FreeQuote;