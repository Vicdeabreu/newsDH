let buttonClick = document.getElementById('btn')
// seleccionar lo que quiero clickar para luego agregar un evento
let board = document.getElementById('board');



buttonClick.addEventListener('click', async ()=>{
  // fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=82010756e6b64650a1985c7927027d36')
  // .then(response=>response.json())
  // .then(json=>{
  //   console.log(json.articles)
  //   mostrarNaTela(json.articles);
  // })

  let listaNoticias = (await fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=82010756e6b64650a1985c7927027d36')).json();

  mostrarNaTela(await listaNoticias.articles)
})

// De las informaciones de ese fetch, solo traeme el json. Coloca en json para traer la respuesta en formato json

let mostrarNaTela = listaNoticias =>{
  // for(let noticia of listaNoticias)
  listaNoticias.forEach(function(noticia,posicao){
    let card = `<div class="card" style="width: 18rem;">
    <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${noticia.title}</h5>
    <p class="card-text">${noticia.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`
    board.innerHTML += card;
  })

}