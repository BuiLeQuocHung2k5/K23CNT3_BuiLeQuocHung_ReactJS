import React, { Component } from 'react';

class BlqhEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            blqhStudentName:'Bùi Lê Quốc Hùng',
        }
    }
    // Hàm xử lý sự kiện khi dữ liệu trên textbox (blqhStudentName) thay đổi
    blqhHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            blqhStudentName:event.target.value,
        })
    }
    // Khi submit form, lấy dữ liệu và hiển thị
    blqhHandleSubmit = (ev)=>{
        alert('Xin chào:' + this.state.blqhStudentName);
        ev.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form  onSubmit={this.blqhHandleSubmit}>
                    <label htmlFor='blqhStudentName'>
                        <input type='text' name='blqhStudentName' id='blqhStudentName' 
                            value={this.state.blqhStudentName}
                            onChange={this.blqhHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
        );
    }
}

export default BlqhEventForm1;