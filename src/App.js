import { useState } from "react";
import Users from "./Week2/Task03/Users";
import Userprofile from "./Week2/Task03/UserProfile";
import Loader from "./Week2/Task03/Loader";
function App() {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(loading);

  return (
    <div className="App">
      <Users setUserData={setUserData} setLoading={setLoading} />

      {loading ? <Loader /> : <Userprofile user={userData} />}
    </div>
  );
}

export default App;
