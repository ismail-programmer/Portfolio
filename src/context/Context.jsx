import React, { Component, createContext } from "react";
import todo from "../resources/images/projects/todo.png";
import style_changer from "../resources/images/projects/style_changer.png";
import cv_site from "../resources/images/projects/cv_site.png";
import tindog from "../resources/images/projects/Landing Page.png";
import voice_detection from "../resources/images/projects/speech_detection.png";
import press_kit from "../resources/images/projects/Portfolio.png";
import flex_panels from "../resources/images/projects/flex_panels.png";
import aliens_go_home from "../resources/images/projects/aliens_go_home.png";
import calculator from "../resources/images/projects/calculator.png";
import cooking_school from "../resources/images/projects/cooking_school.png";
import type_ahead from "../resources/images/projects/find_city.png";
import natours from "../resources/images/projects/natrous.png";
import waves from "../resources/images/projects/online Store .png";
import emoji_face from "../resources/images/projects/emoji_face.png";
import task_management from "../resources/images/projects/Employee managment.png";
import crud_operations from "../resources/images/projects/user-crud.png";
import laptop_store from "../resources/images/projects/laptop.png";
import budgety from "../resources/images/projects/budgety.png";
import forkify from "../resources/images/projects/forkify.png";
import rgb_game from "../resources/images/projects/color_game.png";
import drumkit from "../resources/images/projects/drum.png";
import epic_dl from "../resources/images/projects/epic.png";
import pat_a_tap from "../resources/images/projects/patatap.png";
import simon_game from "../resources/images/projects/simon_game.png";
import marks_management from "../resources/images/projects/redux_project.png";
import draw_canvas from "../resources/images/projects/canvas.png";
import wack_a_mole from "../resources/images/projects/wack_a_mole.png";
import university_theme from "../resources/images/projects/university.png";
import dice_game from "../resources/images/projects/dice_game.png";
import social_feed from "../resources/images/projects/socialfeed.jpeg";

