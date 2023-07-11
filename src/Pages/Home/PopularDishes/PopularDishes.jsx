import './PopularDishes.scss'
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());


const PopularDishes = () => {
    const {data, isValidating} = useSWR('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/', fetcher)
    
    console.log(data?.popularDishes[0].name)
    
    return (
        isValidating ? <h4>Loading...</h4> :
        <div className="popular-dish-wrapper">

            <h1 className='popular-dish-heading'>Popular Dishes</h1>

            {/* Popular Dish Icon */}
            <div className="popular-dishes-container">
                {data?.popularDishes.map((item, key) => {
                    return (
                        <div className='popularDish flex-col' key={key}>
                            <img src={item.image} alt="popular-dish-img" className='popular-dish-img' />
                            <p className='popular-dish-name'>{item.name}</p> 
                        </div>
                    )
                })}
            </div>
        </div>
        
    );
};

export default PopularDishes;