"use strict";
window.onload = ()=>{
  //Change the first paragraph to match your theme. Replace the <p> tag's content without adding a CLASS or ID to the tag itself. No Lorem Ipsum, use real content!
  let banner = document.querySelector("p");
  banner.innerHTML = "Get in touch:";

  // **Extra to replace icon on class error on getting success checkmark//
  const include = (file) => {
    let script = document.createElement("script");
    script.src = file;
    script.crossorigin = "anonymous";
    script.defer = true;
    getScript(script);
  };
  const getScript = (script) => {
    let htmlScript = document.querySelector("head");
    htmlScript.insertAdjacentElement("beforeend", script);
  };
  include("https://kit.fontawesome.com/68ebcc4019.js");
  //**Extra to replace icon on class error on getting success checkmark//

  /* Start Change the background Image */
  let background = document.querySelector("body");
  let arrayImages = [
    "images/lighthouse.jpg",
    "images/trail.jpg",
    "images/trees.jpg",
    "images/waterfall.jpg",
    "images/winter.jpg",
  ];
  //get images to background with transition
  let x = 0;
  let getImage = (x) => {
    background.style.backgroundImage = "url(" + arrayImages[x] + ")";
    background.style.transition = "2s";
  };
  //set the first image
  getmage(x);
  //start the loop
  let startImageLoop = () => {
    setInterval(() => {
      //if x is equal x + 1 >= 5 is it 0 or x + 1
      x = x + 1 >= arrayImages.length ? 0 : x + 1;
      getImage(x);
    }, 3000);
  };
  startImageLoop();
  /* End Change the background Image */

  /* Start form elements on key to store */

  let form = document.querySelector("form");
  let paragraphs = form.querySelectorAll("p");
  let submitForm = (e) => {
    // to stop it from loading
    e.preventDefault();
    let storeEl = form.elements;
    //console.log(storeEl);
    let store = [];
    //push the items into the store[]
    for (let key in storeEl) {
      store.push({
        id: key,
        item: storeEl[key].value,
      });
      // console.log("check: ", store);
    }
    //mapping the values getting items in being read.
    store.map((el) => {
      if (el.item != "" && el.item != null) {
        console.log(el);
      }
    });
    /* End form elements on key to store */

    /* Start ids on input and textarea */

    // or if i just want to get the ids
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let message = document.getElementById("message");

    for (let i = 0; i < paragraphs.length; i++) {
      console.log(paragraphs[i]);
    }
    let validateEmail = (e) => {
      console.log(store[1].item);
      var emailID = store[1].item;
      let atpos = emailID.indexOf("@");
      let dotpos = emailID.lastIndexOf(".");

      if (atpos < 1 || dotpos - atpos < 2) {
        banner.innerHTML = `<p class='error'><i class="fas fa-exclamation-triangle"></i> Sorry, please enter the right email format</p>`;
        return false;
      }
      banner.innerHTML = `<p class='error' style="color:green; border: 2px solid green;"><i class="fas fa-check-square" style="color:green;"></i> Success</p>`;

      return true;
    };
    //validate email
    validateEmail();
  };
  /* End ids on input and textarea */

  //validate name
  addEventListener("submit", submitForm);
}