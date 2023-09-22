"use strict";

let z=2;

while(z<12){  // le while correspond à "tant que" c'est à dire que la boucle fonctionera tant que z < 12 
    z++;
    if(z==10){  // ainsi si z == 10 la boucle continue 
        continue;
    }
    if (z==11){ // si elle est égale à 11 elle s'arrête 
        break;
    }
    console.log(z); // z est alors égale au nombre entier le plus proche de la limite fixé au début (11)
}
console.log('jai cassé la boucle au bout de ' +z+ " tour"); // la boucle a donc procédé z fois c'est à dire 11 fois
