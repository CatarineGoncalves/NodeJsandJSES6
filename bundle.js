// // // // // // class List {
// // // // // //     constructor() {
// // // // // //         this.data = [];
// // // // // //     }
// // // // // //     add(data) {
// // // // // //         this.data.push(data);
// // // // // //         console.log(this.data);
// // // // // //     }
// // // // // // }
// // // // // // class TodoList extends List{ 
// // // // // //     constructor() {
// // // // // //         super();
// // // // // //         this.usuario = 'Diego';
// // // // // //     }
// // // // // //     mostraUsuario(){
// // // // // //         console.log(this.usuario);
// // // // // //     }
// // // // // // }
// // // // // // const MinhaLista = new TodoList();
// // // // // // document.getElementById('novotodo').onclick = function(){
// // // // // //     MinhaLista.add('Novo ToDo');
// // // // // // }
// // // // // // MinhaLista.mostraUsuario();
// // // // // // class Math {
// // // // // //     static soma(a,b) {
// // // // // //         return a + b;
// // // // // //     }
// // // // // // }
// // // // // // console.log(Math(2,4));
// // // // // // const usuario = {
// // // // // //     nome: 'Diego'
// // // // // // }
// // // // // // usuario.nome = 'Cleiton';
// // // // // // console.log(usuario);
// // // // // // function teste(x) {
// // // // // //     let y = 2;
// // // // // //     if (x > 5) {
// // // // // //         let y = 4;
// // // // // //         console.log(x,y);
// // // // // //     }
// // // // // //   }
// // // // // //   teste(10);
// // // // // const arr = [1, 3, 4, 5 , 8, 9];
// // // // // const newArr = arr.map(function (item, index) {
// // // // //     return item * index; //ou algum int
// // // // // });
// // // // // console.log(newArr);
// // // // // //map serve p percorrer e voltar 
// // // // // const sum = arr.reduce(function(total, next) {
// // // // //     return total + next;
// // // // // });
// // // // // console.log(sum);
// // // // // const filter = arr.filter(function(item){
// // // // //     return item % 2 === 0;
// // // // // });
// // // // // console.log(filter);
// // // // // const find = arr.find(function(item) {
// // // // //     return item === 4;
// // // // // });
// // // // // const arr2 = [1, 3, 4 , 5 , 6 ];
// // // // // const newArr2 = arr2.map(item => item * 2);
// // // // // console.log(newArr2);
// // // // // const teste = () => ({nome: 'diego'});
// // // // // // 
// // // // // console.log(teste());
// // // // function soma (a = 3 ,b = 6) {
// // // //     return a + b;
// // // // }
// // // // console.log(soma(1));
// // // // console.log(soma());
// // // // const soma = (a = 1, b= 4)
// // // const usuario = {
// // //     nome: 'Diego',
// // //     idade: 23,
// // //     endereco: {
// // //         cidade: 'Rio do Sul',
// // //         estado: 'SC',
// // //     },
// // // };
// // // const {nome,idade, endereco: {cidade, estado}} = usuario;
// // // console.log(nome);
// // // console.log(idade);
// // // console.log(estado);
// // // function mostrarNome({nome,idade}) {
// // //     console.log(nome,idade)
// // // }
// // // mostrarNome(usuario);
// // // REST
// // // resto das propriedades
// // const usuario = {
// //     nome: 'Diego',
// //     idade: 23,
// //     empresa: 'Rocketseat'
// // };
// // const {nome, ...resto} = usuario;
// // console.log(nome);
// // console.log(resto);
// // const arr = [1,2,3,4];
// // const [ a,b,...c] = arr;
// // console.log(c)
// // function soma (...params) {
// //     return params.reduce((total, next) =>  total + next);
// // }
// // console.log(soma(1,2,3))
// // //SPREAD
// // //repassar as informacoes 
// // const arr1 = [1,2,3];
// // const arr2 = [4,5,6];
// // const arr3 = [...arr1, ...arr2];
// // console.log(arr3);
// // const usuario1 = {
// //     nome: 'Diego',
// //     idade: 23,
// //     empresa: 'Rocketseat',
// // };
// // const usuario2 = {...usuario1, nome: 'Gabriel'};
// // console.log(usuario2);
// const nome = 'Diego';
// const idade = '32';
// console.log(`nome é ${nome} e tenho ${idade} anos`) 
// const nome = 'Diego';
// const idade = '32';
// const usuario1 = {
//     nome,
//     idade,
//     empresa: 'Rocketseat',
//  };
//  console.log(usuario1);
"use strict";
