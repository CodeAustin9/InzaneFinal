import React from "react";
import {logout} from "../../auth";
import {Redirect} from "react-router";

class Logout extends React.Component {
    state={}
    componentDidMount(){
        logout().then(()=>this.setState({
            done: true
        }))
    }

    render() {
      let message=null
      if(this.state.done){
        message=<Redirect to="/"/>
      }else{
        message=<div>Logging out.</div>
      }
        return message
    }
}

export default Logout;



