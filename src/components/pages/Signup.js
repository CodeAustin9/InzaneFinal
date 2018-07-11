import React from "react";
import "./signup.css";
import {signup} from "../../auth";

class Signup extends React.Component {
    state={
        username: "",
        password: "",
    }
    handleChange=(event)=>{ 
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
       }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({success: false, failed: false})
       signup(this.state.username, this.state.password)
       .then(()=>this.setState({success: true}))
       .catch(()=>this.setState({failed: true}))
    }

    render() {
      let message=null
      if(this.state.failed){
        message=<div>Signup failed.</div>
      }else if(this.state.success){
        message=<div>Signup succeeded!</div>
      }
        return (
            <div className="body">
                <h3><center>Signup</center></h3>
                {message}
                <form onSubmit={this.handleSubmit}>
                    <div className="labels">
                    <label><h5><center><strong>Username:</strong></center> </h5> </label>
                    </div>
                   <div className="input">
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
                   </div>
                   
                   
                    <div>
                    <label><h5><center><strong>Password:  </strong></center></h5></label>
    
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
                   </div>
                    <br/>
                    <center><input type="submit"/></center>
            </form>
        </div>
        

           
        )
    }
}

export default Signup;
// need a clear button;


