"use strict";
const creditCardNumber = document.querySelector(".creditCard__Number");
const creditfullName = document.querySelector(".creditCard__details--fullName");
const creditCardDate = document.querySelector(".creditCard__details--date");
const creditCardCvc = document.querySelector(".creditCard__sec");
const content__right = document.querySelector(".content__right");

const btn = document.querySelector(".btn");
const form = document.querySelector(".form");

const format = (s) => {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
};

form.addEventListener("input", (e) => {
  e.preventDefault();

  const name = e.target.name;
  const value = e.target.value;

  if (name === "fullName") {
    creditfullName.textContent = value;
  }

  if (name === "number") {
    creditCardNumber.textContent = format(value);
  }

  if (name === "date--mm") {
    creditCardDate.childNodes[1].textContent = value;
  }

  if (name === "date--yy") {
    creditCardDate.childNodes[5].textContent = value;
  }

  if (name === "cvc") {
    creditCardCvc.textContent = value;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const html = `
  <div class="thank">
    <img src="images/icon-complete.svg" alt="icon complete" />
    <h2 class="thank-header">thank you!</h2>
    <p class="thank-message">We've added your card details</p>
    <button class="btn btn--medium">Confirm</button>
    </div>
   `;

  content__right.innerHTML = html;

  e.preventDefault();
  document.querySelector(".btn--medium").addEventListener("click", (e) => {
    location.reload();
  });
});
