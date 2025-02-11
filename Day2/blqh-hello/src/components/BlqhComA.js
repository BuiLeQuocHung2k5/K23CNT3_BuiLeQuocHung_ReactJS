import React, { Component } from 'react'

export default class BlqhComA extends Component {
constructor(props){
    super(props);
    this.state ={
        name:"Bùi Lê Quốc Hùng",
    };
}

  render() {
    return (
      <div>
        <h2>blqhComplnfor</h2>
        <p> Du lieu trong state: {this.state.name}</p>
        <h3>Hien thi du lieu tu props</h3>
        <p>Ho va Ten: {this.props.HoVaTen}</p>
        <p>Ma Sinh Vien:{this.props.MaSV}</p>
        <p>Ngày sinh:{this.props.NgaySinh}</p>
        <p>Điện thoại:{this.props.DienThoai}</p>
        <p>Ten Lop:{this.props.TenLop}</p>
        </div>
    )
  }
}