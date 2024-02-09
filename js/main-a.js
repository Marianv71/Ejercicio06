console.warn('***  Ejercicio 06 a    ***')

var cantidadDeGatos = 10

var gato1 = '😺'
var gato2 = '😸'
var gato3 = '😹'

var contador = 1

for(i=1; i <=cantidadDeGatos; i++) {
        
    switch (contador) {
    case 1:
        console.log('Gato #' + i +': ' + gato1)
        break
    case 2:
        console.log('Gato #' + i +': ' + gato2)
        break
    case 3:
        console.log('Gato #' + i +': ' + gato3)
        break
    }
    
    if (contador >= 3) {
        contador = 0
    } ++contador   
}

//NOTA: Me hubiese gustado mostrar el dibujo del gato, pero armando el nombre del archivo cocatenando la palabra
// gato + el contador => que se forme así => gato+contador = gato1 (Y que este represente el nombre de la
// variable que contiene el emoji)
