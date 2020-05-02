import React, { Component } from "react";

class Card extends Component {
  state = {
    [this.props.type +"Start"] :0,
    [this.props.type +"End"] : this.props.percentage,
  };
  percentage = () => {
    const { type } = this.props;
    window.interval =setInterval(()=>{
      if (this.state[`${type}Start`] < this.state[`${type}End`]) {
        this.setState({[`${type}Start`]: this.state[`${type}Start`]+1})
        document.querySelector(`.${type}Exp.experiance`).classList.remove("transparent-text");
      }
    }, 2)
  };
  display = ()=>{
    const { type } = this.props
    this.setState({[`${type}Start`]: this.state[`${type}End`]})
    document.querySelector(`.${type}Exp.experiance`).classList.remove("transparent-text");
  }
  componentDidMount(){
    const {type } = this.props
    if(window.innerWidth <= 1000){
      this.setState({[`${type}Start`]: this.state[`${type}End`]})
    } else if(window.innerWidth > 1000){
      document.querySelector(`.${type}Exp.experiance`).classList.add("transparent-text");
    }
  }
  render() {
    let { type,src } = this.props;
    return (
      <div
        onMouseEnter={()=>{
          if(window.innerWidth <= 1000){
            this.display()
          } else if(window.innerWidth > 1000){
            this.percentage()
          }
        }}
        onMouseLeave={() => {
          if(window.innerWidth <= 1000){
            // this.display()
            document.querySelector(`.${type}Exp.experiance`).classList.remove("transparent-text");
          } else if(window.innerWidth > 1000){
            document.querySelector(`.${type}Exp.experiance`).classList.add("transparent-text");
            clearInterval(window.interval)
            this.setState({[`${type}Start`]: 0})
          }
        }}
        style={{["--i"] : this.props.index,["--percentage"]: this.props.percentage}}
        className="cardCss"
      >
        <h4 className="title">{type.toUpperCase()}
        <img src={src} className={`img ${type}Img`} alt={type} />
        </h4>
        <div className="bar">
          <div className="emptybar"></div>
          <div style={{["--percentage"]: this.props.percentage}} className={`${type}Bar filledbar`}></div>
        </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle style={{["--percentage"]: this.props.percentage}} className={`stroke ${type}`} cx="60" cy="60" r="50" />
          </svg>
        </div>
        <div className={`white-text experiance ${type}Exp`}>
          {this.state[type+"Start"]}%
        </div>
      </div>
    );
  }
}

export default Card;
