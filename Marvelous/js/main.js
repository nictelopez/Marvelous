document.querySelector('.searchhero').addEventListener('click', getSuperhero)

function getSuperhero(){
    let nameHero = document.querySelector('.hero').value

    fetch(`http://gateway.marvel.com/v1/public/characters?name=${nameHero}&ts=1&apikey=7595d6be205f65a617e0116eec9037c2&hash=02df934c14277e22cd2d58c1e19a1f42`)
    .then(res => res.json()) // parse response as JSON
    .then(json => {
      console.log(json.data.results[0])
      document.querySelector('.nameHero').innerText = json.data.results[0].name
      document.querySelector('.heroimg').src = json.data.results[0].thumbnail.path+"/portrait_uncanny.jpg"
      document.querySelector('.herodesc').innerText = json.data.results[0].description
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

document.querySelector('.searchcomic').addEventListener('click', getComic)

function getComic(){
    let comictitle = document.querySelector('.comic').value

    fetch(`http://gateway.marvel.com/v1/public/comics?title=${comictitle}&ts=1&apikey=7595d6be205f65a617e0116eec9037c2&hash=02df934c14277e22cd2d58c1e19a1f42`)
    .then(res => res.json()) // parse response as JSON
    .then(json => {
      console.log(json.data.results[0])
      document.querySelector('.namecomic').innerText = json.data.results[0].title
      document.querySelector('.comicimg').src = json.data.results[0].thumbnail.path+"/portrait_uncanny.jpg"
      document.querySelector('.comicdesc').innerText = json.data.results[0].description
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}