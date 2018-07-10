import React from "react";
import "./locations.css";

class Locations extends React.Component {
    render() {
        return (
           
              <div class="container">
                <div class="row">
                <div class="col-sm">
                <h3><center><strong>LOCATIONS</strong></center></h3>
                <div>
                    <div className="map">
                <center><img src={require("../images/map.png")}/></center>
                </div>
                </div>
                </div>

                <div class="container">
                <div class="row">
                <div class="col-sm">
                <div>
                <h4><strong>USA</strong>(HEADQUARTERS)</h4>
                </div>

               
                Philadelphia, Pennsylvania
                Insanity Enginnering Corporation
                93 Peters Lane, Blackwood NJ, USA
                zip 08012
                phone (856) 401 8349
                email:
                <a href="mailto:usa@inzanepb.com"> usa@inzanepb.com</a>
               
                </div>
    
                <div class="col-sm">
                <h4><strong>CANADA</strong></h4>
                
                Toronto, Ontario
                Eastle Boyz Paintball
                20 Lockport Avenue, M8Z2R7 Etobicoke ON.
                phone+ 1 416 233 5888
                email:
                <a href="mailto:can@inzanepb.com"> can@inzanepb.com</a>
              
                </div>
                </div>

                <div>
                <div class="col-sm">
                <h4><strong>CENTRAL AMERICA</strong></h4>
              
                
                Interested in Becoming Dealers
                <a href="auo@npdmcorp.com">MAKE CONTACT</a>
                </div>
                </div>

                <div clss="container">
                <div class="row">
                <div class="col-sm">
                 <h4><strong>SOUTH AMERICA</strong></h4>
                
                Interested in Becoming Dealers
                <a href="auo@npdmcorp.com">MAKE CONTACT</a>
                 
                
                
                 <h4><strong>MEXICO</strong></h4>
                <div>
                Mexico, City
                National Paintball Dealer Mexico
                Av. Tesoro #3118 Col. Tres Estrellas
                C.P. 07820
                phone: 5577-6348 / 5577-6062
                01 800 746 82 42
                email:
                <a href="auo@npdmcorp.com"> auo@npdmcorp.com</a>
              
                </div>
                
                <div>
                Chango´s Army
                La Quemada #53, Col. Narvarte,
                CP 03020
                phone: 5519-0303
                email:
                <a href="pietro84mx@yahoo.com.mx"> pietro84mx@yahoo.com.mx</a>
                
                </div>
                <div>
                Monterrey, Nuevo León
                AdrenalX
                phone: 04455 2888-6371
                email:
                <a href="mty@adrenalx.mx"> mty@adrenalx.mx</a>
                
                </div>
                <div>
                Guadalajara, Jalisco
                AdrenalX
                Av. Valle de Bravo #2239
                Col. Jardines del Valle
                C.P. 45138
                phone: 04455-27-28-6372 / 04533-1300-3533
                email:
                <a href="lara@adrenalx.mx"> lara@adrenalx.mx</a>
                
                </div>
                <div>
                Queretaro, Queretaro
                Ing. Gerardo Mera
                Calle: Marques de la Villa del Villar del Aguila 217 Int 3, Mirador del Marques, 76146 Santiago de Querétaro, Qro.
                C.P. 45138
                phone: (442) 6 90 13 22 / (442) 2 26 08 08
                email:
                <a href="gmmerzyco@gmail.com"> gmmerzyco@gmail.com</a>
                
                </div>
          </div>
          </div>
          </div>
          </div>
         </div>
         </div>
            
           
            
        )
    }
}

export default Locations;