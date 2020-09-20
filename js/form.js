"use strict";
window.onload = ()=>{
  // to stop it from loading


let submitForm = (e) =>{
  e.preventDefault();
  let form = document.querySelector("form");
  let getP = form.querySelectorAll("p");
//   let selectForm = [];
//   // there is more than one paragraph
//   for (let i = 0; i < getP.length; i++) {
//     selectForm = document.forms;
//   }
//  console.log("select form: ", selectForm);
 // honestly i know that there is one form if there was more than selectForm could be useful
  //knowing that there is 1 form with 0-4: 5 in length of nest tags
  /*
    0: form
        0: input#name.required
        1: input#email.required
        2: input#phone.required
        3: textarea#message
        4: button
   */
  //console.log("new form: ", form + ":" + selectForm[0]);
  //console.log("each form on elements", selectForm[0].elements);
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
      console.log(el.item);
    }
  });
}
  addEventListener("submit", submitForm);
}