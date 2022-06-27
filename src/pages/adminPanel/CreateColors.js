import React from 'react';

const CreateColors = ({colors, setColors, color}) => {
    return (
        <li onClick={() => {
            setColors(color)
        }} style={{background: color, color: color === 'black' ? 'white' : '', border: '1px solid grey', cursor: 'pointer'}}
            className={`create__content-color ${colors === color ? 'create__color' : ''} `}/>
    );
};

export default CreateColors;