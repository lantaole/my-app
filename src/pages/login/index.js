import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actionCreators from './store/actionCreators'
import Header from '../../components/header'
import { Button } from 'antd'
import './login.scss'

// 把store中的数据映射到组件的props
const mapStateToProps = (state) => ({
    myData: state.getIn(['login', 'myData']),
})

// 把store的Dispatch映射到组件的props
const mapDispatchToProps = (dispatch) => ({

    getData(data) {
        const action = actionCreators.getData(data)
        dispatch(action)
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="P-login">
                <Header/>
                <h1>Login page</h1>
                <p>login: myData = {this.props.myData}</p>
                <Button type='primary' onClick={() => {
                    this.props.getData('123456')
                }}>更改login的myData
                </Button>
                <Button type='default' onClick={() => {
                    this.goHome()
                }}>跳转Home页
                </Button>
            </div>
        )
    }

    goHome() {
        this.props.history.push('/home')
    }
})
