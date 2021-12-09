import React, { Component } from 'react';

import classes from './Modal.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentDidUpdate () {
        console.log('[Modal] Will Update');
    }

    render () {
        return (
            <Auxiliary>
                <Backdrop show={props.show} clicked={props.modalClosed} />
                <div 
                    className={classes.Modal}
                    style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0'
                    }}>
                    {props.children}
                </div>
            </Auxiliary>
        );
    }
};

export default Modal;