//Declarar base de datos para consulta, el botón select del html por su ID, y la imagen dentro del div con su clase.
const API_URL = "https://thronesapi.com/api/v2/Characters"; //Crear una constante con el link a la base de datos
const select = document.getElementById("character-list");
const img = document.querySelector(".character-image");

async function getGameOfThronesCharacters() {
  //La función se etiqueta como async para que pueda seguir funcionando aunque haya que esperar resultados desde la API externa
  try {
    //El try es lo que queremos que ocurra si todo va bien en la interacción con la API
    const response = await fetch(API_URL); //con await se marcan los elementos que hay que esperar desde la API, y fetch marca una solicitud http
    const characters = await response.json(); //json es el formato en el que queremos recibir los datos de la API

    characters.forEach((character) => {
      //Este método me lo sugirió la IA, en lugar del bucle for que yo estaba intentando.
      const option = document.createElement("option"); //Aquí se crean las opciones del select, una por cada personaje que recibamos desde la API.
      option.value = character.imageUrl;
      option.textContent = character.fullName;
      select.appendChild(option);
    });

    if (characters.length > 0) {
      // Otra sugerencia de la IA, para que aparezca la primera imagen de personaje antes de que se realice el primer cambio en el select, así no queda vacío hasta la primera interacción.
      img.src = characters[0].imageUrl;
    }
  } catch (error) {
    //El catch es lo que queremos que aparezca si la API falla o el imput del usuario no entra en el rango esperado
    console.error("No se pudo encontrar el personaje: ", error);
  }
}

select.addEventListener("change", (event) => {
  // Por último añadimos el evento para el cambio de imagen con cada cambio de nombre de personaje del usuario.
  const imageUrl = event.target.value;
  img.src = imageUrl;
});

getGameOfThronesCharacters(); //Llamada a ejecutar la función
