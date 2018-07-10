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
                <h3><center>Account</center></h3>
                <form>
                    <div className="labels">
                    <label><h5><center><strong>First Name:</strong></center> </h5> </label>
                    </div>
                   <div className="input">
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
                   </div>
                   
                   
                    <div>
                    <label><h5><center><strong>Last Name:  </strong></center></h5></label>
    
                    <input type="text" name="password" onChange={this.handleChange} value={this.state.password}/>
                   </div>
                   <div>
                    <label><h5><center><strong>Password:  </strong></center></h5></label>
    
                    <input type="text" name="password" onChange={this.handleChange} value={this.state.password}/>
                   </div>
                   <div>
                    <label><h5><center><strong>Confirm Password:  </strong></center></h5></label>
    
                    <input type="text" name="password" onChange={this.handleChange} value={this.state.password}/>
                   </div>
                   <div>
                    <label><h5><center><strong>Order History:  </strong></center></h5></label>
    
                    <input type="text" name="password" onChange={this.handleChange} value={this.state.password}/>
                   </div>
                   <div>
                    <label><h5><center><strong>Make Payments:  </strong></center></h5></label>
    
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


                 {/* <div className="row">
    <form className="col s12">
      <div className="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
          <label className="active" for="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label className="active" for="last_name">Last Name</label>
        </div>
      </div>
     
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" class="validate">
          <label className="active" for="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label className for="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          This is an inline input field:
          <div className="input-field inline">
            <input id="email_inline" type="email" class="validate">
            <label className="active" for="email_inline">Email</label>
            <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
        </div>
      </div>
    </form>
 */}
