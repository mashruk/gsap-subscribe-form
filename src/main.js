import "./styles.scss";

import gsap from "gsap";

const state = {
  toggled: false,
};

const button = document.querySelector("button");
const form = document.querySelector("form");
const outputBox = document.querySelector(".output");

form.onsubmit = function onSubmitHandler(event) {
  event.preventDefault();

  const values = Array.from(event.target.elements).reduce(
    (accumulator, prop) => {
      if (prop.type === "submit") {
        return accumulator;
      }
      accumulator[prop.name] = prop.value?.trim();
      return accumulator;
    },
    {}
  );

  const div = document.createElement("div");
  div.textContent = `${JSON.stringify(values, 2)}`;
  outputBox.appendChild(div);

  gsap.to(".output", {
    delay: 1,
    height: "100px",
    padding: "10px",
    transformOrigin: "bottom",
  });
};

button.addEventListener("click", function (event) {
  event.stopPropagation();

  if (!state.toggled) {
    gsap.to(["form", "header"], {
      opacity: 0,
      duration: 0.1,
      pointerEvents: "none",
    });
    gsap.to("section", {
      height: "70px",
      duration: 0.5,
    });

    gsap.to(".outro-section", {
      x: 0,
      delay: 0.5,
      duration: 0.3,
      ease: "power2.easeInOut",
    });
  }
});
