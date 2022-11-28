const form = document.getElementById('form-agenda');
const nomeContato =[];
const telefoneContato = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaContato();
});

function adicionaLinha() {
    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputTelefoneContato = document.getElementById('telefone-agenda');

    if (nomeContato.includes(inputNomeAgenda.value)) {
        alert(`O nome (${inputNomeAgenda.value}) já existe, renomei-o diferente.`);
    } else {
        nomeContato.push(inputNomeAgenda.value);
        telefoneContato.push(parseFloat(inputTelefoneContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAgenda.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }


    inputNomeAgenda.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaContato() {
    console.log(nomeContato);
    console.log(telefoneContato);
}



