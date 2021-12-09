import React from 'react';
import classes from './burgerIngredient.module.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}
    }

};

export default burgerIngredient;