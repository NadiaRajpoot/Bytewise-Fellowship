import { useEffect, useState } from "react";
import "./Users.css";

const Users = ({ setUserData, setLoading }) => {
  const [username, setUsername] = useState("NadiaRajpoot");

  const handleClick = async () => {
    setLoading(true);
    const data = await fetch(`https://api.github.com/users/${username}`);
    const json = await data.json();

    setUserData(json);
    setLoading(false);
  };
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <div className="container">
      <div className="search">
        <div>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            className="search-input"
            placeholder="Search a  GitHub Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <button onClick={handleClick} className="btn">
          Search
        </button>
      </div>
    </div>
  );
};

export default Users;
