function saludar (nombre){
    return `Hola, ${nombre}, buenos dias`;
}

function despedida(){
    return '¡Hasta Luego!'
}

//Realizamos una exportacion
//module.exports.saludar = saludar;
//module.exports.adios = adios;

module.exports = {
//Palabra clave : Valor
saludar : saludar,
adios : despedida
};