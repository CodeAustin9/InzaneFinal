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
                <h3>Login</h3>
                <form>
                    <div>
                    <label><h5><strong>Username:</strong> </h5> </label>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
                   </div>
                    <br/>
                    <div>
                    <label><h5><strong>Password:  </strong></h5></label>
                    <input type="text" name="password" onChange={this.handleChange} value={this.state.password}/>
                   </div>

                    <br/>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>

           
        )
    }
}

export default Login;
// need a clear button;