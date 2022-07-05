import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeStatus} from "../../../redux/reducers/clothes";

const Select = () => {

    const dispatch = useDispatch()
    const status = useSelector(s => s.clothes.status)
    return (
        <>
        <select value={status} onChange={(e) => {
            dispatch(changeStatus(e.target.value))
        }} name="clothes" id="gender">
                <option value="all">Все</option>
                <option value="man">Для мужчин</option>
                <option value="woman">Для женщин</option>
            </select>
        </>

    );
};

export default Select;