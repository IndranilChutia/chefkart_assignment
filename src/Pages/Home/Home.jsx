import { useState } from 'react';
import './Home.scss';

import backArrow from '../../Assets/backArrow.svg'
import datePickerImg from '../../Assets/Select_date.svg'
import timePickerImg from '../../Assets/Set_time.svg'
import triangleDown from '../../Assets/downTriangle.svg'
import burgerDrinkWhite from '../../Assets/burgerDrinkWhite.svg'
import arrowrightalt from '../../Assets/arrow_right_alt.svg'


import PopularDishes from './PopularDishes/PopularDishes';
import DishCardSection from './DishCardSection/DishCardSection';

const tagsData = [
    { tag: "Italian", selected: true },
    { tag: "Indian", selected: false },
    { tag: "Chinese", selected: false },
    { tag: "Mexican", selected: false },
    { tag: "Vegan", selected: false }
]


const Home = () => {

    const [date, setDate] = useState('21 May 2021');
    const [tags, setTags] = useState(tagsData);



    const tagClick = (index) => {
        const updatedTags = [...tags];
        updatedTags[index].selected = !updatedTags[index].selected;
        console.log(updatedTags[index].selected)

        setTags(updatedTags);
    }

    return (
        <div className='main'>

            {/* Top Navigation */}
            <div className="topNavigation">
                <img src={backArrow} alt="backArr" className='nav-back-arr' />
                <h2 className='nav-text'>Select Dishes</h2>
            </div>
            {/* Upper Part Fixed*/}
            <div className="upperPart">



                {/* Black Background DateTimePicker*/}
                <div className="black-bg-dt"></div>


                {/* Hero Container */}
                <div className="hero">

                    {/* Date & Time Picker */}
                    <div className="date-time-wrapper">

                        <div className="date-time-container flex-row">
                            {/* Date Picker */}
                            <div className="date-picker flex-row">
                                <img src={datePickerImg} alt="date-picker-png" />
                                <p>{date}</p>
                            </div>

                            {/* Divider */}
                            <hr className='date-time-divider'></hr>

                            {/* Time Picker */}
                            <div className="time-picker flex-row">
                                <img src={timePickerImg} alt="time-picker-png" />
                                <p>10:30 PM-12:30 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="tags-container">
                        {tags.map((item, key) => {
                            return (
                                <button className={`${item.selected ? 'selectedTag' : 'unselectedTag'}`} key={key} onClick={() => tagClick(key)}>
                                    <p>{item.tag}</p>
                                </button>
                            )
                        })}
                    </div>

                    {/* Popular Dishes */}
                    <PopularDishes />

                </div>

            </div>

            {/* Lower Part Scroll*/}
            <div className="lowerPart flex-col">
                <div className="recommended-container flex-row">
                    <h1 className='flex-row'>Recommended <img src={triangleDown} alt="drop-down" /></h1>
                    <button>Menu</button>
                </div>
                <div className='dish-cards-wrapper'>
                    <DishCardSection />
                </div>
            </div>

            {/* Fixed Added Items Popup */}
            <div className="added-item-popup">
                <div className='popup-text-container'>
                    <img src={burgerDrinkWhite} alt="burgerDrink" />
                    <h3>3 food items selected</h3>
                </div>
                <img src={arrowrightalt} alt="arrowright" />
            </div>

        </div>

    );
};

export default Home;