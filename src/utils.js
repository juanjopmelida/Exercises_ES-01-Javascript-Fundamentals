// Biggest Word
// Crea una función que reciba una frase en formato string y devuelva la palabra más larga. 
// En caso de haber varias con longitud máxima que devuelva siempre la primera. 
// Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.
function biggestWord(phrase) {
    const _arrPhrase = phrase.split(" ");
    let _biggestWord = "";
    for (let index = 0; index < _arrPhrase.length; index++) {
        const element = _arrPhrase[index];
        if (element.length > _biggestWord.length) _biggestWord=element;
    }
    return _biggestWord;
}

// Values
// Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto.
function values(object) {
    let value = new Array();
    let i = 0;
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            value[i] = object[key];
            i++;
        }
    }
    return value;
}

// Check Arguments
// Es muy habitual en javascript, al recibir argumentos de una función, querer asegurarnos de que no sean undefined o null. En este ejercicio debes convertir el código de abajo en algo equivalente pero más compacto y expresivo.
// TIP: Piensa en el operador ternario y también en el operador OR.
// TIP: Puedes suponer que input es siempre de tipo string, incluyendo null o undefined. Es decir, no vas a recibir números, objetos, etc.
function f(arg) {
    let resp = "";
    arg === null ? resp="nulo" : arg === undefined ? resp="undefined" : resp=arg;
    return resp;
}