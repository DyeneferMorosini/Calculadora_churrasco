var tabelaDePreco = {
    "picanha":60,
    "alcatra":60,
    "paoAlho":60,
    "farofa":60,
    "mandioca":60,
    "vinagrete":60,
    "suco":60,
    "refigerante":60,
    "cerveja":60,
}

var qtPorPessoa = {
    // valores em g/ml
    "picanha":300,
    "alcatra":300,

    "paoAlho":500,
    "farofa":100,
    "mandioca":100,
    "vinagrete":150,

    "suco":1000,
    "refigerante":500,
    "cerveja":5000,
}

carneAdulto  = 300;
carneCrianca = 150;


function calcular(dados){
    var totalCarneAdulto = carneAdulto * dados.adultos //kg
    var totalCarneCrianca = carneCrianca * dados.criancas //kg

    console.log(dados);
    return {
        "carne":`${(totalCarneAdulto + totalCarneCrianca) / 1000}Kg`,
        "bebidas":{
            "cerveja":`${dados.cerveja? (dados.adultos * qtPorPessoa.cerveja) / 1000:0}l`,
            "suco":`${dados.suco? ((dados.criancas * qtPorPessoa.suco/2) + (dados.adultos * qtPorPessoa.suco)) / 1000:0}l`,
            "refrigerante":`${dados.suco? ((dados.criancas * qtPorPessoa.suco/2) + (dados.adultos * qtPorPessoa.suco)) / 1000:0}l`,

        },
        "mandioca":`${dados.mandioca?((dados.criancas * qtPorPessoa.mandioca/2) + (dados.adultos * qtPorPessoa.mandioca))/ 1000:0}Kg`,
        "vinagrete":`${dados.vinagrete?((dados.criancas * qtPorPessoa.vinagrete/2) + (dados.adultos * qtPorPessoa.vinagrete)) /1000:0}Kg`,
        "paoAlho":`${dados.paoAlho?((dados.criancas * qtPorPessoa.paoAlho/2) + (dados.adultos * qtPorPessoa.paoAlho)) /1000:0}Kg`,
    }
}


function objectForm(form){
    let ret = {};
    var form = $(form)
    for(var valor of form.serializeArray()){
        ret[valor.name] = valor.value;
    }
    form.trigger('reset');
    return ret;
}

$(document).on("click", "#calcular", function() {
    let form  = objectForm("#form_churrasco");

    console.log(calcular(form));

});