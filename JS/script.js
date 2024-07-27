


let drinks = +prompt('1-кава, 2-чай, 3-сік');
switch (drinks) {
  case 1:
    alert('кава');
    break;
  case 2:
    alert('чай');
    break;
  case 3:
    alert('сік');
    break;
  default:
    alert('нічого');
    break;
}




let day = prompt('день тижня');
switch (day) {
  case 'Понеділок':
  case 'Вівторок':
  case 'Середа':
  case 'Четвер':
  case 'Пятниця':
    alert('Робочий день');
    break;
  case 'Субота':
  case 'Неділя':
    alert('Вихідний день');
    break;
  default:
    alert("це не день");
    break;
}




let season = +prompt('Введіть місяць числом');
switch (season) {
   case 3:
   case 4:
   case 5:
    alert('Весна');
    break;
   case 6:
   case 7:
   case 8:
    alert('Літо');
    break;
   case 9:
   case 10:
   case 11:
    alert('Осінь');
    break;
    case 1:
    case 2:
    case 12:
    alert('Зима');
    break;
  default:
    alert('Такого нема');
    break;
}




let daysInMonth = +prompt('Введіть місяц числом');
switch (daysInMonth) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert('тут 31 день');
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert('тут 30 днів');
    break;
  case 2:
    alert('тут 29 днів');
    break;
  default:
    alert('такого нема');
    break;
}



let colors = prompt('1 зелений, 2 жовтий, 3 червоний ');
switch (colors) {
  case '1':
    alert('йти');
    break;
  case '2':
    alert('чекати');
    break;
  case '3':
    alert('стоп');
    break;
  default:
    alert('такого нема');
    break;
}




let num1 = +prompt('Вписати число');
let num2 = +prompt('Вписати число');
let operation = prompt('Введіть дію '+', '-', '/', '*'');
let result = 0;

switch (operation) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '/':
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      alert('не можна ділити на нуль');
    }
    break;
    case '*':
        result = num1 * num2;
        break;
  default:
    alert('операція неможлива');
    break;
}
alert(result);