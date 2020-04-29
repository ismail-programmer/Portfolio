import React, { Component } from "react";
import Testimonial from "./testimonial";
import StarIcon from "@material-ui/icons/Star";
import Slider from "react-slick";
import img from "../../resources/images/unknown.png";
class Testimonials extends Component {
  state = {
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
    ],
  };
  showSlides = () => {
    return this.state.testimonials.map((el, i) => {
      const ratings = [];
      for (let i = 0; i < el.rating; i++) {
        ratings.push(<StarIcon key={i} />);
      }
      return (
        <Testimonial
          key={i}
          src={el.src}
          name={el.name}
          flag={el.flag}
          country={el.country}
        >
          <span style={{ display: `block` }}>{ratings}</span>
          {el.content}
        </Testimonial>
      );
    });
  };
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      swipeToSlide: true,
      speed: 500,
      autoplaySpeed: 2000,
    };
    return (
      <section className="testimonials">
        <h1>Testimonials</h1>
        <Slider className="section-stories" {...settings}>
          {this.showSlides()}
        </Slider>
      </section>
    );
  }
}

export default Testimonials;
