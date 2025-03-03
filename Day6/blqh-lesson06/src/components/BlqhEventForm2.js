import React, { Component } from 'react';

class BlqhEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            blqhCourse: 'CSS3',
        }
    }
    // Hàm xử lý sự kiện khi thay đồi khóa học
    blqhHandleChange = (event)=>{
        // Cập nhật lại state
        this.setState({
            blqhCourse:event.target.value,
        })
    }

    // Hàm xử lý sự kiện khi submit form
    blqhHandleSubmit = (event)=>{
        alert("Khóa học bạn chọn:" + this.state.blqhCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                 <h2>Form Select</h2>
                <form  >
                    <label htmlFor=''>
                      <select name='blqhCourse' id='blqhCourse' 
                            value={this.state.blqhCourse}
                            onChange={this.blqhHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                      </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.blqhHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default BlqhEventForm2;