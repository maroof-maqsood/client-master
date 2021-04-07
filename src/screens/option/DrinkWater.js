import React from 'react';
import '../../App.css';
import Water from '../../images/water.png';



class Drinkwater extends React.Component {
    render() {
        return (
            <div className="main" >
                <div className="drinkwater">
                    <h1 style={{ marginTop: "2%" }}>Drink Water</h1>
                    <h4>Repeat every day to from a habit</h4>
                    <div style={{ textAlign: "right" }}>
                        <img className="water1" src={Water} />
                    </div>
                </div>

                <div className="bike">
                    <h3>Set your goal</h3>
                    <input style={{ borderRadius: 10, backgroundColor: "rgb(211, 221, 230)" }} className="Inp1" type="Number" placeholder="glasses" />
                    <div>
                        <button className="thrdbutt">Continue</button>
                    </div>
                </div>




            </div>
        )
    }
}
export default Drinkwater;