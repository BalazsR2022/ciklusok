var szamok = [2, 4, 13, 4, 6, 42, 3];

var parosokSzama =  0;

parosokSzama += szamok[0] %2 === 0? 1 :0;

var index =0;
var paratlanokSzama = 0;

while (index < szamok.length){
paratlanokSzama += szamok[index] %2 === 1 ? 1 :0;


index++;

}

console.log(paratlanokSzama);
var paratlanokSzama2 = 0;

for (i = 0; i < szamok.length; i++){

    paratlanokSzama2 += szamok[i] %2 === 1 ? 1 : 0;

    
}

 var paratlanokSzama3 = 0;


for (szam of szamok){

    paratlanokSzama3 += szam % 2 === 1 ? 1 : 0 ;

    
}
console.log (paratlanokSzama3);