// Obtenemos los elementos de los botones y los contadores de clics
const btn1 = document.querySelector("#btn-1");
const count1 = document.querySelector("#count-likes-1");

const btn2 = document.querySelector("#btn-2");
const count2 = document.querySelector("#count-likes-2");

const btn3 = document.querySelector("#btn-3");
const count3 = document.querySelector("#count-likes-3");

// Variables para almacenar la cantidad de clics
let clicks1 = parseInt(count1.textContent);
let clicks2 = parseInt(count2.textContent);
let clicks3 = parseInt(count3.textContent);

// Funciones para aumentar la cantidad de clics y actualizar los contadores
const increaseClicks1 = () => {
    clicks1++;
    count1.textContent = clicks1;
};

const increaseClicks2 = () => {
    clicks2++;
    count2.textContent = clicks2;
};

const increaseClicks3 = () => {
    clicks3++;
    count3.textContent = clicks3;
};

// Asignamos el evento 'click' a cada botón para aumentar los clics y actualizar los contadores
btn1.addEventListener("click", increaseClicks1);
btn2.addEventListener("click", increaseClicks2);
btn3.addEventListener("click", increaseClicks3);
