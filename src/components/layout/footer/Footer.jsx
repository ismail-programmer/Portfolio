import React from "react";
import { Zoom, Fade, Bounce, Roll } from "react-reveal";
import { scroller } from "react-scroll";
import icon from "../../../resources/images/icons/gmail.png";
const Footer = () => {
  const scrollToElement = el => {
    scroller.scrollTo(el, {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  };
  return (
    <div className="footer-container">
      <div className="row">
        <Roll left duration={1000}>
          <div className="col l1 m2 s3">
            <div
              className="footer-a"
              style={{ cursor: `pointer` }}
              onClick={() => scrollToElement("header")}
            >
              <div className="arrow"> &uarr;</div>
            </div>
          </div>
        </Roll>
        <div className="col l11 m10 s9">
          <div className="row">
            <Zoom duration={1000} delay={200}>
              <div className=" full white-text singer-name jim col l6 m12">
                Muhammad Ismail
              </div>
            </Zoom>
            <Zoom duration={1000} delay={500}>
              <div className="col l6 m12">
                <div>
                  <h1 className="footer-h1">Emails</h1>
                  <div className="row">
                    <div className="col l6 m12">
                      <a
                        className="footer-a-2"
                        href="mailto:lord28062000@gmail.com"
                      >
                        <img className="footer-icon" src={icon} alt="abc" />
                        Assistant
                      </a>
                    </div>
                    <div className="col l6 m12">
                      <a
                        className="footer-a-2"
                        href="mailto:lord28062000@gmail.com"
                      >
                        <img className="footer-icon" src={icon} alt="abc" />
                        Private
                      </a>
                    </div>
                  </div>
                  <div className="white-text">
                    <h1 className="footer-h1">
                      What <b>You</b> can  <b>think</b> I can <b>DEVELOP</b> it for   <b>YOU.</b>
                    </h1>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
          <div>
            <Bounce top>
              <div className="col l6 m12">
                <div className="footer-a-2 contact-link">
                  <div className="contact-page  ">
                    <div className="footer-h1 number">Mobile No: 0347-8196414</div>
                  </div>
                </div>
              </div>
            </Bounce>
            <Fade left delay={1000}>
              <div className="col l6 m12">
                <div className="copyright ">
                  <p>&copy;2020 . All rights Reserved</p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
