"use strict";
const OP = {
  arr: [
    "Dornier Do X",
    "Concorde",
    "de Havilland Mosquito",
    "Messerschmitt Gigant",
    "PBY Catalina",
    "Sea Dart",
    "Bristol Type 188",
    "boeing 314",
    "Fairey Rotodyne",
    "Lockheed Constellation",
  ],
  run() {
    const output = document.querySelector("#output");
    const render = (match = "") => {
      output.textContent = "";
      let index = 1;
      this.arr.forEach((e) => {
        if (e.toLowerCase().includes(match.toLowerCase()))
          output.insertAdjacentHTML("beforeend", `<li>${index++}. ${e}</li>`);
      });
    };
    this.arr = this.arr.sort(
      (a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)
    );
    render();
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "search";
    output.before(input);
    input.addEventListener("keyup", (event) => render(event.target.value));
  },
};
OP.run();
