import React, { Component, createContext } from "react";
import todo from "../resources/images/todo.png";
import style_changer from "../resources/images/style_changer.png";
import cv_site from "../resources/images/cv_site.png";
import tindog from "../resources/images/tindog.png";
import speech_detection from "../resources/images/speech_detection.png";
import momina_mustehsan from "../resources/images/momina_mustehsan.png";
import flex_panels from "../resources/images/flex_panels.png";
import aliens_go_home from "../resources/images/aliens_go_home.png";
import calculator from "../resources/images/calculator.png";
import cooking_school from "../resources/images/cooking_school.png";
import e_commerce from "../resources/images/e_commerce.png";
import find_city from "../resources/images/find_city.png";
import natrous from "../resources/images/natrous.png";
import waves from "../resources/images/waves.png";

export const Project = createContext();
class Context extends Component {
  state = {
    projects: [
      {
        name: "Aliens Go Home",
        aliens_go_home,
        description: `This is a game.Totally designed and developed in React js.This is a shooting game `,
        link: `https://aliensgohome-678ae.firebaseapp.com/`,
      },

      {
        name: "E Commerce",
        e_commerce,
        link: `https://ismailmuhammed.github.io/E-commerce/index.html`,
        description: `This is a store which is a complete store where you can signup and create your account you can create your own products you can add products to cart and you can edit your products details. You can edit your details . All of this is done with local storage`,
      },
      {
        name: "Find City",
        find_city,
        link: `https://ismailmuhammed.github.io/FindCity/`,
        description: `This is a API Web Page here you can search for all cities of Pakistan.`,
      },
      {
        name: "Natrous",
        natrous,
        link: `https://natrous.netlify.com/`,
        description: `This is a simple website build on only HTML & CSS. This website contains different type of animations ,cards and Pure CSS Popups. It also contain a unique nav`,
      },
      {
        name: "Todo",
        todo,
        link: `https://ismailmuhammed.github.io/techna-todo/`,
        description: `ToDo is Built on pure javascript(ES6),This todo require 3 inputs(Title,Description& Time). Then you can edit ,delete & Mark your todos . This todo store your data to local storage .Then it takes you to new route to display your todos`,
      },

      {
        name: "Cooking School",
        cooking_school,
        link: `https://ismailmuhammed.github.io/Cooking/src/`,
        description: `This is a Cokking School Website.It is a responsive design designed in bootstrap.`,
      },
      {
        name: "Momina Mustehsan",
        momina_mustehsan,
        link: `https://dream-dbaca.firebaseapp.com/`,
        description: `This is a portfolio of a singer of Pakistan.It is responsive and according to the user interface needs.Totally devolved and designed on Reactjs and pure css.`,
      },
      {
        name: "Tindog",
        tindog,
        link: `https://ismailmuhammed.github.io/Tindog/`,
        description: `Tindog is a full page built on HTML CSS & Bootstrap. It is fully responsive.It has different types of cards and dropdowns`,
      },
      {
        name: "Flex Panels",
        flex_panels,
        link: `https://ismailmuhammed.github.io/flex-pannels/index.html`,
        description: `Flex Panel is a unique type of gallery.It is fully made on HTML CSS & Javascript. When user click on image It expands and the other contracts to give it space`,
      },
      // {
      //   name: "Form Validation",
      //   form_validation,
      //   link: `https://ismailmuhammed.github.io/signup-frontend/index.html`,
      //   description: `This is a submit form designed in css.It is fully validate in pure js for submission of different inputs from user.`,
      // },
      {
        name: "Waves",
        waves,
        link: `https://waves-guitars-2806.herokuapp.com/`,
        description: `This is a store which is a complete store where you can signup and create your account you can create your own products you can add products to cart and you can edit your products details. You can edit your details . All of this is done with mongodb.It is devolped in React js,Node js.It is a mern project`,
      },
      // {
      //   name: "Redux Project",
      //   redux_project,
      //   link: `https://student-project-redux.netlify.com/`,
      //   description: `This is a redux project for making result of differnt students of an organization`,
      // },
      {
        name: "Speech Detection",
        speech_detection,
        link: `https://ismailmuhammed.github.io/voice-recognization/`,
        description: `Speech Detection detect your voice and convert it into text. It can recogonize words and phrases of different languages and write it on UI.`,
      },
      {
        name: "Style Changer",
        style_changer,
        link: `https://ismailmuhammed.github.io/TechnaAssignment3/index.html`,
        description: `Style Changer is a javascript based website. It contains 2 buttons each of them is linked to a specific stylesheet when button is clicked stylesheet is swapped.`,
      },
      {
        name: "CV Site",
        cv_site,
        link: `https://ismailmuhammed.github.io/Cv/`,
        description: `This is a CV site made on html and css this contains your basic information in it. You can also write your work in it. There is also a hobies section to describe about your self.`,
      },
      {
        name: "Calculator",
        calculator,
        link: `https://calculator-e8ff9.firebaseapp.com/`,
        description: `This is a calculator devolped in PWA environment.It can be used for simple mathematical operations.`,
      },
    ],
  };
  nameToUrl = (name) => name.split(" ").join("_").toLowerCase();
  render() {
    return (
      <Project.Provider value={{ ...this.state, nameToUrl: this.nameToUrl }}>
        {this.props.children}
      </Project.Provider>
    );
  }
}

export default Context;
