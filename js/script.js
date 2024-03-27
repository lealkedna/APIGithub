const repositorio = document.querySelector('.container')

function getApi(){
    fetch('https://api.github.com/users/nickname/repos')
    .then(res => response.json())
}