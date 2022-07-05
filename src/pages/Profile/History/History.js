import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import img from "../Rectangle 10 (5).png";
import Profile from "../Profile";
import PersonalData from "../PersonalData/PersonalData";
import {useSelector} from "react-redux";
import HistoryList from "./HistoryList";

const History = () => {
    const user = useSelector(s => s.user.user);
    // console.log(user)
    const [tab, setTab] = useState(2);

    return (
        <div className='history'>
            <div className="container">

                <div className='history__btns'>
                    <button onClick={() => setTab(1)}
                            className={`history__btn ${tab === 1 && 'history__btn-active'}`}>История заказов
                    </button>
                    <button onClick={() => setTab(2)}
                            className={`history__btn ${tab === 2 && 'history__btn-active'}`}>Личные данные
                    </button>
                </div>

                {
                    tab === 1
                        ?
                        user && user.orders.map(item => (
                            <HistoryList user={user}  item={item}/>
                        ))
                        :
                        tab === 2
                            ?
                            <PersonalData/>
                            :
                            ''

                }


            </div>
        </div>
    );
};

export default History;