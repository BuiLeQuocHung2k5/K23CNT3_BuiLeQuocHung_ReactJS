import React, { Component } from 'react';

class BlqhRenderListObject extends Component {
    constructor(props){
        super(props);
        this.state = {
            blqhStudents :[
                {blqhId:1,blqhName:"Trịnh Văn Chung", blqhAge:46},
                {blqhId:2,blqhName:"Nguyễn Quang A", blqhAge:20},
                {blqhId:3,blqhName:"Nguyễn Quang B", blqhAge:22},
                {blqhId:4,blqhName:"Nguyễn Quang C", blqhAge:21},
            ],
        }
    }

    
    render() {
        // Hiển thị dữ liệu
        let {blqhStudents} = this.state;
        let blqhElement = blqhStudents.map((blqhItem)=>{
            return (
                <li>{blqhItem.blqhId} - {blqhItem.blqhName}</li>
            );
        })

        let blqhRenderElement = blqhStudents.map((blqhItem,index)=>{
            return (
                <tr key={index}>
                    <td>{blqhItem.blqhId}</td>
                    <td>{blqhItem.blqhName}</td>
                    <td>{blqhItem.blqhAge}</td>
                    <td>
                        <button className='btn btn-success mx-1'>Sửa</button>
                        <button className='btn btn-danger mx-1'>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <h2>Danh sách sinh viên</h2>
                {blqhElement}
                <hr/>
                <h2> Ở trên xấu quá; -- sử dụng css</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>BlqhID</th>
                            <th>BlqhName</th>
                            <th>BlqhAge</th>
                            <th>BlqhAction</th>
                        </tr>
                    </thead>
                    <tbody>
                       {blqhRenderElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BlqhRenderListObject;