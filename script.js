const q = console.log;

const text = document.getElementById("textarea");
const choices = document.getElementById("choices");
const index = 0;
let items = [""];
let eventKey = "";

text.focus();

const textToArray = (text) => {
  let newItem = "";
  let array = [];

  for (let index = 0; index < text.length; index += 1) {
    let letter = text[index];
    if (letter !== ",") {
      newItem += text[index];
      if (index == text.length - 1) {
        array.push(newItem);
        newItem = "";
      }
    } else {
      array.push(newItem);
      newItem = "";
    }
  }

  return array;
};

const showItemsFromArray = () => {
  choices.innerHTML = "";

  items.forEach(function (item, index) {
    choices.innerHTML += `<div id="item${index}" class="choice">${item}</div>`;
  });
};

const selectRandom = (itemsNom) => {
  const myInterval = setInterval(function () {
    let selected = Math.floor(Math.random() * itemsNom);
    document.getElementById(`item${selected}`).classList.add("selected");
    setTimeout(function () {
      document.getElementById(`item${selected}`).classList.remove("selected");
    }, 100);
  }, 100);

  setTimeout(function () {
    clearInterval(myInterval);
    setTimeout(function () {
      let iii = Math.floor(Math.random() * itemsNom);
      document.getElementById(`item${iii}`).classList.add("selected");
    }, 101);
  }, 5000);
};

function update(event) {
  // q(event.key);
  eventKey = event.key;

  if (eventKey !== "Enter") {
    setTimeout(function () {
      items = textToArray(text.value);
      showItemsFromArray();
    }, 1);
  } else {
    selectRandom(items.length);
    setTimeout(function () {
      text.value = "";
    }, 1);
  }
  // setTimeout(function () {
  //   q(document.getElementById("textarea").value);
  // }, 1);

  // setTimeout(function () {
  //   choices.innerHTML += `<div id= class="choice">${text.value}</div>`;
  // }, 1);

  // setTimeout(function () {
  //   if (
  //     (65 <= event.keyCode && 90 >= event.keyCode) ||
  //     (48 <= event.keyCode && 57 >= event.keyCode) ||
  //     (96 <= event.keyCode && 105 >= event.keyCode) ||
  //     event.keyCode == 188 ||
  //     event.keyCode == 13
  //   ) {
  //     if (eventKey == ",") {
  //       addItem();
  //     } else {
  //       if (eventKey == "Enter") {
  //         chooseRandom();
  //       } else {
  //         addLetter();
  //         showItemsFromArray();
  //       }
  //     }
  //   }
  // }, 1);
}
