import React, { Component } from 'react';

class BlqhEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            blqhName:'Hung',
            blqhAge:20,
            blqhGender:'Male',
            blqhCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    blqhHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    blqhHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.blqhName + "\n" + this.state.blqhAge);

        // Chuyển dữ liệu trên form lên App component (BlqhApp);
        this.props.onBlqhHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='blqhName'>Student Name:</label>
                        <input type='text' name='blqhName' id='blqhName' 
                            value={this.state.blqhName}
                            onChange={this.blqhHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='blqhAge'>Student Age:</label>
                        <input type='text' name='blqhAge' id='blqhAge' 
                            value={this.state.blqhAge}
                            onChange={this.blqhHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='blqhGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='blqhGender' id='blqhMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.blqhGender === 'Male'}
                                onChange={this.blqhHandleChange} />
                            <label htmlFor='blqhMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='blqhGender' id='blqhFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.blqhGender === 'Female'}
                                onChange={this.blqhHandleChange} />
                            <label htmlFor='blqhFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='blqhGender' id='blqhNone' className='mx-2'
                                value={'None'}
                                checked={this.state.blqhGender === 'None'}
                                onChange={this.blqhHandleChange} />
                            <label htmlFor='blqhNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='blqhCourse'>
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
                    </div>
                    <button onClick={this.blqhHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default BlqhEventForm5;