export const Project = createContext();
class Context extends Component {
  state = {
    projects: [
      {
        name: "Press Kit",
        press_kit,
        link: `https://dream-dbaca.firebaseapp.com/`,
        description: `A portfolio full of animation,Devolped in reactjs and by using pure css.It includes 4 to 5 pages where different animation are been implemented.`,
      },
      {
        name: "Aliens Go Home",
        aliens_go_home,
        link: `https://aliensgohome-678ae.firebaseapp.com/`,
        description: `A game of shooting aliens ships by clicking mouse button with aim.It is devolped in raactjs by usings svgs and canvass.`,
      },
      {
        name: "Task Management",
        task_management,
        link: `https://todo-app-7b98f.web.app/`,
        description: `This is a Web App For managing your employees and for adding new tasks and intelectualling between employees and HR Department.It is programmed by using reactjs as a frontend and in  Google firebase as a backend.`,
      },

      {
        name: "Social Feed",
        social_feed,
        link: `https://social-feed1.web.app/login`,
        description: `It is a socail platform for all over the world,anyone can post here,anyone can add comments and likes to the post,anyone can chat to one another in their circle.It is programmed in reactjs as a frontend and  Google firebase as a backend.`,
      },
      {
        name: "Emoji Face",
        emoji_face,
        link: `https://emoji-face.netlify.app`,
        description: `It is an entertainment website,you can change your cursor possition and check the fun of the emoji.It is programmed in javascript.`,
      },
      {
        name: "Type Ahead",
        type_ahead,
        link: `https://ismailmuhammed.github.io/FindCity/`,
        description: `It is a site where you can find all the cities of Pakistan just write the first word and all similar cities will be shown.It is programmed in javascript.`,
      },
      {
        name: "Waves",
        waves,
        link: `https://waves-guitars-2806.herokuapp.com/`,
        description: `This is an online store which is a complete store where you can signup and create your account you can create your own products you can add products to cart and you can edit your products details.You can edit your personal details.All of the database is done with mongodb.It is devolped in React js,Node js.It is a mern stack project`,
      },

      {
        name: "Natours",
        natours,
        link: `https://natrous.netlify.com/`,
        description: `This is a professioanl single page website build on only HTML &  pure CSS(no framework).This website contains different type of animations ,cards and Pure CSS Popups. It also contain a unique navbar.`,
      },
      {
        name: "University Theme",
        university_theme,
        link: `https://ismail-university.web.app/`,
        description: `This is a full theme project.It contains all pages and features which a big university website should have.It is profesionally designed.It is programmed in reactjs.`,
      },
      {
        name: "Flex Panels",
        flex_panels,
        link: `https://ismailmuhammed.github.io/flex-pannels/index.html`,
        description: `It is web page for making flex pannels in different images.Just click on one image and see the magic.It is programmed in javascript.`,
      },
      {
        name: "CV Site",
        cv_site,
        link: `https://ismailmuhammed.github.io/Cv/`,
        description: `This is a CV site programmed in html and css.This contains your basic information in it. You can also write your work in it. There is also a hobies section to describe about your self.`,
      },
      {
        name: "Todo",
        todo,
        link: `https://ismailmuhammed.github.io/todo-local-storage/index.html`,
        description: `ToDo Web App is built on pure javascript(ES6),This todo require 3 inputs(Title,Description& Time).Then you can edit ,delete & Mark your todos.This todo store your data to local storage.Then it takes you to new route to display your todos`,
      },
      {
        name: "Crud Operations",
        crud_operations,
        link: `https://user-crud-operations.netlify.com/`,
        description: `This is a testing site where crud operation can be tested.User can be created,can be deleted.Also can check all users and can be login a single user.It is programmed in javascript.`,
      },
      {
        name: "Laptop Store",
        laptop_store,
        link: `http://laptop-store-1.herokuapp.com/`,
        description: `This is a Web App for selling Laptops of different kind.It is well designed and fastest Web.It is programmed in javascript.`,
      },
      {
        name: "Budgety",
        budgety,
        link: `https://budgety-budget-management.netlify.app/`,
        description: `This is a budget tracking Web.Where you can subtract your expencess and add your assets and make a full budget of your routine.It is programmed in javascript.`,
      },
      {
        name: "Voice detection",
        voice_detection,
        link: `https://ismailmuhammed.github.io/voice-recognization/`,
        description: `Speech Detection detect your voice and convert it into text.It can recogonize words and phrases of different languages and write it on UI,that you can see your own just click the start button and speak.It is programmed in javascript.`,
      },
      {
        name: "Tindog",
        tindog,
        link: `https://ismailmuhammed.github.io/Tindog/`,
        description: `Tindog is a full page built on HTML CSS & Bootstrap.It is fully responsive.It has different types of cards and dropdowns.It has 4 to 5 sections.`,
      },
      {
        name: "Forkify",
        forkify,
        link: `https://forkify-recipe.netlify.app/`,
        description: `This is a Website for peoples who love to eat new things you can find more than 10000 recipes from this site just search the dish name and you get the recipie.It is programmed in javascript.`,
      },
      {
        name: "RGB game",
        rgb_game,
        link: `https://rgb-color-game.netlify.app/`,
        description: `This is a website where the rgb value of a color is given and you have to find the coreect ui of the color.It is programmed in javascript.`,
      },
      {
        name: "Drumkit",
        drumkit,
        link: `https://relaxed-bhabha-903628.netlify.app/`,
        description: `This is a Web Page where you can press the keyboard keys and some instruments will play there sound as you press them.It is a fun project.It is programmed in javascript.`,
      },
      {
        name: "Calculator",
        calculator,
        link: `https://calculator-e8ff9.firebaseapp.com/`,
        description: `This is a calculator devolped in PWA environment.It can be used for all general mathematical operations.`,
      },
      {
        name: "Epic Dl",
        epic_dl,
        link: `https://epic-dl.firebaseapp.com/`,
        description: `It is a Wbsite where we are selling hosting and storage plans.It has 3 to 4 pages.It is a fast website.It is programmed in reactjs.`,
      },
      {
        name: "Cooking School",
        cooking_school,
        link: `https://ismailmuhammed.github.io/Cooking/src/`,
        description: `This is a Cokking School Website.It is a responsive design designed in bootstrap.It is a Single Page Website.`,
      },

      {
        name: "Style Changer",
        style_changer,
        link: `https://style-changer.netlify.app/`,
        description: `Style Changer is a javascript based website. It contains  buttons each of them is linked to a specific stylesheet when button is clicked stylesheet is swapped.`,
      },
      {
        name: "Wack A Mole",
        wack_a_mole,
        link: `https://wack-a-mole.netlify.app`,
        description: `This is a game in which you have to kill the mole by clicking it by mouse.It is programmed in javascript.`,
      },
      {
        name: "Draw Canvas",
        draw_canvas,
        link: `https://draw-play.netlify.app/`,
        description: `This is a canvas fun project you just drag mouse with clicking it and the fun begins.It is programmed in javascript.`,
      },
      {
        name: "Dice Game",
        dice_game,
        link: `https://dice-game-pro.netlify.app`,
        description: `This is a fun project when you roll the diece  both diece rolls and gets  number,which one is greater he/she won.It is programmed in javascript.`,
      },
      {
        name: "Pat a Tap",
        pat_a_tap,
        link: `https://pat-a-tap.netlify.app/`,
        description: `This is a website for fun you have to type any key and a beep sound and a polygon appears on the screen.It is programmed in javascript.`,
      },
      {
        name: "Simon Game",
        simon_game,
        link: `https://simon-game1.netlify.app/`,
        description: `This is a game in which you have to remember the pattern and repeat that in every turn if you missed a single step,The game will be over.It is programmed in javascript.`,
      },

      {
        name: "Marks Management",
        marks_management,
        link: `https://student-project-redux.netlify.com/`,
        description: `This is a redux project for making result of differnt students of an organization.In which you can add students assignment marks or exam marks.It is programmed in reactjs.`,
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
