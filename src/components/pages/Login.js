import React from "react";
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
            <div>
                <h1>Login Page</h1>
                <form>
                    <label>Username</label>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
                    <br/>
                    <label>Password</label>
                    <input type="text" name="password" onChange={this.handleChange} value={this.state.password}/>
                    <br/>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
         

    
            </form>
        </div>

           
        )
    }
}

export default Login;