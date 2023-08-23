function licuadora(arr) {
    var mezcla = [[]];
    for (var i = 0; i < arr.length; i++) {
        var aux = arr[i];
        var c = mezcla.length;
        for (var j = 0; j < c; j++) {
            const aux2 = mezcla[j];
            mezcla.push(aux2.concat(aux));
        }
    }

    console.log(mezcla);
}

console.log("----Tarea 1 | Ejercicio 2----");
console.log("----Arturo Martinez Fuentes----");
licuadora(["a", "b", "c"]);
