import React, { Component } from 'react'

export default class Information extends Component {
  render() {
    return (
      <div className="container" style={{height:400, width:1200, backgroundColor:"white", border: "1px solid",
      padding: "10px",
      boxShadow: "5px 10px 8px #888888 "}}>
        {this.props.infor.map(fortdetail=>(<p>{fortdetail['info']}</p>))}
      </div>
    )
  }
}
