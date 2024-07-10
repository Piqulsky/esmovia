import React from "react";
import "./admin.css";

function Admin() {
  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
      <div className="admin-section">
        <h3>User Management</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>john_doe</td>
              <td>john_doe@example.com</td>
              <td>User</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>jane_doe</td>
              <td>jane_doe@example.com</td>
              <td>Admin</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
