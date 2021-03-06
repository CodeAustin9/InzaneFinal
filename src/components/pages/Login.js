import React from "react";
import "./login.css";
import {login} from "../../auth";
import {Redirect} from "react-router";

class Login extends React.Component {
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
        login(this.state.username, this.state.password)
       .then(()=>this.setState({success: true}))
       .catch(()=>this.setState({failed: true}))
    }

    render() {
      let message=null
      if(this.state.failed){
        message=<div>Login failed!</div>
      }else if(this.state.success){
        message=<Redirect to="/"/>
      }
        return (
            <div className="body">
                <h3><center>Login</center></h3>
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

export default Login;
// need a clear button;


