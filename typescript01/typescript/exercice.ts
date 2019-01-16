import {Eleve} from "./class_eleve";

let nombre_a:number = 1;
let nombre_b:number = 2;

let prenom:string = 'jeanmi';
let age:number = 42;

let listePrenoms:Array<string> = ['Roger', 'Momo', 'Paule', 'Toto'];

function hello(prenom, age): string{
  return `Bonjour, je m'appellle ${prenom} et j'ai ${age} ans`
}

function hello_friends(listePrenoms:Array<string>):void{
  for(let prenom of listePrenoms){
    //console.log(prenom);
  }
}
hello_friends(listePrenoms);

let adresseu = {
  rue:'stalingrad',
  cp:31000,
  ville:'Toulouse',
};


function afficheAdresse(adresseu:{rue:string, cp?:string|number, ville:string}){
  //console.log(`J'habite à cette adresse : ${adresseu.rue} ${adresseu.cp} ${adresseu.ville}`)
}
afficheAdresse(adresseu);

export namespace NS_Lang {
    export class languages {
      list(){
        return ['anglais','espagnol','belge'];
      }
    }
}

export interface TheAddress {
  rue:string,
  cp:number,
  ville:string
}
var monAdresse = <TheAddress>{}
monAdresse.rue = 'stalingrad';
monAdresse.cp = 31000;
monAdresse.ville = 'Toulouse';

let eleve = new Eleve('jeanmi',12, monAdresse, [15,20,30]);
console.log(eleve.notes());
console.log(eleve.eleve_info());
console.log('moyenne ' + eleve.calc_moyenne());
console.log('liste des notes ' + eleve.notes());
console.log(eleve.listeLangues());
