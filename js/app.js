let nomes = [];

function adicionar(){

     let nome = document.getElementById('nome-amigo');
        if(nome.value =='') {
        alert('Nome invalido');
        return;
        }

        if(nomes.includes(nome.value)){
            alert('Esse nome já foi adcionado.');
            return;
        }

        let lista = document.getElementById('lista-amigos');
        nomes.push(nome.value);
        if(lista.textContent == ''){
        lista.textContent = nome.value;
        }else{
        lista.textContent = lista.textContent + ', ' + nome.value;
        }
        nome.value= '';
    }




function sortear(){
    if(nomes.length<4){
        alert('Adicione no minimo 4 nomes.')
        return;
    }

    embaralha(nomes);
    let sorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < nomes.length; i++) {
        if (i == nomes.length -1 ){
        sorteio.innerHTML =  sorteio.innerHTML + nomes[i] + '-->' + nomes[0] + '<br/>';
        }else {
            sorteio.innerHTML = sorteio.innerHTML + nomes[i] + '-->' + nomes [i + 1] + '<br/>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar(){
    nomes = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

for (let numero = 1; numero <= 100; numero++) {
    if (numero % 5 == 0) {
        console.log(numero);
    }
}

let minhalista = [1,2,3];
let outralista = [4,5,6];
let novaLista=minhalista.concat(outralista);
console.log(novaLista);
novaLista.pop();
console.log(novaLista);

const listaComDuplicadas = [1,2,3,4,1,2,3,4];
const set = new Set(listaComDuplicadas);
const listaSemDuplicadas = Array.from(set);
console.log(listaSemDuplicadas);
;
