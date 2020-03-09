// import axios from 'axios';

class App {
    constructor(){
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');

        this.registerHandLers();
    }
    registerHandLers(){
        this.formEl.onsubmit = event => this.addRepository(event);
    }
    addRepository (event)
    {
        event.preventDefault();

        this.repositories.push({
            name:'rocketseat.com.br',
            descripton:'Tire sua ideia do papel e dê vida a sua startup',
            avatar_url:'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'https://github.com/Rocketseat/curso-javascript-do-zero',
        });
        
        this.render();
    }

        render(){

            this.listEl.innerHTML= '';
            this.repositories.forEach(repo => {
                let imgEl = document.createElement('img');
                imgEl.setAttribute('src', repo.avatar_url);

                let titleEl = document.createElement('strong');
                titleEl.appendChild(document.createTextNode(repo.name));

                let descriptonEl = document.createElement('p');
                descriptonEl.appendChild(document.createTextNode(repo.descripton));

                let linkEl = document.createElement('a');
                linkEl.setAttribute('target','_blank');
                linkEl.appendChild(document.createTextNode('Acessar'));

                let listItemEl = document.createElement('li');
                listItemEl.appendChild(imgEl);
                listItemEl.appendChild(titleEl);
                listItemEl.appendChild(descriptonEl);
                listItemEl.appendChild(linkEl);

                this.listEl.appendChild(listItemEl);  

            });
        }

    }

new App();












































// class Api{
//     static async getUserInfo(username){
//         try {
//             const response = await axios.get(`https://api.github.com/users/${username}`);
//             console.log(response)
//         } catch(err) {
//             console.warn('erro na api')
//         }
//     }
// }

// Api.getUserInfo('catarinegoncalvedasdas');
// Api.getUserInfo('catarinegoncalves');

// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve ('OK')}, 2000);
// });

// minhaPromise().then(response => ...)

// async function executarPromise(){
//     console.log(await minhaPromise());    
//     console.log(await minhaPromise());    
//     console.log(await minhaPromise());    
//     console.log(await minhaPromise());    
// }

// executarPromise();


// minhaPromise().then(response => {
//     console.log(response)
// })
// .catch(err =>)
// ;

// const executarPromise = async () => {
//     console.log(await minhaPromise());    
//     console.log(await minhaPromise());    
//     console.log(await minhaPromise());    
//     console.log(await minhaPromise());  
// }
// executarPromise();