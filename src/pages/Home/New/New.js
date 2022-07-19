// import React, {useState} from 'react';
// import {GoChevronRight} from 'react-icons/go'
// import {Link} from "react-router-dom";
// import {animateScroll} from "react-scroll";
// import man from './bg123.jpeg'
// import woman from './bg321.jpeg'
// import all from './bg231.jpeg'
// import {changeStatus} from "../../../redux/reducers/clothes";
// import {useDispatch} from "react-redux";
// import {motion} from "framer-motion";
//
// const New = () => {
//     const dispatch = useDispatch();
//     const [active, setActive] = useState(0);
//     const [active2, setActive2] = useState(0);
//     const [active3, setActive3] = useState(0);
//     return (
//         <section className='new'>
//             <div className="container">
//                 <div className='new__content'>
//                     <div className='new__content-card' onMouseOver={() => setActive(1)} onMouseOut={() => setActive(0)}>
//                         <Link className='new__content-link' to='catalog/all' onClick={() => dispatch(changeStatus('man'))}>
//                             <img className='new__content-img' src={man} alt=""/>
//                             <div className='new__content-info'>
//                                 <h2 className={`new__content-title ${active ? 'new__content-title_active' : ''}`}>Мужчинам</h2>
//                                 <ul className={`new__content-list ${active ? 'new__content-list_active' : ''}`}>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/tshort' onClick={() => dispatch(changeStatus('man'))}>Футболки</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/sportsuit' onClick={() => dispatch(changeStatus('man'))}>Спортивки</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/sweatshirt' onClick={() => dispatch(changeStatus('man'))}>Свитшоты</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/hoody' onClick={() => dispatch(changeStatus('man'))}>Худи</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/pants' onClick={() => dispatch(changeStatus('man'))}>Штаны</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/jacket' onClick={() => dispatch(changeStatus('man'))}>Куртки</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/waistcoat' onClick={() => dispatch(changeStatus('man'))}>Жилеты</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/sneakers' onClick={() => dispatch(changeStatus('man'))}>Кроссовки</Link></li>
//                                 </ul>
//                             </div>
//                         </Link>
//                     </div>
//                     <div className='new__content-card' onMouseOver={() => setActive2(1)} onMouseOut={() => setActive2(0)}>
//                         <Link className='new__content-link' to='catalog/all' onClick={() => dispatch(changeStatus('woman'))}>
//                             <img className='new__content-img' src={woman} alt=""/>
//                             <div className='new__content-info'>
//                                 <h2 className={`new__content-title ${active2 ? 'new__content-title_active' : ''}`}>Женщинам</h2>
//                                 <ul className={`new__content-list ${active2 ? 'new__content-list_active' : ''}`}>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/tshort' onClick={() => dispatch(changeStatus('woman'))}>Футболки</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/sportsuit' onClick={() => dispatch(changeStatus('woman'))}>Спортивки</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/sweatshirt' onClick={() => dispatch(changeStatus('woman'))}>Свитшоты</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/hoody' onClick={() => dispatch(changeStatus('woman'))}>Худи</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/pants' onClick={() => dispatch(changeStatus('woman'))}>Штаны</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/jacket' onClick={() => dispatch(changeStatus('woman'))}>Куртки</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/waistcoat' onClick={() => dispatch(changeStatus('woman'))}>Жилеты</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/sneakers' onClick={() => dispatch(changeStatus('woman'))}>Кроссовки</Link></li>
//                                 </ul>
//                             </div>
//                         </Link>
//                     </div>
//                     <div className='new__content-card' onMouseOver={() => setActive3(1)} onMouseOut={() => setActive3(0)}>
//                         <Link className='new__content-link' to='catalog/all' onClick={() => dispatch(changeStatus('all'))}>
//                             <img className='new__content-img' src={all} alt=""/>
//                             <div className='new__content-info'>
//                                 <h2 className={`new__content-title ${active3 ? 'new__content-title_active' : ''}`}>Все</h2>
//                                 <ul className={`new__content-list ${active3 ? 'new__content-list_active' : ''}`}>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/tshort' onClick={() => dispatch(changeStatus('all'))}>Футболки</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/sportsuit' onClick={() => dispatch(changeStatus('all'))}>Спортивки</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/sweatshirt' onClick={() => dispatch(changeStatus('all'))}>Свитшоты</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/hoody' onClick={() => dispatch(changeStatus('all'))}>Худи</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/pants' onClick={() => dispatch(changeStatus('all'))}>Штаны</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/jacket' onClick={() => dispatch(changeStatus('all'))}>Куртки</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/waistcoat' onClick={() => dispatch(changeStatus('all'))}>Жилеты</Link></li>
//                                     <li className='new__content-item'><Link className='new__content-to' to='catalog/sneakers' onClick={() => dispatch(changeStatus('all'))}>Кроссовки</Link></li>
//                                 </ul>
//                             </div>
//                         </Link>
//                     </div>
//                 </div>
//
//             </div>
//         </section>
//     );
// };
//
// export default New;