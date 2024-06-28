import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      like: 0,
    };
  }
  render() {
    return (
      <div
        className="User-card"
        style={{
          width: "300px",
          padding: "10px",
          margin: "5px",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
      >
        <h2>Class Compnenet</h2>
        <button onClick={() => this.setState({ like: this.state.like + 1 })}>
          Like
        </button>
        <h4>{this.state.like}</h4>
      </div>
    );
  }
}

export default UserClass;
