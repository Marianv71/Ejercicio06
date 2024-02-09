console.warn('***  Ejercicio 06 c    ***')

var cantidadDeGatos = 10
var cantidadDeHuellas = 4

var gato = '🐈'
var huellas = '🐾'
var patas = ''
var separador = '⬛'

for(i=1; i <= cantidadDeGatos; i++) {   

    for(j=1; j <= cantidadDeHuellas; j++) {

        patas += huellas
    }
    
    if(i%2 == 0){
        //agrego separador
        console.log('Gato #' + i +': ' + gato + separador + patas)
    } else {
        console.log('Gato #' + i +': ' + gato + patas)        
    }
    
    patas = ''
}
