/*
1. doboz:
Kattintásra adjunk hozzá egy "blur" nevű class attribútumot, majd újabb kattintásra vegyük
le róla azt.
*/
var isBlurred = false;
document.getElementById('element-one').onclick=function(){
  isBlurred = !isBlurred;
  if(isBlurred){
    document.getElementById('element-one').classList.add("blur");
  }else{
  document.getElementById('element-one').classList.remove("blur");
  }
}

/*
2. doboz:
Ha az egérrel fölé megyünk változzon meg a háttérszíne pirosra, ha levesszük róla az egeret
változzon vissza az eredeti színére.
*/

/*
3. doboz:
Dupla kattintással sorsoljon egy számot 1 és 20 között és módosítsa a kapott számmal a doboz tartalmát. 
*/

document.getElementById('element-three').ondblclick=function(){
  document.getElementById('element-three').getElementsByClassName('text')[0].innerHTML=Math.floor((Math.random() * 20) + 1);
}

/*
4. doboz:
Kattintásra tűnjön el, majd egy 1 másodperces várakozás után ismét jelenjen meg.
*/

document.getElementsById('element-four').onclick=function(){
  document.getElementsById('element-four').classList.add('hidden');
  setTimeout(myFunction, 1000)
}

function myfunction(){
  document
}
/*
5. doboz:
Kattintásra alakítsa kör alakúra az összes dobozt.
*/


/*
6. doboz:
Form submit eseményre módosítsuk a doboz tartalmát az input mezőbe írt értékkel
*/


/*
7. doboz:
Keypress eseményre írjuk be a dobozba az adott karaktert, amit leütöttek
*/


/*
8. doboz:
Egérmozdítás eseményre írjuk be az egér pozíciójának x és y koordinátáját, 
a következő séma szerint: "X: {x-koordináta}, Y: {y-koordináta}"
*/


/*
9. doboz:
Submit eseményre módosítsuk a doboz tartalmát azzal az értékkel ami úgy áll elő, 
hogy végrehajtjuk a select inputban kiválasztott operációt,
a state-en és number inputba beírt értéken.

Az előállt végeredményt tároljuk el új state-ként!

Pl:
  Number input mezőbe írt érték: 5
  Select inputban kiválasztott érték: "mult"
  Aktuális state: 9

  Operáció: 9 * 5
  
  Dobozba és state-be beírandó érték: 45
*/
