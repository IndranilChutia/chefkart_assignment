import './DishCardSection.scss'
import useSWR from 'swr';
import { Link } from 'react-router-dom';

import vegLogo from '../../../Assets/veg.svg'
import starWhite from '../../../Assets/star-white.svg'
import refrigerator from '../../../Assets/Refrigerator.svg'
import triangleArrow from '../../../Assets/keyboard_arrow_right.svg'




const fetcher = (...args) => {
    fetch(...args).then(res => res.json());
}


const DishCard = () => {
    const { data,isLoading } = useSWR('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/', fetcher);

    return (
        isLoading ? <h2>Loading...</h2> : 
        <>
            {data?.dishes.map((item) => {
                return (
                    <>
                    <div className='dishCard'>
                        <div className="dc-leftPart">
                            
                            {/* Name & Rating */}
                            <div className="dc-name-container">
                                <h2>{item.name}</h2>
                                <img src={vegLogo} alt="veg" />

                                <div className="dc-rating">
                                    <p>{item.rating}</p>
                                    <img src={starWhite} alt="star" />
                                </div>
                            </div>


                            {/* Equipment & Ingredients */}
                            <div className="dc-equipment-ingredients">

                                {/* Equipments */}
                                <div className="dc-equipment">
                                    {item.equipments.map((equipment,key)=>{
                                        return(
                                            <div className='flex-col' key={key}>
                                                <img src={refrigerator} alt={equipment}/>
                                                <p >{equipment}</p>
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* Divider */}
                                <hr className='dc-equiment-divider'/>

                                {/* Ingredients */}
                                <div className="dc-ingredients">
                                    <h4>Ingredients</h4>
                                    <Link to={`/ingredients/${item.id}`} className='ingredients-link'>View List <img src={triangleArrow} alt="arrow" /></Link>
                                </div>
                            </div>


                            {/* Description */}
                            <div className="dc-description">
                                <p>{item.description}</p>
                            </div>
                        </div>

                        <div className="dc-rightPart">
                            {/* Dish Image */}
                            <div className="dc-img-container">
                                <img src={item.image} alt="dish-img" />
                            </div>
                            <button>
                                Add
                            </button>
                        </div>

                    </div>
                    <hr className='dc-end-hr'/>
                    </>
                )
            })}

        </>
        

    )


}



const DishCardSection = () => {
    return (
        <div className='dish-card-container'>
            <DishCard />
            
            
        </div>
    );
};

export default DishCardSection;