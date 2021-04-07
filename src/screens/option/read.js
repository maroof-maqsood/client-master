import React from 'react';
import Book from '../../images/book.png';
import '../../App.css';


class Read extends React.Component {
    render() {
        return (
            <div className="main" >
                <div className="drinkwater">
                    <h1 style={{ marginTop: "2%" }}>Read</h1>
                    <h4>Repeat every day to from a habit</h4>
                    <div style={{ textAlign: "right" }}>
                        <img className="water1" src={Book} />
                    </div>
                </div>

                <div className="bike">
                    <h3>Set your goal</h3>
                    <input style={{ borderRadius: 10, backgroundColor: "rgb(211, 221, 230)" }} className="Inp1" type="Number" placeholder="Pages" />
                    <div>
                        <button className="thrdbutt">Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Read;