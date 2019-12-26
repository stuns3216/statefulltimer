import React, { Component } from "react";
import Dynamictime from "./dynamictime";

class chrono extends React.Component {
  state = {
    isPaused: false,
    time: 0
  };
  start = () => {
    if (this.state.isPaused) {
      this.setState({ isPaused: false });
    } else {
      this.setState({ isPaused: true });
    }

    setInterval(() => {
      if (this.state.isPaused) {
        this.setState({ time: this.state.time + 1 });
      }
    }, 1);
  };

  reset = () => {
    this.setState({ time: 0, isPaused: false });
  };
  render() {
    return (
      <div>
        <Dynamictime totalmilSeconds={this.state.time} />
        <button onClick={this.start} className="btn"> Start </button>
        {/* <span>{this.state.time}</span> */}
        <button type="reset" onClick={this.reset} className="btn">
          {" "}
          Reset{" "}
        </button>
      </div>
    );
  }
}
export default chrono;