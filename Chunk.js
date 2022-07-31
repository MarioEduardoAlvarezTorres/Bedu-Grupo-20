function chunk(array, size) {
    arrayFinal = []                                 //ARRAYFINAL = RESULTADO QUE SE MOSTRARÁ
    arrayAux = []                                   //ARRAYAUX = SIRVE PARA IR ALMACENANDO LOS SUBARREGLOS
    cont=0;                                         //CONT = CONTADOR PARA VERIFICAR EL TAMAÑO DEL SUBARREGLO
    for (let i = 0; i < array.length; i++) {
        arrayAux.push(array[i]);                    //SE AGREGA EL CONTENIDO DEL ARREGLO ORIGINAL AL AUXILIAR
        cont++;
        if(cont === size || i+1 === array.length){  //EN CASO DE FORMAR EL SUBARREGLO (DE TAMAÑO N) O NO TENER MAS ELEMENTOS DENTRO DEL ARREGLO ORIGINAL
            arrayFinal.push(arrayAux)               //AGREGAMOS EL ARREGLO AUXILIAR AL FINAL
            cont=0                                  //SE REINICIA EL CONTADOR
            arrayAux = []                           //SE "VACIA" EL ARREGLO AUXILIAR
        }
    }
    return arrayFinal
  };
  
  const data = [1, 2, 3, 4, 5, 6, 7, 8]
  
  console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
  console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
  console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]