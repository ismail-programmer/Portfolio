import React, { Component } from "react";
import Testimonial from "./testimonial";
import StarIcon from "@material-ui/icons/Star";
import img from "../../resources/images/unknown.png";
class Testimonials extends Component {
  state = {
    index: 0,
    testimonials: [
      {
        name: "colonchristian",
        src:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/349487/original/photo.jpg",
        content:
          "Amazing to work with and will definitely use again. Thank you :)",
        rating: 5,
      },
      {
        name: "colonchristian",
        src:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/349487/original/photo.jpg",
        content:
          "Best experience I have had one fiverr. Keep up the great work! :)",
        rating: 5,
      },
      {
        name: "colonchristian",
        src:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/349487/original/photo.jpg",
        content:
          "Really impressed with this seller. Will definitely use again. Great work.",
        rating: 5,
      },
      {
        name: "colonchristian",
        src:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/349487/original/photo.jpg",
        content: "Great Work as usual! :)",
        rating: 5,
      },
      {
        name: "juanlums",
        src: img,
        content:
          "The seller completed the first phase of the project even befor of the deadline and perfectly done. The communication was constant to solve the problems or doubts that might appear",
        rating: 5,
      },
      {
        name: "nirav2294",
        src: img,
        content: "Great best for web development",
        rating: 5,
      },
      {
        name: "juanlums",
        src: img,
        content: "!He succeed solving a problem we had! Recommended",
        rating: 5,
      },
      {
        name: "colonchristian",
        src:
          "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/profile/photos/349487/original/photo.jpg",
        content: "Great Work",
        rating: 5,
      },
      {
        name: "mrjermayne",
        src: img,
        content: "Ismail is prompt and good at his job",
        rating: 5,
      },
      {
        name: "mrjermayne",
        src: img,
        content: "2nd time using Ismail, he is great",
        rating: 5,
      },
      {
        name: "mrjermayne",
        src: img,
        content: "Right person for my reactj job!!!",
        rating: 5,
      },
      {
        name: "mrjermayne",
        src: img,
        content: "Great work by Ismail!",
        rating: 5,
      },
      {
        name: "mrjermayne",
        src: img,
        content:
          "Ismail is simply the best! He did my reactjs site and I am overly satisfied with his work. I will definitely use him in the future",
        rating: 5,
      },
      {
        name: "artisever",
        src: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5904f810ab9810b5f5dd0015fa77d47d-649790951587931967.558185/74548180-3E40-45FF-BA74-42079C88E620",
        content:
          "It was a pleasant experience, seller is prompt and professional. Delivered the project just in time. I requested as it was quite urgent, I need help with one more thing will order again in a few days Thank you Ismail",
        rating: 5,
      },
      {
        name: "artisever",
        src: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5904f810ab9810b5f5dd0015fa77d47d-649790951587931967.558185/74548180-3E40-45FF-BA74-42079C88E620",
        content:
          "It’s my 2nd order with Ismail and I found him helpful. Promptly fixed the issues I had and that also within the short period of time.",
        rating: 5,
      },
    ],
  };
  onClick=(index)=>{
    this.setState({index});
    clearInterval(window.interval);
    this.restartInterval()
  }
  restartInterval = ()=> {
    window.interval = setInterval(() => {
      const { index, testimonials } = this.state;
      this.onClick(index +1 < testimonials.length ? index+1 : 0)
    }, 3500);
  }
  componentDidMount(){
    this.restartInterval()
  }
  onMouseEnter = ()=> clearInterval(window.interval);
  onMouseLeave = ()=> this.restartInterval()
  showSlides = () => {
    const { index, testimonials } = this.state;
    const position = Math.ceil(testimonials.length /2)
    return testimonials.map((el, i) => {
      const ratings = [];
      for (let i = 0; i < el.rating; i++) {
        ratings.push(<StarIcon key={i} className="icon" />);
      }
      return (
        <Testimonial onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} onMouse {...el} i={i} position={position} isActive={i === index}  onClick={this.onClick}>
          <span style={{ display: `block` }}>{ratings}</span>
          {el.content}
        </Testimonial>
      );
    });
  };
  render() {
    return (
      <section id="testimonial-area">
        <div class="container" style={{height: `100vh`}}>
            <h1 className="center">Testimonials</h1>
          <div class="testi-wrap">
            {this.showSlides()}
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;

/*
<div class="client-single inactive position-2" data-position="position-2">
                <div class="client-img">
                    <img src="https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299" alt=""/>
                </div>
                <div class="client-comment">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
                    <span><i class="fa fa-quote-left"></i></span>
                </div>
                <div class="client-info">
                    <h3>Design By</h3>
                    <p><a href="https://manjaygupta.com">Manjay Gupta</a></p>
                </div>
            </div>
            <div class="client-single inactive position-3" data-position="position-3">
                <div class="client-img">
                    <img src="https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299" alt=""/>
                </div>
                <div class="client-comment">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
                    <span><i class="fa fa-quote-left"></i></span>
                </div>
                <div class="client-info">
                    <h3>Design By</h3>
                    <p><a href="https://manjaygupta.com">Manjay Gupta</a></p>
                </div>
            </div>
           
            <div class="client-single inactive position-4" data-position="position-4">
                <div class="client-img">
                    <img src="https://media.licdn.com/dms/image/C4E03AQFbvYtvSeyw-g/profile-displayphoto-shrink_100_100/0?e=1574294400&v=beta&t=49_VH9HRvqymP-VLETlFhFt4idmunZPhIQfALwaTrmA" alt=""/>
                </div>
                <div class="client-comment">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
                    <span><i class="fa fa-quote-left"></i></span>
                </div>
                <div class="client-info">
                    <h3>Design By</h3>
                    <p><a href="https://manjaygupta.com">Manjay Gupta</a></p>
                </div>
            </div>
          
            <div class="client-single inactive position-5" data-position="position-5">
                <div class="client-img">
                    <img src="https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299" alt=""/>
                </div>
                <div class="client-comment">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
                    <span><i class="fa fa-quote-left"></i></span>
                </div>
                <div class="client-info">
                    <h3>Design By</h3>
                    <p><a href="https://manjaygupta.com">Manjay Gupta</a></p>
                </div>
            </div>
          
            <div class="client-single inactive position-6" data-position="position-6">
                <div class="client-img">
                    <img src="https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299" alt=""/>
                </div>
                <div class="client-comment">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
                    <span><i class="fa fa-quote-left"></i></span>
                </div>
                <div class="client-info">
                    <h3>Design By</h3>
                    <p><a href="https://manjaygupta.com">Manjay Gupta</a></p>
                </div>
            </div>
          
            <div class="client-single inactive position-7" data-position="position-7">
                <div class="client-img">
                    <img src="https://cdn.dribbble.com/users/2132253/avatars/small/1799e2c9badff08058551384763e284c.jpg?1568268299" width="40px" alt=""/>
                </div>
                <div class="client-comment">
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
                    <span><i class="fa fa-quote-left"></i></span>
                </div>
                <div class="client-info">
                    <h3>Design By</h3>
                    <p><a href="https://manjaygupta.com">Manjay Gupta</a></p>
                </div>
            </div>
*/
