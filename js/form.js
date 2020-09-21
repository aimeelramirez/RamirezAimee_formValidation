"use strict";
window.onload = () => {
  /* All Insructions are in "**" */
  /** 
"Change the first paragraph to match your theme. 
  Replace the <p> tag's content without adding a 
  CLASS or ID to the tag itself.
  No Lorem Ipsum, use real content!""
//i didn't add a class or id but i did add a button on adding a script for fontawesome on success */

  //** Change the first paragraph to match your theme. Replace the <p> tag's content without adding a CLASS or ID to the tag itself. No Lorem Ipsum, use real content!
  let banner = document.querySelector("p");
  banner.innerHTML = "Get in touch:";

  /* QUERIES */
  let background = document.querySelector("html");
  let backgroundBody = document.querySelector("body");

  let arrayImages = ["css/images/debutlight.png", "css/images/txture.png"];
  let getLightMode = (background.style.backgroundImage =
    `url("` + arrayImages[0] + `")`);
 
  // let getDarkMode = (background.style.backgroundImage =
  //   `url("` + arrayImages[1] + `")`);

  /* START ids on input and textarea */
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  phone.placeholder = "+1(123)123-1234";
  let message = document.getElementById("message");
  message.placeholder = "required for messages longer than 10 characters.";
  /* END ids on input and textarea */

  // Extra to replace icon on class error on getting success checkmark//
  const include = (file) => {
    let script = document.createElement("script");
    script.src = file;
    //script.crossorigin = "anonymous";
    script.defer = true;
    getScript(script);
  };
  const getScript = (script) => {
    let htmlScript = document.querySelector("head");
    htmlScript.insertAdjacentElement("beforeend", script);
  };
  include("https://kit.fontawesome.com/68ebcc4019.js");
  // Extra to replace icon on class error on getting success checkmark//

  /* START creating dark mode or light mode */
  let createButtonSwitch = document.createElement("a");
  background.insertAdjacentElement("beforeend", createButtonSwitch);
  backgroundBody.style.backgroundImage = `url("` + arrayImages[0] + `")`;
  backgroundBody.style.transition = "2s";
  
  background.style.backgroundImage = `url("` + arrayImages[0] + `")`;
  background.style.transition = "2s";

  createButtonSwitch.innerHTML += `<i class="fas fa-moon"> </i><p>Switch to Dark Mode</p>`;
  //get light image on light mode
  createButtonSwitch.style.cssText =
    "cursor:pointer; font-size:1.5rem; color:black;";

  let lightImage = () => {
    backgroundBody.style.backgroundImage = `url("` + arrayImages[0] + `")`;
    backgroundBody.style.transition = "2s";
    background.style.backgroundImage = `url("` + arrayImages[0] + `")`;
    background.style.transition = "2s";

    createButtonSwitch.innerHTML = `<i class="fas fa-moon"></i><p>Switch to Dark Mode</p>`;
    createButtonSwitch.style.backgroundImage = `url("` + arrayImages[0] + `")`;
    createButtonSwitch.style.cssText =
      "cursor:pointer; font-size:1.5rem; color:black;";
  };

  //get dark image on dark mode
  let darkImage = () => {
    backgroundBody.style.backgroundImage = `url("` + arrayImages[1] + `")`;
    backgroundBody.style.transition = "2s";
    background.style.backgroundImage = `url("` + arrayImages[1] + `")`;
    background.style.transition = "2s";
    createButtonSwitch.innerHTML = `<i class="fas fa-sun"></i><p>Switch to Light Mode</p>`;
    createButtonSwitch.style.cssText =
      "color:white; cursor:pointer; font-size:1.5rem;";
    createButtonSwitch.style.transition = "2s";
  };
  /* END Change the background Image  dark : light*/

  let form = document.querySelector("form");
  //let paragraphs = form.querySelectorAll("p");

  /* START submitForm */
  const submitForm = (e) => {
    // to stop it from loading
    e.preventDefault();
    /* START form elements on key to store */
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
    /* END form elements on key to store */
    // ** Create validation errors for every single input.

    let boolPhone = false;
    let boolEmail = false;
    let boolName = false;
    let boolMessage = false;

    let validatePhone = (el) => {
      //so this is saying  /^+ numbers 0-9 on {match number length exactly} [-. ] match char. exactly$/
      let regx = /^\+([0-9]{1})\(([0-9]{3})\)([0-9]{3})[-. ]([0-9]{4})$/;
      if (!el.item.match(regx)) {
        banner.innerHTML = `<p class='error'><i class="fas fa-exclamation-triangle"></i> Sorry, please enter the right phone format</p>`;
      } else {
        boolPhone = true;
        return el;
      }
    };
    //mapping the values getting items in being read.
    // making a reusable format on string empty
    let validateString = (el) => {
      //console.log(el.id + ":" + el.item);
      //check if empty
      if (el.item == "") {
        // console.log(`Sorry input can not be empty`);
        if (name.value == el.item) {
          banner.innerHTML = `<p class='error'><i class="fas fa-exclamation-triangle"></i> Sorry, please enter the right name format</p>`;
          name.focus();
        } else if (email.value == el.item) {
          banner.innerHTML = `<p class='error'><i class="fas fa-exclamation-triangle"></i> Sorry, please enter the right email format</p>`;
          email.focus();
        } else if (phone.value == el.item) {
          banner.innerHTML = `<p class='error'><i class="fas fa-exclamation-triangle"></i> Sorry, please enter the right phone format</p>`;
          phone.focus();
        } else if (message.value == el.item) {
          banner.innerHTML = `<p class='error'><i class="fas fa-exclamation-triangle"></i> Sorry, please enter the right message format</p>`;
          message.focus();
        }
        return el;
      }
    };
    let validateEmail = (el) => {
      var emailID = el.item;
      let atpos = emailID.indexOf("@");
      let dotpos = emailID.lastIndexOf(".");

      if (atpos < 1 || dotpos - atpos < 2) {
        banner.innerHTML = `<p class='error'><i class="fas fa-exclamation-triangle"></i> Sorry, please enter the right email format</p>`;
        // return false;
        boolEmail = false;
      } else {
        boolEmail = true;
      }
      // return true;
    };
    let validateStringNaN = (el) => {
      let checkNaN = isNaN(el.item);
      // console.log(checkNaN + ":" + el.item);
      if (checkNaN != true) {
        banner.innerHTML = `<p class='error'><i class="fas fa-exclamation-triangle"></i> Sorry, please enter the right name with letters not numbers format</p>`;
      } else {
        boolName = true;

        return el;
      }
    };
    let validateMessage = (el) => {
      if (el.item.length >= 10) {
        boolMessage = true;
        return el;
      } else {
        banner.innerHTML = `<p class='error'><i class="fas fa-exclamation-triangle"></i> Sorry, please enter the right message format</p>`;
      }
    };
    store.map((el) => {
      if (el.item != null && el.id != 4) {
        // console.log(el.id + ":" + el.item);
        //validate all inputs if empty
        validateString(el);
        if (el.id == 0) {
          //check if name is numbers
          validateStringNaN(el);
        } else if (el.id == 1) {
          //check email
          validateEmail(el);
        } else if (el.id == 2) {
          //check phone
          validatePhone(el);
        } else if (el.id == 3) {
          //check message
          validateMessage(el);
        }

        if (
          boolMessage == true &&
          boolPhone == true &&
          boolEmail == true &&
          boolName == true
        ) {
          /* START thank you screen not banner */
          banner.innerHTML = `<p class='error' style="color:green; border: 2px solid green;"><i class="fas fa-check-square" style="color:green;"></i> Success</p>`;

          //get file js if to get a new screen
          const newInclude = (file) => {
            let script = document.createElement("script");
            script.src = file;
            script.defer = true;
            newGetScript(script);
          };
          const newGetScript = (script) => {
            let htmlScript = document.querySelector("body");
            htmlScript.insertAdjacentElement("afterend", script);
          };
          //get the js form to read on click to go back
          newInclude("./js/form.js");

          /* START Change the background Image */
          let arrayImages = [
            "images/lighthouse.jpg",
            "images/trail.jpg",
            "images/trees.jpg",
            "images/waterfall.jpg",
            "images/winter.jpg",
          ];
          //get images to background with transition
          let x = 0;
          let body = document.querySelector("body");
          let message = `<h1> Thank You! We will contact you shortly within 2-3 business days!</h1><button id="back">Go Back</button><div>Thanks again!</div>`;
          body.innerHTML = message;
          //get back button
          let getBack = document.querySelector("button");
          /* EVENTS last screen*/
          getBack.addEventListener("click", () => {
            console.log("click");
            location.reload();
          });
          let getImage = (x) => {
            //get a new screen
            let getImgTransition = document.querySelector("div");
            getImgTransition.innerHTML =
              ` <img id="images" src="` +
              arrayImages[x] +
              `" alt="a series of landscapes"/>`;
          };

          //set the first image
          getImage(x);
          //start the loop
          let startImageLoop = () => {
            setInterval(() => {
              //if x is equal x + 1 >= 5 is it 0 or x + 1
              x = x + 1 >= arrayImages.length ? 0 : x + 1;
              getImage(x);
              // body.innerHTML = ;
            }, 1000);
          };
          startImageLoop();
        }
        /* END thank you screen not banner */
      }
    });
  };
  /* END submitForm */

  /* EVENTS first screen*/
  addEventListener("submit", submitForm);
  createButtonSwitch.addEventListener("click", () => {
    if (background.style.backgroundImage == getLightMode) {
      darkImage();
    } else {
      lightImage();
    }
  });
};
