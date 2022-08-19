import Axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
export default class Tasks extends Component {

    state={
        todo:[]
    };
    async componentDidMount()
    {
        const {data:todos}= await Axios.get("https://jsonplaceholder.typicode.com/todos");
        this.setState({todo:todos});
        console.log(this.state.todo);
    }
    handleAddTask=async()=>{
        const myTask={
            userId:10,
            id:201,
            title:"create react app",
            completed:true
        }
        
        this.state.todo.push(myTask);
        this.setState({todo:this.state.todo});
        console.log("ADDED");
    };
    handleDelete=(deltodo)=>
    {
        this.state.todo.splice(this.state.todo.indexOf(deltodo),1);
        this.setState({todo:this.state.todo});

    };
    render() {
    return (
        <>
        <Navbar/>
        <button style={{ position:'fixed',marginTop:480}} className='btn btn-primary' onClick={()=>{this.handleAddTask()}}>Add Task</button>
        <div className='container'>
        <table className="table">
  <thead>
  </thead>
  <tbody>
    {this.state.todo.map(todos=>(
       <tr key={todos.id}>
       <th scope="row">{todos.id}</th>
       <td>{todos.title}</td>
       <td>{todos.completed.toString()}</td>
       <td><button className='btn btn-danger' onClick={()=>{this.handleDelete(todos)}} >Delete</button></td>
     </tr> 
    ))}
    </tbody>
    </table>
      </div>
      
      </>
      
    )
  }
}
