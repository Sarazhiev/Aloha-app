import React, {useEffect, useState} from 'react';
import CreateColors from "./CreateColors";

const ClothesAdd = () => {
    const [colors, setColors] = useState([]);

    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    const [fourth, setFourth] = useState('');
    const [fifth, setFifth] = useState('');
    const [sixth, setSixth] = useState('');
    const [all, setAll] = useState([true, false,false,false,false,false,false]);
    const [more, setMore] = useState(0);

    useEffect(() => {
        setAll(all.map((item,idx) => idx === more ? true : item ))
    },[more]);

    return (
        <form className='create__form-content'>

            <div className='create__form-block'>
                <label htmlFor="title">Название</label>
                <input className='create__form-input'  type="text" id='title'/>
            </div>
            <div className='create__form-block'>
                <label htmlFor="price">Цена</label>
                <input className='create__form-input'  type="number" id='price'/>
            </div>
            <div className='create__form-block'>
                <label htmlFor="inStock">Количество</label>
                <input className='create__form-input'  type="number" id='inStock'/>
            </div>
            <ul className='create__form-block'>
                {all.map((item) => {
                    return item && (
                        <li>
                            <label htmlFor="image">Картинка</label>
                            <input  type="file" id='image'/>
                        </li>
                    )
                })}
            </ul>




            <div>
                <div>
                    <ul className='create__form-colors'>
                        <li>Выберите цвет :</li>
                        <CreateColors colors={colors} setColors={setColors} color='blue'/>
                        <CreateColors colors={colors} setColors={setColors} color='black'/>
                        <CreateColors colors={colors} setColors={setColors} color='white'/>
                        <CreateColors colors={colors} setColors={setColors} color='red'/>
                        <CreateColors colors={colors} setColors={setColors} color='green'/>
                        <CreateColors colors={colors} setColors={setColors} color='orange'/>
                    </ul>
                </div>
            </div>
            <div>
                <ul className='create__form-sizes'>

                </ul>
            </div>
            <div className='create__form-block'>
                <label htmlFor="category">Категория</label>
                <select className='create__form-select'  id='category'>
                    <option>hoody</option>
                    <option>sportsuit</option>
                    <option>sweatshirt</option>
                    <option>tshort</option>
                </select>
            </div>
            <button className='create__form-btn' type='submit'>Создать</button>
        </form>
    );
};

export default ClothesAdd;