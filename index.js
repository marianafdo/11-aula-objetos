// estrutura de um objeto

/* const professor = {
    nome: 'Vitor',
    idade: 29,
    email: 'vitor@gmail.com'
}
console.log(professor.idade);
console.log(professor["email"]);

professor.nome = 'Mika';
professor['email'] = 'profmika@gmail.com';

console.log(professor.nome);
console.log(professor["email"]); */

// exercicios

const filme = {
    titulo: 'Medida Provisória',
    diretor: 'Lazaro Ramos',
    lancamento: 2020,
    elenco: ["Emicida", "Adriana Esteves", "Thais Araujo", "Seu Jorge", "Alfred Enoch"],
    assistido: Boolean(true),
} 

filme.personagens = ["Capitu", "Antonio", "André", "Isabel", "Berto"];

console.log(filme.elenco[0], "interpreta", filme.personagens[4]);
console.log(filme.elenco[1], "interpreta", filme.personagens[3]);
console.log(filme.elenco[2], "interpreta", filme.personagens[0]);
console.log(filme.elenco[3], "interpreta", filme.personagens[2]);
console.log(filme.elenco[4], "interpreta", filme.personagens[1]);

filme.elenco[0] = 'Xuxa';

console.log(filme.titulo);
console.log(filme.diretor);
console.log(filme.lancamento);
console.log(filme["elenco"]);
console.log(filme["assistido"]);      

console.log(filme);



// exercicio 2
const pessoa = {
    nome: 'Mariana',
    idade: 32,
    musica: "MPB",
}

console.log("O nome da pessoa é", pessoa.nome, "ela tem", pessoa.idade, "anos e gosta muito de", pessoa.musica);


// objeto dentro de objeto {{}}
const donoDoPet = {
    nome: "Vitor",
    pet: {
        nomeDoPet: "Wanda",
        raca: "Vira-lata",
        idade: 1,
        }
}

console.log(donoDoPet.pet.nomeDoPet);

// array dentro de objeto{[]}

const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "css", "HTML"]
    }
 
//para adicionar novos 
curso.numeroEstudantes = 50;
curso['turno'] = "noite";

console.log(curso.linguagens[0]);
console.log(curso)

// objeto dentro de array [{}]

const professores = [
    {nome: "Andrei", modulo: 1},
    {nome: "Vitor", modulo: 2},
    {nome: "Mina", modulo: 3}
]

console.log(professores[1].nome)


// espalhamento ou spread ... (copiar objeto ou array)

const usuario = {
    nome: 'Prof',
    idade: 25,
    email: 'prof@senac.com.br',
    cidade: 'São Paulo',
}

const novoUsuario = {
    ...usuario,
    nome: 'João',
    idade: 29,
}

const listaDeNomes = ['Mila', 'Paula', 'Vitor'];
const copiaListaDeNomes = [...listaDeNomes];
copiaListaDeNomes[0] = "João";
console.log(copiaListaDeNomes);



function receber(objetoPessoa){
   const novaPessoa = {
    ...objetoPessoa,
   }
   novaPessoa.comidas = ["pizza", "hamburguer"];
   novaPessoa.melhorAmigo = {nome: 'Diênifer', idade: 31};

   console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidas[0]}, ${novaPessoa.comidas[1]} e seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos.`);
}

receber(pessoa)
