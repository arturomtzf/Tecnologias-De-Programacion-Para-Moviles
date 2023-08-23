const peticionAPI = async () => {
    var response1 = await fetch("https://rickandmortyapi.com/api/character");
    var response = await response1.json();

    var array = response.results;

    var arrayPares = array.filter((item) => item.id % 2 === 0);

    arrayPares.forEach((item) => {
        if (item.type === "") {
            item.type = "Programación Móvil";
        }
    });

    console.log(arrayPares);

    var resultado = [];
    arrayPares.forEach((item) => {
        resultado.push({
            personaje: item.name,
            episodios: item.episode.length,
            masDeCincoEpisodios: item.episode.length > 5 ? "Si" : "No",
        });
    });
    console.log(resultado);
};

console.log("----Tarea 1 | Ejercicio 3----");
console.log("----Arturo Martinez Fuentes----");
peticionAPI();
