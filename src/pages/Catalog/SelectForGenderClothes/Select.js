import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const Select = () => {

    const navigate = useNavigate();
    return (
        <>
        <select onChange={(e) => {
            if (e.target.value === 'man') {
                navigate('../catalog/man')
            } else if (e.target.value === 'woman') {
                navigate('../catalog/woman')
            } else {
                navigate('../catalog/all')
            }
        }} name="clothes" id="gender">
                <option value="all">Все</option>
                <option value="man">Для мужчин</option>
                <option value="woman">Для женщин</option>
            </select>
        </>

    );
};

export default Select;