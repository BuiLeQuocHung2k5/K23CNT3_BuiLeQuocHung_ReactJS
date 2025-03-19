import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function BlqhCreateUser() {
    // Khởi tạo state
    const [blqh_name, setBlqh_name] = useState('');
    const [blqh_email, setBlqh_email] = useState('');
    const [blqh_phone, setblqh_phone] = useState('');
    const [blqh_active, setBlqh_active] = useState(true);

    // api post
    const blqhCreateUser = "https://67da6b2135c87309f52c5912.mockapi.io/blqh_users";

    // submit form
    const blqhHandleSubmit = (ev) => {
        ev.preventDefault(); // Ngăn form gửi tự động

        let blqhNewUser = { blqh_name, blqh_email, blqh_phone, blqh_active };

        // Gửi dữ liệu lên API
        axios
            .post(blqhCreateUser, blqhNewUser)
            .then((blqh_response) => {
                console.log(blqh_response.data);
            })
            .catch((error) => {
                console.log("Lỗi", error);
            });
    };

    return (
        <div className="container mt-4">
            <form onSubmit={blqhHandleSubmit}>
                <h2>Thêm Mới User</h2>

                <div className="mb-3">
                    <label htmlFor="blqh_name" className="form-label">Name</label>
                    <input
                        type="text"
                        name="blqh_name"
                        id="blqh_name"
                        placeholder="Vui lòng nhập tên của bạn"
                        className="form-control"
                        onChange={(ev) => setBlqh_name(ev.target.value)}
                        value={blqh_name}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="blqh_email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="blqh_email"
                        id="blqh_email"
                        placeholder="Vui lòng nhập email của bạn"
                        className="form-control"
                        onChange={(ev) => setBlqh_email(ev.target.value)}
                        value={blqh_email}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="blqh_phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        name="blqh_phone"
                        id="blqh_phone"
                        placeholder="Vui lòng nhập số điện thoại của bạn"
                        className="form-control"
                        onChange={(ev) => setblqh_phone(ev.target.value)}
                        value={blqh_phone}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Active</label>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="blqh_active"
                            id="Blqh_active_hd"
                            value="true"
                            checked={blqh_active === true}
                            onChange={() => setBlqh_active(true)} // Cập nhật state khi chọn "Hoạt Động"
                        
                        />
                        <label className="form-check-label" htmlFor="Blqh_active_hd">Hoạt Động</label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="Blqh_active"
                            id="Blqh_active_kh"
                            value="false"
                            checked={blqh_active === false}
                            onChange={() => setBlqh_active(false)} // Cập nhật state khi chọn "Khóa"
                        />
                        <label className="form-check-label" htmlFor="blqh_active_kh">Khóa</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Create</button>
                <Link to={'/list-user'} >
                <button type="submit" className="btn btn-info">Back</button>
                </Link>
            </form>
        </div>
    );
}