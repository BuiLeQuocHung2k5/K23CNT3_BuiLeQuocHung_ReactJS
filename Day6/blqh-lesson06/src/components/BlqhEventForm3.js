import React, { Component } from 'react';

class BlqhEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            blqhGioiTinh:'Nam',
        }
    }

    // Hàm xử lý sự kiện change
    blqhHandleChange = (event)=>{
        this.setState({
            blqhGioiTinh:event.target.value,
        })
    }

    // Hàm xử lý sự kiện submit form
    blqhHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Giới tính của bạn là: " + this.state.blqhGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form input - radio</h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='blqhGioiTinh'  id='blqhNam' className='mx-2'
                            value="Nam" checked={this.state.blqhGioiTinh === 'Nam'} onChange={this.blqhHandleChange}/> 
                            <label htmlFor='blqhNam'>Nam</label>  
                        <input type='radio' name='blqhGioiTinh'  id='blqhNu' className='mx-2'
                            value="Nữ" checked={this.state.blqhGioiTinh === 'Nữ'} onChange={this.blqhHandleChange}/> 
                            <label htmlFor='blqhNu'>Nữ</label>  
                        <input type='radio' name='blqhGioiTinh' id='blqhKhac' className='mx-2'
                            value="Khác" checked={this.state.blqhGioiTinh === 'Khác'} onChange={this.blqhHandleChange}/> 
                            <label htmlFor='blqhKhac'>Khác</label>
                    </div>
                    <button onClick={this.blqhHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default BlqhEventForm3;