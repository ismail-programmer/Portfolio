import Card from "./card";
import img1 from "../../resources/images/css.png";
import img2 from "../../resources/images/js.png";
import img3 from "../../resources/images/react.png";
import img4 from "../../resources/images/materialize.png";
import img6 from "../../resources/images/bootstrap.png";
import img7 from "../../resources/images/firebase.png";
import img8 from "../../resources/images/html.png";

import { Bounce } from "react-reveal";
import React, { Component } from "react";

class Experiance extends Component {
  state = {
    cards: [
      { type: `html`, img: img8,percentage: 95 },
      { type: `css`, img: img1 ,percentage: 95},
      { type: `materialize`, img: img4 ,percentage: 80},
      { type: `bootstrap`, img: img6,percentage: 90 },
      { type: `js`, img: img2,percentage: 90 },
      { type: `react`, img: img3,percentage: 90 },
      { type: `firebase`, img: img7,percentage: 80 },
    ],
  };
  render() {
    return (
      <div
        style={{
          width: `100%`,
          paddingTop: `50px`,
        }}
        className="a"
      >
        <Bounce left>
          <div className="container" style={{ width: `80%` }}>
            <h1>Experience</h1>
          </div>
          <div className="containerCard">
            {this.state.cards.map((el, i) => (
              <Card src={el.img} type={el.type} key={i} index={i} percentage={el.percentage} />
            ))}
          </div>
        </Bounce>
      </div>
    );
  }
}

export default Experiance;
