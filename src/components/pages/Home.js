import React from "react";
import "./home.css";
class Home extends React.Component {
    render() {
        // const style = {
        //     height: 700,
        //     width: 800,
        //     marginLeft: 500,
        //     marginTop: 20,
        //     textAlign: 'center',
        //     display: 'inline-block',
        // };
        return (
            <div className = "contents">
            <div className="title" >
                <h3 >OUR COMPANY</h3>
                </div>

                <div>
                    <p className = "info">
                         At Inzane Paintball we are guided by our values: <i>Honesty, Integrity, Responsibility, Improvement, and Social Commitment</i>. Since 1999, our company has been committed to providing the paintball industry
                            quality products in the field, for professionals and beginners. Our team of professionals is dedicated to serving the different lines of businesses, guaranteeing the best service and attention to our distributors and end users.
                            In this way, we have established ourselves as a serious and reputable company that generates prosperous businesses for the Paintball industry. We are Inzane for Paintball, are you InZane yet?
                </p>

                    <center><img src={require("../images/maddness/mc.png")}/></center>

                </div>
            </div>
            
        )
    }
}

export default Home;