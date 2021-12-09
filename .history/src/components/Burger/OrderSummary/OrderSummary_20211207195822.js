import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummary = props.ingredients;
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
        </Auxiliary>
    );
};

export default orderSummary; 