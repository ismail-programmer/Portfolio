import React from "react";
import img from "../../resources/images/icons/fiverr.png";
const Testimonial = (props) => {
  return (
    <div className="row" style={{ height: `100%` }}>
      <div className="story">
        <figure className="story__shape">
          <img src={props.src} alt="Person on a tour" className="story__img" />
          <figcaption className="story__caption">{props.name}</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            {props.name}
            <a
              href="https://www.fiverr.com/ismail_muhammad?public_mode=true"
              className="right fiverr"
            >
              <img src={img} alt="fiverr" />
            </a>
          </h3>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
