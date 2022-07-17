import React, {useEffect, useRef, useState} from 'react';
import CreateColors from "./CreateColors";
import CreateSizes from "./CreateSizes";
import axios from "../../axios";
import ClothesAddBtn from "./ClothesAddBtn";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


const ClothesUpdate = () => {

    const {
        register,
        reset,
        handleSubmit
    } = useForm()

    const navigate = useNavigate();
    const params = useParams()
    const [clothes, setClothes] = useState({})



    const [colors, setColors] = useState('');
    const [sizes, setSizes] = useState([]);
    const [images, setImages] = useState([])
    const [gender, setGender] = useState('')
    const [category, setCategory] = useState('')


    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')
    const [image5, setImage5] = useState('')

    useEffect(() => {
        axios(`clothes/${params.id}`).then(({data}) => {
            setClothes(data)
            setColors(data.colors)
            setImage1(data.images[0])
            if (data.images[1]){
                setImage2(data.images[1])
            }
            if (data.images[2]){
                setImage3(data.images[2])
            }
            if (data.images[3]){
                setImage4(data.images[3])
            }
            if (data.images[4]){
                setImage5(data.images[4])
            }
            setSizes(data.sizes)
            setGender(data.gender)
            setCategory(data.category)
        })
    },[])

    const addClothe =  (data) => {

        try {
             axios.patch(`clothes/${params.id}`, {
                title: data.title.length ? data.title : clothes.title,
                price: data.price.length ? +data.price : clothes.price,
                inStock: data.inStock.length ? +data.inStock : clothes.inStock,
                category: data.category.length ? data.category : clothes.category,
                gender,
                colors,
                sizes,
                images : images
            }).then((res) => {
                console.log(res.data)
                navigate('/admin/clothes')
                toast("Продукт успешно изменён");

            }).catch(() => {
                toast("Ошибка при изменении продукта")
            })

        } catch (err) {
            toast("Ошибка при изменении продукта")
        }
    }

    useEffect( () => {
        setImages([image1,image2,image3,image4, image5])
    }, [image1,image2,image3,image4, image5]);


    return (
        <form className='create__form-content' onSubmit={handleSubmit(addClothe)}>
            <div className='create__form-block'>
                <label htmlFor="title">Название</label>
                <input {...register('title')} defaultValue={clothes.title} className='create__form-input'  type="text" id='title'/>
            </div>
            <div className='create__form-block'>
                <label htmlFor="price">Цена</label>
                <input {...register('price')} defaultValue={clothes.price} className='create__form-input'  type="number" id='price'/>
            </div>
            <div className='create__form-block'>
                <label htmlFor="inStock">Количество</label>
                <input {...register('inStock')} defaultValue={clothes.inStock} className='create__form-input'  type="number" id='inStock'/>
            </div>
            <ul style={{display:"flex", flexDirection:"column", rowGap:"10px", alignItems: "flex-start"}} className='create__form-block'>
                <ClothesAddBtn images={image1} setImages={setImage1} num={1}/>
                <ClothesAddBtn images={image2} setImages={setImage2} num={2}/>
                <ClothesAddBtn images={image3} setImages={setImage3} num={3}/>
                <ClothesAddBtn images={image4} setImages={setImage4} num={4}/>
                <ClothesAddBtn images={image5} setImages={setImage5} num={5}/>
            </ul>
            <div>
                <div>
                    <ul className='create__form-colors'>
                        <li>Выберите цвет : </li>
                        <CreateColors colors={colors} setColors={setColors} color='blue'/>
                        <CreateColors colors={colors} setColors={setColors} color='black'/>
                        <CreateColors colors={colors} setColors={setColors} color='white'/>
                        <CreateColors colors={colors} setColors={setColors} color='red'/>
                        <CreateColors colors={colors} setColors={setColors} color='green'/>
                        <CreateColors colors={colors} setColors={setColors} color='orange'/>
                        <CreateColors colors={colors} setColors={setColors} color='pink'/>
                        <CreateColors colors={colors} setColors={setColors} color='grey'/>
                    </ul>
                </div>
            </div>
            <div>
                <ul className='create__form-sizes'>
                    <li>Выбрать размер :</li>
                    <CreateSizes sizes={sizes} setSizes={setSizes} size='XS'/>
                    <CreateSizes sizes={sizes} setSizes={setSizes} size='S'/>
                    <CreateSizes sizes={sizes} setSizes={setSizes} size='M'/>
                    <CreateSizes sizes={sizes} setSizes={setSizes} size='L'/>
                    <CreateSizes sizes={sizes} setSizes={setSizes} size='XL'/>
                    <CreateSizes sizes={sizes} setSizes={setSizes} size='XXL'/>
                </ul>
            </div>
            <div className='create__form-gender'>

                <FormLabel id="demo-controlled-radio-buttons-group">Товар для :</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby=" demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}

                >
                    <FormControlLabel value="man" control={<Radio />} label="Для мужчин" />
                    <FormControlLabel value="woman" control={<Radio />} label="Для женщин" />
                    <FormControlLabel value="uni" control={<Radio />} label="Унисекс" />
                </RadioGroup>
            </div>
            <div className='create__form-block'>
                    <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Категория"
                        value={category}
                        {...register('category')}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <MenuItem value={'hoody'}>hoody</MenuItem>
                        <MenuItem value={'sportsuit'}>sportsuit</MenuItem>
                        <MenuItem value={'sweatshirt'}>sweatshirt</MenuItem>
                        <MenuItem value={'tshort'}>tshort</MenuItem>
                        <MenuItem value={'pants'}>pants</MenuItem>
                        <MenuItem value={'shorts'}>shorts</MenuItem>
                        <MenuItem value={'waistcoat'}>waistcoat</MenuItem>
                        <MenuItem value={'sneakers'}>sneakers</MenuItem>
                    </Select>

            </div>
            <button className='create__form-btn' type='submit'>Изменить</button>
        </form>
    );
};

export default ClothesUpdate;