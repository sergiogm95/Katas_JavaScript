/*4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
evento click que ejecute un console log con la información del evento del click

4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

4.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/

//4.1
const inputClick = document.querySelector(".click");
const button = document.getElementById("btnToClick");

button.addEventListener("click", function (event) {
  console.log(event);
  console.log(inputClick.value);
});

//4.2
const inputFocus = document.querySelector(".focus");

inputFocus.addEventListener("input", function (event) {
  console.log(event.target.value);
});

//4.3
const inputValue = document.querySelector(".value");

inputValue.addEventListener("input", function (event) {
  console.log(event.target.value);
});

//No sé si he entendido el ejercicio correctamente. Lo que he hecho es un botón que imprime el input de clase "click",
//y luego he hecho que las dos casillas de input de clases "focus" y "value" impriman automáticamente cualquier alteración que reciban.
