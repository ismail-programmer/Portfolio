import React, { Component } from "react";
import { Zoom } from "react-reveal";
import { Project } from "../../context/Context";
import { Link } from "react-router-dom";
class Projects extends Component {
  render() {
    return (
      <Project.Consumer>
        {(state) => {
          return (
            <div className="row">
              <div className="col s12 center">
                <h1 style={{ fontSize: `7rem`, marginBottom: `10rem` }}>
                  My Work
                </h1>
              </div>
              {state.projects.map((el, i) => {
                let title = state.nameToUrl(el.name);
                return (
                  <Zoom key={i}>
                    <div className="col l4 m6 s12 ">
                      <div className="cardContainer">
                        <div className="cardP">
                          <div className="card__image-container">
                            <img
                              className="card__image"
                              src={el[title]}
                              alt={el.name}
                            />
                          </div>
                          <svg className="card__svg" viewBox="0 0 800 1000">
                            <path
                              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 800 L 0 800"
                              stroke="transparent"
                              fill="#333"
                            />
                            <path
                              className="card__line"
                              d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
                              stroke="pink"
                              strokeWidth="3"
                              fill="transparent"
                            />
                          </svg>
                          <div className="card__content">
                            <h1 className="card__title">{el.name}</h1>
                            <div>
                              <Link to={`/projects/${title}`}>
                                <div className="button">
                                  View&nbsp;More&nbsp;
                                  <span className="shift">›</span>
                                  <div className="mask"></div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Zoom>
                );
              })}
            </div>
          );
        }}
      </Project.Consumer>
    );
  }
}

export default Projects;
