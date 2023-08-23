function CamelToSnake(str) {
    var snake = "";
    var words = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            snake += "_" + str[i].toUpperCase();
            words++;
        } else {
            snake += str[i];
        }
    }
    snake = snake.substring(1);

    console.log({
        palabras: words,
        snakeCase: snake,
    });
}

console.log("----Tarea 1 | Ejercicio 1----");
console.log("----Arturo Martinez Fuentes----");
CamelToSnake("MateriaProgramacionMovil");
