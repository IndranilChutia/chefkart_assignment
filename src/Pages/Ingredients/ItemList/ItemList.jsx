import React from 'react';
import './ItemList.scss';
import downTriangle from '../../../Assets/downTriangle.svg';

const ItemList = (props) => {
    const { name, data } = props;

    return (
        <div className="item-list-wrapper">
            <div className="item-list-heading">
                <h4 className="list-heading">
                    {name}&nbsp;({data ? data.length : 0})
                </h4>
                <img src={downTriangle} alt="dropdown" />
            </div>

            {data ? (
                data.map((item, key) => (
                    <div key={key} className="item-container">
                        <p>{item.name}</p>
                        <p>{item.quantity}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ItemList;
