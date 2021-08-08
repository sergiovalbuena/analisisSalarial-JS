//HELPERS
// verificar que el resultado sea par
function esPar(numerito){
    /*
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
    */
   return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista= lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
};
//HELPERS END /////////


//Calulcadora de medianas: 
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);

    if(esPar(lista.length)){
        const personaDeLaMitad1 = lista[mitad - 1];
        const personaDeLaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaDeLaMitad1, personaDeLaMitad2]);
        return mediana;

    }else{
        const personaDeLaMitad = lista[mitad];
        return personaDeLaMitad;
    }
}

//crear array que muestre solo los salarios
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);
//ordenar de mayor a menor el array
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted); 

//mediana del top 10%
const spliceStart = (salariosColSorted.length * 90)/100;
const spliceCount = salariosColSorted.length - spliceStart;
const top10Col = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(top10Col)

console.log(
{    medianaGeneralCol,
    medianaTop10Col,}
);

