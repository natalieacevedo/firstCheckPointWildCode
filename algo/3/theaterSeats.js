/*
[EN] Complete the theaterSeats function to return a matrix (array of arrays)
where each sub-array contains the position of the seats in a row.
example :
[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 

[FR] Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice (tableau de tableaux)
où chaque sous-tableau liste les positions des sieges d'une rangée.
exemple :
[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 
*/

function theaterSeats() {

  let theater = [];
  
  
  for (let i = 1; i <= 26; i++){
    
    let seatsLine = [];
    for (let j = 1; j <= 26; j++){
      seatsLine.push(`${i}-${j}`);
    }

    theater.push(seatsLine);
  }
  

  return theater;
  
}

console.log(theaterSeats());


module.exports = theaterSeats;
