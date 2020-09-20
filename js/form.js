"use strict";
window.onload = ()=>{
  //to replace icon on class error on getting success checkmark//
  const include = (file) => {
    let script = document.createElement("script");
    script.src = file;
    script.crossorigin = "anonymous";
    script.defer = true;
    getScript(script);
  };
  const getScript = (script) => {
    let htmlScript = document.querySelector("head")
    htmlScript.insertAdjacentElement("beforeend", script);
  };
  include("https://kit.fontawesome.com/68ebcc4019.js");
  //to replace icon on class error on getting success checkmark//

  /*submit form*/
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
    // or if i just want to get the ids
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let message = document.getElementById("message");
    let banner = document.querySelector("p");
    //banner.innerHTML = "Please enter the form fields below:";
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

  //validate name
  addEventListener("submit", submitForm);
}