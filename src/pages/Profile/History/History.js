import React, {useState} from "react";

import PersonalData from "../PersonalData/PersonalData";
import {useSelector} from "react-redux";
import HistoryList from "./HistoryList";

const History = () => {
    const user = useSelector(s => s.user.user);
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

                            <React.Fragment key={item.id + item.time}>
                                <HistoryList user={user}  item={item}/>
                            </React.Fragment>
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