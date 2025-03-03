import React, { Component } from 'react';
import BlqhLoginControl from './BlqhLoginControl';

class BlqhRenderCondition extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false,
        }
    }
        // Hàm xử lý sự kiện login
        blqhHandleLogin = ()=>{
            this.setState({
                isLoggedIn:true
            })
        }
        // Hàm xử lý sự kiện logout
        blqhHandleLogout=()=>{
            this.setState({
                isLoggedIn:false
            })
        }
    render() {
        let flag = this.state.isLoggedIn;
        return (
            <div className='alert alert-danger'>
                <h2>Render Condition</h2>
                <hr/>
                <BlqhLoginControl isLoggedIn={flag} />
                <hr/>
                {
                   flag?<button onClick={this.blqhHandleLogout}>Logout</button>
                        :<button onClick={this.blqhHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default BlqhRenderCondition;