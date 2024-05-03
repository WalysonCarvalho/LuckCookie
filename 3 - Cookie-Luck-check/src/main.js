const containerOne = document.querySelector('.container-1');
const containerTwo = document.querySelector('.container-2');
const fortuneCookie = document.querySelector('.fortuneCookie');
const luckBnt = document.querySelector('#luck-bnt');

const luck = [
  "O aprendizado é como o horizonte: não há limites.",
  "Não há que ser forte, há que ser flexível.",
  "Limitações são fronteiras criadas apenas pela nossa mente.",
  "O cão não ladra por valentia e sim por medo.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "A palavra é prata, o silêncio é ouro.",
  "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
  "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
  "O homem só envelhece quando os lamentos substituem seus sonhos.",
  "A persistência realiza o impossível.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
]

//Eventos 

fortuneCookie.addEventListener('click', handleTryClick); 
luckBnt.addEventListener('click', handleResetClick);
document.addEventListener('keydown', function(e) {
  if (e.key == 'Enter' && containerTwo.classList.contains('hide')){
    handleTryClick();
  } else if (e.key == 'Enter' && containerOne.classList.contains('hide')){
    handleResetClick()
  }
}
)

// funções 

function handleTryClick (event){
  let allLuckies = luck.length
  let randomNumber = Math.floor(Math.random() * allLuckies)
  toggleScreen()
  containerTwo.querySelector('p').innerText = `${luck [randomNumber]}`
}

function handleResetClick (){
  toggleScreen()

}

function toggleScreen (){
  containerOne.classList.toggle('hide')
  containerTwo.classList.toggle('hide')
}