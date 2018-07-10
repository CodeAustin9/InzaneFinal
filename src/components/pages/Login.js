import React from "react";
import "./login.css";

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
        console.log(this.state.username);
        console.log(this.state.password);
    }

    render() {
        return (
            <div className="body">
                <h3><center>Login</center></h3>
                <form>
                    <div className="labels">
                    <label><h5><center><strong>Username:</strong></center> </h5> </label>
                    </div>
                   <div className="input">
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
                   </div>
                   
                   
                    <div>
                    <label><h5><center><strong>Password:  </strong></center></h5></label>
    
                    <input type="text" name="password" onChange={this.handleChange} value={this.state.password}/>
                   </div>
                  
                   

                    <br/>
                    <center><button type="submit" onClick={this.handleSubmit}>Submit</button></center>
            </form>
        </div>
        

           
        )
    }
}

export default Login;
// need a clear button;