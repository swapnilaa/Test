import React, { Component } from "react";
import "./Dropdownc.css";
export default class Dropdownc extends Component {
  componentDidMount() {
    console.log(this.props.list);
  }
  render() {
    return (
      <div>
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            {this.props.drlist.map((listitem) => (
              <a
                key={listitem["itemName"]}
                onClick={() => {
                  this.props.onDisp(listitem["itemName"]);
                }}
                href="#"
              >
                {listitem["itemName"]}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
