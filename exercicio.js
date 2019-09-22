function checkYear(idade) {
  return new Promise(function(resolve, reject) {
    if(idade >= 18) {
      setTimeout(resolve, 2000)
    } else {
      setTimeout(reject, 2000)
    }
  });
}

checkYear()
  .then(function(retorno) {
    console.log('Maior que 18')
  })
  .catch(function() {
    console.log('Menor de 18 anos')
  });

const inputElement = document.createElement('input');
const buttonElement = document.createElement('button');
const textButton = document.createTextNode('procurar')

inputElement.setAttribute('placeholder', 'Digite seu usuario do Github');
inputElement.setAttribute('name', 'name')
buttonElement.appendChild(textButton)

const container = document.getElementById('app');

container.appendChild(inputElement);
container.appendChild(buttonElement);

buttonElement.onclick = function nameDevUser() {
  const devUser = inputElement.value;
  document.getElementById('listRepository').innerHTML = `<h1>Carregando</h1>`
  axios.get(`https://api.github.com/users/${devUser}/repos`)
    .then(returned => {
      const dataGit = returned.data
      let html = '';
      dataGit.map(element => {
        html += `<li>${element.name}</li>`;
      });
      document.getElementById('listRepository').innerHTML = html;

    })
    .catch(error => {
      console.log(error)
    });
  
}

