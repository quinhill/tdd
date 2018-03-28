let array = [];
let forLoopNum = 5

function arrayFill() {
for (let i = 0; i < forLoopNum; i++) {
  array.push(Math.floor(Math.random() * 100))
  }
}

export.modules = {
  randomArray;
}