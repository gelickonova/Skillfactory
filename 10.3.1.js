"use strict";

const x = prompt("Введите число:");

const numberX = +x;
if (x!=null){
  const y = typeof numberX;
  if (y === "number") {
    if (isNaN (numberX)) alert("Упс, кажется вы ошиблись");
    else
    if (x % 2 === 0) alert(`Число ${numberX} чётное`);
    else alert(`Число ${numberX} нечётное`);
  }
  else alert("Упс, кажется вы ошиблись");
}
