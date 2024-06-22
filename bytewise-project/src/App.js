import User from "./Week2/Task01/User";
import UserClass from "./Week2/Task01/UserClass";
function App() {
  return (
    <div
      className="App"
      style={{
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <User />
      <UserClass />
    </div>
  );
}

export default App;
