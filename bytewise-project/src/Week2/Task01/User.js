import { useState } from "react";

const User = () => {
  const [like, setLike] = useState(0);

  return (
    <div
      className="user-card"
      style={{
        width: "300px",
        padding: "10px",
        margin: "5px",
        border: "1px solid gray",
        borderRadius: "5px",
      }}
    >
      <h2>Functional Component</h2>
      <button onClick={() => setLike(like + 1)}>like</button>
      <h4>{like}</h4>
    </div>
  );
};

export default User;
