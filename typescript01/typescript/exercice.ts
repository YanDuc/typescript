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

class Eleve {
  _prenom:string;
  _age:number;
  _adresse:TheAddress;
  _note:Array<number> = [];

  constructor(prenom, age, adresse:TheAddress, note){
    this._prenom = prenom;
    this._age = age;
    this._adresse = adresse;
    this.note = note;
  }

  set prenom(prenom){
    this._prenom = prenom;
  }
  get prenom(){
    return this._prenom;
  }
  set age(age){
    this._age = age;
  }
  get age(){
    return this._age;
  }
  set adresse(adresse){
    this._adresse = adresse;
  }
  get adresse(){
    return this._adresse
  }
  set note(noteList){
    for(let note of noteList){
      if(note >=0 && note <= 20){
        this._note.push(note);
      }
    }
  }
  get note(){
    return this._note;
  }
  eleve_info(){
    return `Eleve ${this._prenom} agé de ${this._age} ans habite au ${this._adresse.rue} ${this._adresse.cp} ${this._adresse.ville}.`
  }
  calc_moyenne(){
    let nbNote:number = this._note.length;
    let sumNote:number = 0;
    for(let note of this._note){
        sumNote += note;
    }
    return sumNote/nbNote;
  }
  notes(){
    let listeDesNotes:string = '';
    for(let note of this._note){
      listeDesNotes += note+', '
    }
    return listeDesNotes
  }
}

interface TheAddress {
  rue:string,
  cp:number,
  ville:string
}
var monAdresse = <TheAddress>{}
monAdresse.rue = 'stalingrad';
monAdresse.cp = 31000;
monAdresse.ville = 'Toulouse';

let eleve = new Eleve('jeanmi',12, monAdresse, [15,20,30]);
//console.log(eleve.notes());
console.log(eleve.eleve_info());
//console.log('moyenne ' + eleve.calc_moyenne());
//console.log('liste des notes ' + eleve.notes());

namespace NS_Lang {
    class languages {
      _languages:string[];

      constructor(languages){
        this.languages = languages
      }

      get languages(){
        return this._languages;
      }
      set languages(language){
        this._languages = language;
      }

      list(){
        return this._languages;
      }
    }
}
