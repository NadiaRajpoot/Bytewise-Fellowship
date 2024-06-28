import "./Users.css";

const Userprofile = ({ user, loading }) => {
  return (
    <div className="Profile-container">
      <div className="user-header">
        <div>
          <img
            src={
              user.avatar_url
                ? user.avatar_url
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5-3YjBcXTqKUlOAeUUtuOLKgQSma2wGG1g&s"
            }
            alt="img"
          />
        </div>
        <div className="user-header-info">
          <h2>{user.name ? user.name : "not found"}</h2>
          <h4>{user.login ? user.login : "login"}</h4>
          <p>
            joined at
            {user.updated_at ? user.updated_at.substring(0, 10) : "0000-00-00"}
          </p>
        </div>
      </div>
      <hr className="border-line" />
      <div className="bio">
        <p>{user.bio ? user.bio : "not found"}</p>
      </div>
      <div className="profile-info">
        <div className="repo">
          <h3>Repositories</h3>
          <span>{user.public_repos ? user.public_repos : "0"}</span>
        </div>
        <div className="followers">
          <h3>Followers</h3>
          <span>{user.followers ? user.followers : "0"}</span>
        </div>
        <div className="following">
          <h3>Following</h3>
          <span>{user.following ? user.following : "0"}</span>
        </div>
      </div>
      <div className="contact-info">
        <div>
          <i class="fa-solid fa-location-dot"></i>
          <span>{user.location ? user.location : "not found"}</span>
        </div>
        <div>
          <i class="fa-brands fa-twitter"></i>
          <span>
            {user.twitter_username ? user.twitter_username : "not found"}
          </span>
        </div>
        <div>
          <i class="fa-solid fa-pen-to-square"></i>
          <span>{user.blog ? user.blog : "not found"}</span>
        </div>
        <div>
          <i class="fa-solid fa-envelope"></i>
          <span>{user.email ? user.email : "not found"}</span>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
