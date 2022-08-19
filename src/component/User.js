import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default class User extends Component {
  state = {
    username: "dummyName",
    passward: "******",
    isChangePasswordPressed: "",
  };
  handleChangePassword = () => {
    this.setState({ isChangePasswordPressed: true });
    console.log(this.state.isChangePasswordPressed);
  };

  handleInputChange = (e) => {
    this.state.passward = e.target.value;
    this.setState({ passward: this.state.passward });
    console.log(this.state.passward);
  };
  render() {
    return (
      <>
        <Navbar />
        <div style={{ height: 450,width: 800,backgroundColor: "white",border: "1px solid",padding: "10px",boxShadow: "5px 10px 8px #888888 ",}}>
          <form>
            Username: {this.state.username}
            <br />
        Password:{ this.state.isChangePasswordPressed && (<input type="password" onChange={this.handleInputChange} /> )}
                {!this.state.isChangePasswordPressed && this.state.passward}
          </form>

          {!this.state.isChangePasswordPressed && (<button className="btn btn-primary " style={{ marginTop: 300, marginRight: 10 }}onClick={() => this.handleChangePassword()}>Change Password</button>)}
          {this.state.isChangePasswordPressed && (<button className="btn btn-primary "style={{marginTop: 300,marginRight: 10,paddingright: 2,paddingLeft: 10,}} onClick={() => this.handleSavePassword()}>Save Password</button>)}
          <button className="btn btn-primary" style={{ marginTop: 300 }} onClick={() => this.props.history.push("/")}>Logout</button>
        </div>
      </>
    );
  }
}
