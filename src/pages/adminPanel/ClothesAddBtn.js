import React, {useRef} from 'react';
import axios from "../../axios";

const ClothesAddBtn = ({images,setImages, num}) => {

    const image = useRef()

    const handleChangeImage1 = async (e) => {
        try {
            const formData = new FormData()
            const file = e.target.files[0]
            formData.append('image', file)
            await axios.post('/upload', formData).then(({data}) =>  setImages(data.url))

        } catch (err){
            console.log(err, 'Ошибка')
            alert('Ошибка при загрузке файла')
        }

    }

    return (
        <li>
            <button onClick={() => image.current.click()} type='button'>Загрузить картинку {num}</button>
            <input ref={image}  hidden  type="file" onChange={handleChangeImage1} id='image'/>
            {
                images && (
                    <>
                        <img style={{width:'50px'}} src={`http://localhost:4444${images}`} alt="Uploaded"/>
                        <button onClick={() => setImages('')} type='button'>Удалить картинку</button>
                    </>
                )
            }
        </li>
    );
};

export default ClothesAddBtn;