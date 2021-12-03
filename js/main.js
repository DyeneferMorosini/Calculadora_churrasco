var tabelaDePreco = {
    "picanha":70.89,
    "alcatra":49,
    "costela":23.98,
    "linguica":21.99,
    "coxaAsa":18.99,

    "paoAlho":8.25,
    "farofa":7.95,
    "mandioca":2,
    "vinagrete":47.60,
    "suco":0.99,
    "refigerante":8,
    "cerveja":30,
}

var qtPorPessoa = {
    // valores em g/ml
    "carne":300,

    "paoAlho":150,
    "farofa":100,
    "mandioca":100,
    "vinagrete":150,

    "suco":1000,
    "refigerante":500,
    "cerveja":5000,
}



function calcular(dados){
    var totalCarne = (qtPorPessoa.carne * dados.adultos) + ((qtPorPessoa.carne/2) * dados.criancas) //kg
    var count = 0;

    for(ob in dados){
        if (ob == 'picanha') {count++}
        else if (ob == 'alcatra') {count++}
        else if (ob == 'costela') {count++}
        else if (ob == 'linguica') {count++}
        else if (ob == 'coxaAsa') {count++}
    }

    return {
        "carne":`${totalCarne / 1000}Kg`,
        "picanha":`${ dados.picanha? totalCarne/count: 0}`,
        "alcatra":`${ dados.alcatra? totalCarne/count: 0}`,
        "costela":`${ dados.costela? totalCarne/count: 0}`,
        "linguica":`${ dados.linguica? totalCarne/count: 0}`,
        "coxaAsa":`${ dados.coxaAsa? totalCarne/count: 0}`,
        "bebidas":{
            "cerveja":`${dados.cerveja? (dados.adultos * qtPorPessoa.cerveja) / 1000:0}`,
            "suco":`${dados.suco? ((dados.criancas * qtPorPessoa.suco/2) + (dados.adultos * qtPorPessoa.suco)) / 1000:0}`,
            "refrigerante":`${dados.suco? ((dados.criancas * qtPorPessoa.suco/2) + (dados.adultos * qtPorPessoa.suco)) / 1000:0}`,

        },
        "mandioca":`${dados.mandioca?((dados.criancas * qtPorPessoa.mandioca/2) + (dados.adultos * qtPorPessoa.mandioca))/ 1000:0}`,
        "vinagrete":`${dados.vinagrete?((dados.criancas * qtPorPessoa.vinagrete/2) + (dados.adultos * qtPorPessoa.vinagrete)) /1000:0}`,
        "paoAlho":`${dados.paoAlho?((dados.criancas * qtPorPessoa.paoAlho/2) + (dados.adultos * qtPorPessoa.paoAlho)) /1000:0}`,
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

function elementList(nome,valor,desc = 'total'){
    if (desc == 'total') {
        return `
            <li class="list-group-item d-flex justify-content-between">
                <span>${nome}</span>
                <strong>${valor.toFixed(2)}</strong>
            </li>
        `
    }
    return `
        <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 class="my-0">${nome}</h6>
                <small class="text-muted">${desc}Kg</small>
            </div>
            <span class="text-muted">R$ ${valor.toFixed(2)}</span>
        </li>
    `
}

function render(dados){
    var html = ""
    var total = 0
    for(ob in dados){
        if (ob == 'picanha') {
            let valor = (dados[ob]/1000)*tabelaDePreco.picanha
            total += valor
            dados[ob] != 0? html += elementList('Picanha', valor,dados[ob]/1000):null;
        }
        else if (ob == 'alcatra') {
            let valor = (dados[ob]/1000)*tabelaDePreco.alcatra
            total += valor
            dados[ob] != 0? html += elementList('Alcatra',valor ,dados[ob]/1000):null;
        }
        else if (ob == 'costela') {
            valro = (dados[ob]/1000)*tabelaDePreco.costela
            dados[ob] != 0? html += elementList('Costela',valro ,dados[ob]/1000):null;
        }
        else if (ob == 'linguica') {
            let valor = (dados[ob]/1000)*tabelaDePreco.linguica
            total += valor
            dados[ob] != 0? html += elementList('Linguica',valor ,dados[ob]/1000):null;
        }
        else if (ob == 'coxaAsa') {
            let valor = (dados[ob]/1000)*tabelaDePreco.coxaAsa
            total += valor
            dados[ob] != 0? html += elementList('Coxinha da asa',valor ,dados[ob]/1000):null;
        }
        else if (ob == 'paoAlho') {
            let valor = (dados[ob])*tabelaDePreco.paoAlho
            total += valor
            dados[ob] != 0? html += elementList('Pão de Alho',valor ,dados[ob]):null;
        }
        else if (ob == 'farofa') {
            let valor = (dados[ob])*tabelaDePreco.farofa
            total += valor
            dados[ob] != 0? html += elementList('Farofa',valor ,dados[ob]):null;
        }
        else if (ob == 'mandioca') {
            let valor = (dados[ob])*tabelaDePreco.mandioca
            total += valor
            dados[ob] != 0? html += elementList('Mandioca',valor ,dados[ob]):null;
        }
        else if (ob == 'vinagrete') {
            let valor = (dados[ob])*tabelaDePreco.vinagrete
            total += valor
            dados[ob] != 0? html += elementList('Vinagrete',valor ,dados[ob]):null;
        }
        else if (ob == 'suco') {
            let valor = (dados[ob]/1000)*tabelaDePreco.suco
            total += valor
            dados[ob] != 0? html += elementList('Suco',valor ,dados[ob]/1000):null;
        }
        else if (ob == 'refigerante') {
            let valor = (dados[ob]/1000)*tabelaDePreco.refigerante 
            total += valor
            dados[ob] != 0? html += elementList('Refigerante',valor ,dados[ob]/1000):null;
        }
        else if (ob == 'cerveja') {
            let valor = (dados[ob]/1000)*tabelaDePreco.cerveja
            total += valor
            dados[ob] != 0? html += elementList('Cerveja',valor ,dados[ob]/1000):null;
        }
    }
    html += elementList('Total',total);


    $("#list_result").html(html);
}
$(document).on("click", "#calcular", function() {
    const form  = objectForm("#form_churrasco");
    const dados = calcular(form)

    render(dados);

});