import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Sử dụng navigate để điều hướng
import axios from 'axios';

export default function BlqhEditUser() {
  const { id } = useParams(); // Lấy ID người dùng từ URL
  const [user, setUser] = useState(null); // Để lưu trữ dữ liệu người dùng
  const navigate = useNavigate(); // Để điều hướng người dùng sau khi lưu

  // Lấy dữ liệu người dùng theo ID
  useEffect(() => {
    axios
      .get(`https://67da6b2135c87309f52c5912.mockapi.io/blqh_users/${id}`)
      .then((response) => {
        setUser(response.data); // Lưu dữ liệu vào state
      })
      .catch((error) => {
        console.error("Có lỗi khi lấy dữ liệu người dùng!", error); // Xử lý lỗi
      });
  }, [id]);

  // Xử lý khi người dùng gửi form để cập nhật dữ liệu
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngừng hành vi gửi form mặc định

    // Gửi dữ liệu người dùng đã cập nhật đến API
    axios
      .put(`https://67da6b2135c87309f52c5912.mockapi.io/blqh_users/${id}`, user)
      .then(() => {
        // Nếu thành công, điều hướng về danh sách người dùng
        navigate('/list-user');
      })
      .catch((error) => {
        console.error("Lỗi khi lưu thay đổi", error); // Xử lý lỗi
      });
  };

  // Render form để chỉnh sửa dữ liệu người dùng
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit User</h2>
      {user ? (
        <form onSubmit={handleSubmit} className="p-5 border rounded-3 shadow-lg">
          <div className="mb-3">
            <label htmlFor="blqh_name" className="form-label">Name</label>
            <input
              type="text"
              id="blqh_name"
              className="form-control"
              value={user.blqh_name}
              onChange={(e) => setUser({ ...user, blqh_name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="blqh_email" className="form-label">Email</label>
            <input
              type="email"
              id="blqh_email"
              className="form-control"
              value={user.blqh_email}
              onChange={(e) => setUser({ ...user, blqh_email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="blqh_phone" className="form-label">Phone</label>
            <input
              type="text"
              id="blqh_phone"
              className="form-control"
              value={user.blqh_phone}
              onChange={(e) => setUser({ ...user, blqh_phone: e.target.value })}
            />
          </div>

          {/* Radio buttons for Active */}
          <div className="mb-3">
            <label className="form-label">Active</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="blqh_active"
                id="blqh_active_hd"
                value="true"
                checked={user.blqh_active === true}
                onChange={() => setUser({ ...user, blqh_active: true })}
              />
              <label className="form-check-label" htmlFor="blqh_active_hd">
                Hoạt Động
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="blqh_active"
                id="blqh_active_kh"
                value="false"
                checked={user.blqh_active === false}
                onChange={() => setUser({ ...user, blqh_active: false })}
              />
              <label className="form-check-label" htmlFor="blqh_active_kh">
                Khóa
              </label>
            </div>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-lg">Save Changes</button>
          </div>
        </form>
      ) : (
        <p>Loading user data...</p>
      )}
      <div className="d-flex justify-content-center mt-4">
        <button onClick={() => navigate('/list-user')} className="btn btn-secondary">
          Back to List
        </button>
      </div>
    </div>
  );
}