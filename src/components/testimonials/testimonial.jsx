import React from "react";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { Link } from "react-router-dom";
const Testimonial = ({src ,children ,name,i,isActive,onClick,position,onMouseLeave,onMouseEnter}) => {
  return (
    <div onMouseLeave={()=>isActive ? onMouseLeave() : ""} onMouseEnter={()=>isActive ? onMouseEnter() : ""} style={{[i <position ? "left" : "right" ]: 0,top: `${55 * (i+1 > position ? Math.floor(i-position) : i)+10}px`,[i <position ? "right" : "left"]: `auto`,transformOrigin: i <position ? "left" : "right" }} class={`client-single ${isActive ? "active" : "inactive"} position-${i+1}`} onClick={()=>onClick(i)}>
      <div class="client-img">
        <img src={src} alt={name} />
        <div className="name_client"> {name} </div>
      </div>
      <div class="client-comment">
        <h3> {children} </h3>
        <span>
          <FormatQuoteIcon className="my_icon" />
        </span>
      </div>
      <div class="client-info">
        <h3>By</h3>
        <p>
          <Link to="/">{name}</Link>
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
