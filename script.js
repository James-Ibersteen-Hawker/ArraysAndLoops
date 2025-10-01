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
    this.arr = this.arr.sort(
      (a, b) => a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)
    );
    this.arr.forEach((e, i) => {
      const li = document.createElement("li");
      li.textContent = `${i + 1}. ${e}`;
      document.querySelector("#output").append(li);
    });
    const typeBox = document.createElement("input");
    typeBox.type = "text";
    typeBox.placeholder = "Search";
    typeBox.addEventListener("keyup", (event) => {
      const input = event.target.value;
      document.querySelector("output").innerHTML = "";
      this.arr
        .filter((e) => e.toLowerCase())
        .forEach((e, i) => {
          const li = document.createElement("li");
          li.textContent = `${i + 1}. ${e}`;
          document.querySelector("#output").append(li);
        });
    });
    document.querySelector("ul").insertAdjacentElement("beforebegin", typeBox);
  },
};

OP.run();
