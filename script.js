// selector
const rateNumber = document.querySelectorAll(".ratebtn");
const submitBtn = document.querySelector(".submit");

// event
rateNumber.forEach((rate) => {
  rate.addEventListener("click", getRateNumber);
});

function getRateNumber(event) {
  addActive(event.target);
  let ratingNum = event.target.innerText;
  thankRating(ratingNum);
}

function thankRating(rate) {
  let thankHTML = `
       <div class="thank__container">
      <div class="thank__wrap">
        <div class="thankIcon">
          <img src="./images/illustration-thank-you.svg" alt="thank you" class="thank__svg" />
        </div>
        <article class="thank__content">
          <p>You selected ${rate} out of 5</p>
          <h1>Thank you!</h1>
          <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </article>
      </div>
    </div>
    
    `;
  insertThankYou(thankHTML);
}

function removeActive() {
  let removeActiveRate = document.querySelector(".active");
  if (removeActiveRate) {
    removeActiveRate.classList.remove("active");
  }
}

function addActive(active) {
  removeActive();
  if (!active.classList.contains("active")) {
    active.classList.add("active");
  }
}

function insertThankYou(thankHtml) {
  submitBtn.addEventListener(
    "click",
    () => {
      document.querySelector(".interactiveRating").innerHTML = thankHtml;
    },
    { once: true },
  );
}
