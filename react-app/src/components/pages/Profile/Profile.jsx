import "./Profile.css";

function Profile() {
  return (
    <div className="profile-design">
      <h2>Profile</h2>
      <div className="profile-info">
        <div className="info-group">
          <label htmlFor="username">Username:</label>
          <p id="username">john_doe</p>
        </div>
        <div className="info-group">
          <label htmlFor="email">Email:</label>
          <p id="email">john_doe@example.com</p>
        </div>
        <div className="info-group">
          <label htmlFor="bio">Bio:</label>
          <p id="bio">This is a short bio about John Doe.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
