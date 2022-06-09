import React, {useEffect, useState} from 'react';
import {getData, createProduct} from "./firebaseFunction";
import {useForm} from "react-hook-form";


const Home = () => {

    const [shoes, setShoes] = useState([]);
    const [progress ,setProgress] = useState(0);

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    useEffect(() => {
        getData(setShoes)
    }, []);

    const addProduct =  (data) => {
        createProduct(data.image[0], setProgress, {...data, size: [45,46,47]}, setShoes);
        reset()
    };


    return (
        <section className='home'>
            <div className="container">
                <h2>home</h2>

                {
                    shoes.map(item => (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <h3>{item.price}</h3>
                            <img src={item.image} alt=""/>
                        </div>
                    ))
                }

                <hr/>

                <form onSubmit={handleSubmit(addProduct)}>
                    <input {...register("title")} type="text"/>
                    <input {...register("color")} type="text"/>
                    <input {...register("price")} type="number"/>
                    <input {...register("image")} type="file"/>
                    <button type='submit'>add</button>
                </form>
                <p>upload done {progress } %</p>
            </div>
        </section>
    );
};

export default Home;