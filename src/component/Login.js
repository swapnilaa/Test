import React, { Component } from "react";

export default class Login extends Component {
    state={
        credential:{
         username:"",
        password:""
       },
        errors:{
          username:"username should not be empty",
          password:"password should not be empty "
        },
        loginStatus:false
    };
    validate=(e)=>{
        let errors={};
        if( this.state.credential.username.trim()===""){
        errors.username="username should not be empty";
        //this.setState({loginStatus:false});
        }
        else{
          errors.username="";
        }
        if(this.state.credential.password.trim()===""){
        errors.password="password should not be empty";
        //this.setState({loginStatus:false});
      }
      else{
      errors.password="";
      }
      if(errors.username===""&& errors.password==="")
      {
        this.setState({loginStatus:true});
      }
      else
      {
        console.log("login status for errors: ", this.state.loginStatus)
      }
        return Object.keys(errors).length===0?null:errors;

    };
    handleSubmit=(e)=>
    {
        e.preventDefault();
        let errors=this.validate();
        this.setState({errors:errors});
        console.log("clicked");
        console.log("login status",this.state.loginStatus);
        
        
    };
    handleChange=(e)=>
    {
        this.state.credential[e.currentTarget.name]=e.currentTarget.value;
        this.setState({credential:this.state.credential});
        //console.log(this.state.credential.username);
        //console.log(this.state.credential.password);
    };
    render() {
    return (
      <div className="container" style={{height:500, width:1200, backgroundColor:"white", border: "1px solid",
      padding: "10px",
      boxShadow: "5px 10px 8px #888888 ",marginTop:150}}>
        <form onSubmit={this.handleSubmit} className="form-group">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
          name="username"
          onChange={this.handleChange}
           value={this.state.credential.username}
           type="email"
            className="form-control"
            id="username"
            
          />
        </div>
        
        {this.state.errors.username!==undefined && <div className="alert alert-danger">{this.state.errors.username}</div>}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
          name="password"
          onChange={this.handleChange}
          value={this.state.credential.password}
           type="password"
           className="form-control"
            id="password"
           
          />
        </div>
        
        {this.state.errors.password!==undefined && <div className="alert alert-danger">{this.state.errors.password}</div>}
        {this.state.loginStatus?this.props.history.push('/home'):""}
        <button style={{marginTop:20}} className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
