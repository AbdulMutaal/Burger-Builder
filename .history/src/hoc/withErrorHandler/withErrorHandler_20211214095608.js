import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';
import axios from 'axios';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount () {
            axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                });
            });

            axios.interceptors.response.use(null, error => {
                this.setState({
                    error: error
                });
            });
        }

        render () {
            return (
                <Auxiliary>
                    <Modal show>
                        Something didn't work!..
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxiliary>
                
            );
        }
    }
}

export default withErrorHandler;