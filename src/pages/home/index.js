import React, {Component} from 'react';
import Header from '../../components/header'
import './home.scss'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="P-home">
                <Header />
                <h1>Home page</h1>
            </div>
        )
    }
}
