import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Select = ({setStatus}) => {
    const navigate = useNavigate();
    return (
        <>
        <select onChange={(e) => {
            setStatus(e.target.value)
        }} name="clothes" id="gender">
                <option value="all">Все</option>
                <option value="man">Для мужчин</option>
                <option value="woman">Для женщин</option>
            </select>
        </>

    );
};

export default Select;