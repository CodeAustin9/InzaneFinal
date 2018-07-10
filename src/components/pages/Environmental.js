import React from "react";
import "./environmental.css";

class Environmental extends React.Component {
    render() {
        return (
            <div className="envContainer" >

                <div className="envTitle">
                    <h3>ENVIRONMENTAL PAINTBALLS</h3>
                </div>


                <div className="envImage">
                    <img src={require("../images/demmented/dcc.png")} />
                </div>
                <div className="envDesc">
                    <h4><strong>PRODUCT DESCRIPTION</strong></h4>
                    <p>
                        This product contains paintballs that are specifically designed to break
                        on impact of a soft surface. FIRST Paintballs are
                            <strong> BIODEGRADABLE</strong> and WILL NOT HARM THE ENVIRONMENT.
                    </p>
                    <br />
                    <h4><strong>PRODUCT FEATURES</strong></h4>
                    <p>
                        The ingredients of this product contain organic vegetable dye and gelatin.
                        Color stains on clothing can be easily removed with soap and water.
                        Each paintball is generally 16 millimeters in diameter (caliber 0.68 inch),
                        although may vary slightly in size due to environmental conditions.
                    </p>
                </div>

                 <div className="envDesc">
                    <h4><strong>PRECISION / ACCURACY</strong></h4>
                    <ul className="list">
                        <li>Specially Formulated Shell </li>
                        <li>Ideal Ball Weight</li>
                        <li>Straight Trajectory </li>
                        <li>16 mm Diameter or 0.68 Inch</li>
                        <li>Dynamic Appearance</li>
                    </ul>
                </div>
                <div className="envImage">
                    <img src={require("../images/demmented/da.png")} />
                </div>
               
               
                <div className="envImage">
                    <img src={require("../images/demmented/dma.png")} />
                </div>
                <div className="envDesc">
                    <h4><strong>MARKING ABILITY</strong></h4>
                    <ul>
                        <li>Specially Formulated Viscosity</li>
                        <li>True Color Range for the Highest Quality</li>
                        <li>NONTOXIC and BIODEGRADABLE</li>

                    </ul>
                </div>
                
                <div className="envImage">
                    <img src={require("../images/demmented/dsa.png")} />
                </div>
                <div className="envDesc">
                    <h4><strong>SHELL ADVANTAGE</strong></h4>
                    <ul>
                        <li>Patented Formula</li>
                        <li>Breaks on Impact</li>
                    </ul>
                </div>


                <div className="envUsageDesc">
                    <h4><strong>USE AND STORAGE</strong></h4>
                    <p>
                        Paintballs require strict temperature and humidity storage conditions. Paintballs must be kept in a dry place at temperatures between 15˚ and 30˚ C, (50˚ to 86˚ F). Failure to observe proper storage may result in a damaged or deformed product.
                    </p>
                </div>

            </div>
        )
    }
}

export default Environmental;