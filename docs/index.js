let joke= {};
let getKanye = async ()=>{
    let response= await fetch("https://v2.jokeapi.dev/joke/Programming,Pun,Spooky,Christmas?type=twopart");


    if(response.ok){
    joke= await response.json();
    console.log(joke);
    document.getElementById('setup').innerHTML = joke.setup;


    }
}
getKanye();

function getJoke() {


      document.getElementById('setup').innerHTML = joke.delivery;

      }

