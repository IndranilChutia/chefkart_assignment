import './Ingredients.scss';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr'

import backArrow from '../../Assets/backArrow.svg'
import starWhite from '../../Assets/star-white.svg'
import clock from '../../Assets/clock.svg'
import rightImg from '../../Assets/herbsImg.png'
import applianceImg from '../../Assets/appliance.png'

import ItemList from './ItemList/ItemList';


// Fetcher Function
const fetcher = (...args) => fetch(...args).then(res => res.json());

const Ingredients = () => {
    const navigate = useNavigate();

    const { data } = useSWR("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1", fetcher);


    return (
        <div className='main'>

            <div className="rightCircle"></div>
            <img className="rightImg" src={rightImg} alt="rightImg" />

            {/* Top Navigation */}
            <div className="topNavigation">
                <img
                    src={backArrow}
                    alt="backArr"
                    className='nav-back-arr'
                    onClick={() => navigate(-1)} />

                <h2 className='nav-text'>Ingredients</h2>
            </div>

            {/* Upper Part*/}
            <div className="ingredients-name-desc-wrapper">
                <h1>{data?.name}
                    <div className="dc-rating">
                        <p>4.2</p>
                        <img src={starWhite} alt="star" />
                    </div>
                </h1>

                {/* Description */}
                <p className='dish-desc'>Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.</p>

                {/* Time to Prepare */}
                <div className="prep-time-container flex-row-left">
                    <img src={clock} alt="clock" />
                    <p className='prep-time-text'>{data?.timeToPrepare}</p>
                </div>
            </div>


            {/* Divider */}

            <hr className='divider-ingredients' />

            {/* Ingredients */}
            <div className="ingredients-wrapper">
                <div className='ingredients-text'>
                    <h2 className='subHeading-ingredient'>Ingredients</h2>
                    <p>For 2 people</p>
                </div>

                {/* Item List */}
                <ItemList name="Vegetables" data={data?.ingredients.vegetables} />
                <ItemList name="Spices" data={data?.ingredients.spices} />
            </div>


            {/* Appliances */}
            <div className="appliances-wrapper">
                <h2 className="subHeading-ingredient">Appliances</h2>
                <div className="appliances-container">
                    {data?.ingredients.appliances.map((item, key)=>{
                        return(
                            <div key={key} className="appliance">
                                <img src={applianceImg} alt="" />
                                <p>{item.name}</p>
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    );
};

export default Ingredients;