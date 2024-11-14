// Idades:18 anos, 14 anos, live
// Gênero: Terror, Ação, Ficção e Romance.

// Idade 18 anos:
// Terror - O Faral
// Ação - La Casade de Papel
// Ficção - Cenropéia Humana
// Romance - Cinquenta Tons de Cinza

// Idade 14 anos:
// Terror - Invocação do Mal
// Ação - Velozes e Furiosos 10
// Ficção - Moonfall - Ameaça Lunar
// Romance - Fabricante de Lágrimas

// Idade Livre:
// Terror - A Casa Monstro
// Ação - Hot Wheels
// Ficção - Megamenete
// Romance - A Bela e a Fera

let campoIdade;
let campoTerror
let campoAcao
let campoFiccao
let campoRomance

function setup() {
  createCanvas(600, 400);
  createElement('h1', 'Recomendador de Filmes e Séries');
  createSpan('Idade: ')
  campoIdade = createInput();
  campoTerror = createCheckbox('Terror');
  campoAcao = createCheckbox('Ação');
  campoFiccao = createCheckbox('Ficção');
  campoRomance = createCheckbox('Romance');
}

function draw() {
  background('rgb(2,2,78)');
  textAlign(CENTER, CENTER);
  textSize(40);
  fill('white')
  
  let idade = campoIdade.value();
  let terror = campoTerror.checked();
  let acao = campoAcao.checked();
  let ficcao = campoFiccao.checked();
  let romance = campoRomance.checked();
  
  let filme = geraRecomendacao(idade, terror, acao, ficcao, romance);
  
  text(filme, width/2, height/2);
  
}

function geraRecomendacao(idade, terror, acao, ficcao, romance){
  if(idade >= 18){
      if(terror){
        return 'O Farol'
    }else if(acao){
      return 'La Casa de Papel'
    }else if(ficcao){
      return 'Centopéia Humana'
    }else if (romance){
      return '50 Tons de Cinza'
    }else{
      return 'La Casa de Papel'
    }
  
  }else if(idade >=14){
     if(terror){
        return 'Invocação do Mal'
    }else if(acao){
      return 'Velozes e Furiosos 10'
    }else if(ficcao){
      return 'Moonfall - Ameaça Lunar'
    }else if(romance){
      return 'Fabricante de Lágrimas'
    }else{
      return 'Velozes e Furiosos 10'
    }
      
    }else{
    if(terror){
      return 'A Casa Monstro'
    }else if(acao){
      return 'Hot Wheels'
    }else if(ficcao){
      return 'Megamente'
    }else if (romance){
      return ' A Bela e a Fera'
    }else{
      return 'Hot Wheels'
    }
   }
}
