console.warn('***  Ejercicio 06 b    ***')

var cantidadDeGatos = 5
var cantidadDeHuellas = 3

var gato = '🐈'
var huellas = '🐾'
var patas = ''

for(i=1; i <= cantidadDeGatos; i++) {   

    for(j=1; j <= cantidadDeHuellas; j++) {

        patas += huellas
    }
    
    console.log('Gato #' + i +': ' + gato + patas)
    patas = ''
}

