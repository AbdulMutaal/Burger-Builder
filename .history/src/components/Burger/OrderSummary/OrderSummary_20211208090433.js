import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
        return <li><span style={{textTransform: 'capitalize'}}>{igKey}</span></li>

        });
    });
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
        </Auxiliary>
    );
};

export default orderSummary; 